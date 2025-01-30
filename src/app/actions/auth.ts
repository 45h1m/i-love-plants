"use server";

import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { userModel } from "@/models/user.model"; // Adjust the path to your User model
import { sendOTP } from "@/utils/sendOTP"; // A helper function to send OTP (e.g., via email or SMS)
import connectDB from "@/utils/connectDB";
import { validateEmailOrPhone } from "@/utils/validateEmailOrPhone";
import { OTPModel } from "@/models/otp.model";
import { isRateLimited } from "@/utils/rateLimiter";

// Generate and send OTP
export async function generateOTP(contact: string) {
    try {
        // Validate contact input
        if (!contact || typeof contact !== "string") {
            return { success: false, message: "Provide A Valid Contact" };
        }

        const validContact = validateEmailOrPhone(contact);

        if (validContact === "Invalid") {
            return { success: false, message: "Provide A Valid Contact" };
        }
        if (validContact === "Phone Number") {
            return { success: false, message: "Provide A Valid Email" };
        }
        
        if (isRateLimited(`pwd-reset:${contact.toLowerCase()}`)) {
            return { success: false, message: "Too many request, try latter" };
        }

        await connectDB();
        console.log(contact);

        // Find user by email or mobile
        const user = await userModel.findOne({
            $or: [{ email: contact }, { mobile: contact }],
        });
        console.log("DB query completed");

        // Generate OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000); // OTP expires in 10 minutes

        if (user) {
            // Update existing user's OTP
            user.otp = { code: otp, expiresAt: otpExpiresAt };
            await user.save();
            console.log(user);
        } else {
            const newOTP = await OTPModel.findOneAndUpdate(
                { contact: contact }, // Search by contact
                { code: otp, expiresAt: otpExpiresAt }, // Update or set new values
                { upsert: true, new: true }
            );
            console.log(newOTP);
        }

        // Send OTP to the user (e.g., via email or SMS)
        const emailRes = await sendOTP(contact, otp);

        if (emailRes.success === false) {
            return { success: false, message: "Failed to send OTP" };
        }
        if (emailRes.success === true) {
            return { success: true, message: "OTP sent successfully" };
        }

        return { success: false, message: "OTP was not sent, something went wrong" };
    } catch (error) {
        console.error("Error in generateOTP:", error);
        return { success: false, message: error instanceof Error ? error.message : "Failed to generate OTP" };
    }
}

// Verify OTP and create user if they don't exist
export async function verifyOTP(contact: string, otp: string) {
    try {
        await connectDB();
        // Validate inputs
        if (!contact || !otp || typeof contact !== "string" || typeof otp !== "string") {
            return { success: false, message: "Invalid contact or OTP provided" };
        }

        const validContact = validateEmailOrPhone(contact);

        if (validContact === "Invalid") {
            return { success: false, message: "Provide A Valid Contact" };
        }
        if (validContact === "Phone Number") {
            return { success: false, message: "Provide A Valid Email" };
        }

        // Find user by email or mobile and check OTP
        let user = await userModel.findOne({
            $or: [{ email: contact }, { mobile: contact }],
            "otp.code": otp,
            "otp.expiresAt": { $gt: new Date() }, // Check if OTP is not expired
        });

        if (!user) {
            const otpRecord = await OTPModel.findOne({
                contact,
                code: otp, // Ensure OTP matches
                expiresAt: { $gt: new Date() }, // Ensure OTP is not expired
            });

            console.log(otpRecord);

            if (!otpRecord) {
                return { success: false, message: "Invalid OTP or Expired" };
            }

            user = new userModel({
                email: contact.includes("@") ? contact : undefined,
                mobile: contact.includes("@") ? undefined : contact,
            });
            await user.save();

            const deleted = await OTPModel.findOneAndDelete({
                contact,
            });

            if (deleted) console.log("OTP deleted");
        }

        if (user) {
            // Clear OTP after successful verification
            user.otp = undefined;
            await user.save();
        }

        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id.toString(), name: user.name, gender: user.gender, status: user.status, email: user.email, mobile: user.mobile },
            process.env.JWT_SECRET!,
            {
                expiresIn: "7d", // Token expires in 7 days
            }
        );

        // Set JWT token in a secure HTTP-only cookie
        let cookie = await cookies();
        cookie.set("auth_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 7 * 24 * 60 * 60, // 7 days
            path: "/",
        });

        return { success: true, message: "OTP verified successfully", user: { id: user._id.toString() } };
    } catch (error) {
        console.error("Error in verifyOTP:", error);
        return { success: false, message: "Failed to verify OTP" };
    }
}
