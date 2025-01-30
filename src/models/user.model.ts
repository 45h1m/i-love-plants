import { models } from "mongoose";

const mongoose = require("mongoose");

export interface Address {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    phone?: string; // Optional field
    email?: string; // Optional field
    isPrimary: boolean;
    status: "active" | "inactive" | "pending"; // Allowed status values
}

export interface User {
    name: string;
    dp: string;
    gender: "male" | "female" | "other";
    email: string;
    mobile: string;
    otp?: {
        code: string;
        expiresAt: Date;
    };
    lastLogin?: Date; // Optional field
    createdAt: Date;
    status: "active" | "inactive" | "pending"; // Allowed status values
    addresses: Address[]; // Array of Address objects
}

// Optionally, you can define a separate interface for the OTP object
export interface OTP {
    code: string;
    expiresAt: Date;
}

const addressSchema = new mongoose.Schema({
    street: {
        type: String,
        required: true,
        trim: true,
    },
    city: {
        type: String,
        required: true,
        trim: true,
    },
    state: {
        type: String,
        required: true,
        trim: true,
    },
    postalCode: {
        type: String,
        required: true,
        trim: true,
        match: [/^[0-9]{5}(?:-[0-9]{4})?$/, "Please enter a valid postal code"],
    },
    country: {
        type: String,
        required: true,
        trim: true,
    },
    phone: {
        type: String,
        trim: true,
        match: [/^[0-9]{10}$/, "Please enter a valid 10-digit phone number"],
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },
    isPrimary: {
        type: Boolean,
        default: false,
    },
    status: {
        type: String,
        enum: ["active", "inactive", "pending"], // Allowed status values
        default: "active", // Default status
    },
});

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    dp: {
        default: "/images/dp-placeholder.png",
        type: String,
        trim: true,
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"],
    },
    email: {
        type: String,
        unique: true,
        sparse: true,
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },
    mobile: {
        type: String,
        unique: true,
        sparse: true,
        trim: true,
        match: [/^[0-9]{10}$/, "Please enter a valid 10-digit mobile number"],
    },
    otp: {
        code: String,
        expiresAt: Date,
    },
    lastLogin: Date,
    createdAt: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        enum: ["active", "inactive", "pending"], // Allowed status values
        default: "active", // Default status
    },
    addresses: [addressSchema], // Embedding the address schema as an array
});

userSchema.methods.generateOTP = function () {
    this.otp = {
        code: Math.floor(100000 + Math.random() * 900000).toString(),
        expiresAt: Date.now() + 10 * 60 * 1000, // OTP expires in 10 minutes
    };
    return this.otp.code;
};

export const userModel = models.User || mongoose.model("User", userSchema);
