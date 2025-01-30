import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

interface EmailResponse {
    success: boolean;
    messageId?: string;
    error?: string;
}

async function sendEmail(username: string, content: string): Promise<EmailResponse> {
    try {
        const info = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: username,
            subject: "iloveplants.in | Email Verification",
            text: content,
            html: content,
        });

        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error("Failed to send email:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "An unknown error occurred",
        };
    }
}

export async function sendOTP(contact: string, otp: string) {
    console.log(`Sending OTP to ${contact}: ${otp}`);

    return await sendEmail(
        contact,
        `<div style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
        
        <!-- Header -->
        <div style="text-align: center; padding: 20px 0;">
            <a href="https://iloveplants.in" style="color: #2e7d32; font-size: 24px; font-weight: bold; text-decoration: none;">
                🌿 iloveplants.in
            </a>
        </div>

        <!-- Content -->
        <div style="padding: 20px; line-height: 1.6;">
            <h2 style="margin: 0; padding-bottom: 10px;">Verify Your Email Address</h2>
            <p style="margin: 0; padding-bottom: 10px;">Hello there! 👋</p>
            <p style="margin: 0; padding-bottom: 10px;">Thank you for choosing iloveplants.in. Please use the verification code below to complete your email verification:</p>
            
            <!-- OTP Box -->
            <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center;">
                <div style="font-size: 32px; font-weight: bold; color: #2e7d32; letter-spacing: 4px; margin: 10px 0;">
                    ${otp}
                </div>
                <p style="margin: 0;">This code will expire in 10 minutes</p>
            </div>

            <p style="margin: 0; padding-bottom: 10px;">If you didn't request this verification code, please ignore this email or contact our support team if you have concerns.</p>
            
            <p style="color: #666; font-size: 13px; font-style: italic; margin: 0;">For security reasons, never share this code with anyone. Our team will never ask for your OTP.</p>
        </div>

        <!-- Footer -->
        <div style="text-align: center; padding: 20px; color: #666; font-size: 12px;">
            <p style="margin: 0; padding-bottom: 5px;">© 2025 iloveplants.in. All rights reserved.</p>
            <p style="margin: 0; padding-bottom: 5px;">You're receiving this email because you signed up for an account on iloveplants.in</p>
            <p style="margin: 0;">Agartala, Ushabazar, Tripura, India</p>
        </div>

    </div>
</div>
`
    );
}
