import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ message: "Logged out successfully" });

  response.cookies.set("auth_token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Secure in production
    expires: new Date(0), // Set expiration in the past
    path: "/", // Ensure it clears across the whole site
  });

  return response;
}