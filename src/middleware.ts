import { jwtVerify } from "jose";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/account", "/admin", "/cart/checkout", "/api/user"];

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route));
    try {
        const authToken = request.cookies.get("auth_token")?.value;

        if (!authToken && isProtectedRoute) {
            const loginUrl = new URL("/login?redirect=" + pathname, request.url);
            return NextResponse.redirect(loginUrl);
        }

        if (authToken) {
            const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
            const { payload: decodedToken }: { payload: any } = await jwtVerify(authToken, secret);

            const response = NextResponse.next();

            response.headers.set("X-User-Info-ID", decodedToken.userId);
            response.headers.set("X-User-Info-name", decodedToken.name);
            response.headers.set("X-User-Info-email", decodedToken.email);
            response.headers.set("X-User-Info-gender", decodedToken.gender);
            response.headers.set("X-User-Info-status", decodedToken.status);
            response.headers.set("X-User-Info-mobile", decodedToken.mobile);

            console.log("[middleware] " + decodedToken.userId);

            return response;
        }
    } catch (error) {
        if(isProtectedRoute)
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}
