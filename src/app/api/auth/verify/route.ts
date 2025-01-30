// app/api/auth/verify/route.js
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest) {

    const userID = req.headers.get("X-User-Info-ID");
    const userName = req.headers.get("X-User-Info-name");
    const userGender = req.headers.get("X-User-Info-gender");
    const userStatus = req.headers.get("X-User-Info-status");
    const userEmail = req.headers.get("X-User-Info-email");
    const userMObile = req.headers.get("X-User-Info-mobile");

    console.log("[/auth/verify] " + userID);

    if(!userID) return NextResponse.json({ message: "Unauthenticated" }, { status: 401 });

    return NextResponse.json({ id: userID, name: userName, gender: userGender, status: userStatus, email: userEmail, mobile: userMObile }, { status: 200 }); 

}
