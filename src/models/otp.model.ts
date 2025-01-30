import mongoose, { Schema, Document, models } from "mongoose";

export interface IOtp extends Document {
    contact: string;
    code: string;
    expiresAt: Date;
}

const OtpSchema = new Schema<IOtp>({
    contact: {
        type: String,
        required: true,
        unique: true, // Ensures one active OTP per contact
        sparse: true,
    },
    code: {
        type: String,
        required: true,
    },
    expiresAt: {
        type: Date,
        required: true,
        expires: 600, // Automatically delete after 10 minutes (MongoDB TTL index)
    },
});

export const OTPModel = models.OTP || mongoose.model<IOtp>("OTP", OtpSchema);
