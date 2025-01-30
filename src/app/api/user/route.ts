import { NextResponse } from "next/server";
import connectDB from "@/utils/connectDB"; // Ensure you have a DB connection function
import { userModel } from "@/models/user.model";

export async function GET(req: Request) {
    try {
        await connectDB(); // Ensure MongoDB is connected

        // Extract user ID from headers
        const userId = req.headers.get("X-User-Info-ID");
        if (!userId) return NextResponse.json({ error: "User ID missing" }, { status: 400 });

        // Fetch user from MongoDB
        const user = await userModel.findById(userId);
        if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

        return NextResponse.json(user);
    } catch (error) {
        console.error("Error fetching user:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
