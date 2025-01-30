// lib/get-client-ip.ts
import { NextApiRequest } from "next";

/**
 * Extracts the client's IP address from the request.
 * Handles proxies (e.g., Vercel, NGINX).
 */
export function getClientIp(req: NextApiRequest): string | null {
    // Try x-forwarded-for header (common in proxy setups)
    const forwardedFor = req.headers["x-forwarded-for"];
    if (typeof forwardedFor === "string") {
        return forwardedFor.split(",")[0].trim(); // First IP in the list
    }

    // Fallback to direct connection IP
    return req.socket.remoteAddress || null;
}
