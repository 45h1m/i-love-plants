"use server";

import connectDB from "@/utils/connectDB";
import { userModel } from "@/models/user.model";
import { z } from "zod";
import { cookies, headers } from "next/headers";
import jwt from "jsonwebtoken";
import { isRateLimited } from "@/utils/rateLimiter";

const userSchema = z.object({
    name: z.string().trim().min(1, "Name is required"),
    mobile: z.string().regex(/^[0-9]{10}$/, "Please enter a valid 10-digit mobile number"),
    gender: z.enum(["male", "female", "other"]),
});

export async function updateUser(formData: FormData) {
    const requestHeaders = await headers();
    const userId = requestHeaders.get("X-User-Info-ID");
    const userEmail = requestHeaders.get("X-User-Info-email");

    if(!userId) return { success: false, message: "Unauthenticated" };

    if (isRateLimited(`update-user:${userId.toLowerCase()}`)) {
            return { success: false, message: "Too many request, try latter" };
        }

    try {
        await connectDB();

        console.log(userId);

        const updatedData = {
            name: formData.get("name"),
            gender: formData.get("gender"),
            mobile: formData.get("mobile"),
        };

        const parsedData = userSchema.safeParse(updatedData);

        if (parsedData.success === false) return { success: false, message: "Invalid data, please check again" };

        const user = await userModel.findByIdAndUpdate(userId, parsedData.data, { new: true });

        if (user) {
            console.log(user);
            const token = jwt.sign(
                { userId: userId, name: user.name, gender: user.gender, status: user.status, email: user.email, mobile: user.mobile },
                process.env.JWT_SECRET!,
                {
                    expiresIn: "7d", // Token expires in 7 days
                }
            );

            let cookie = await cookies();

            cookie.set("auth_token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                maxAge: 7 * 24 * 60 * 60, // 7 days
                path: "/",
            });

            return { success: true, message: `${parsedData?.data?.name || "Dear customer"}, your details updated successfully` };
        }

        return { success: false, message: "User not found" };
    } catch (error) {
        console.error("Error updating user:", error);
        return { success: false, message: "Can't update user. Email: " + userEmail };
    }
}
