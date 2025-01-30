// lib/rate-limiter.ts
const rateMap = new Map<string, { attempts: number; lastReset: number }>();
const MAX_ATTEMPTS = 3; // Max attempts per window
const WINDOW_MS = 1 * 60 * 1000;

/**
 * Rate limit check for a given key.
 * @param key - Unique identifier for rate limiting (e.g., email, IP).
 * @returns `true` if rate limited, `false` otherwise.
 */
export function isRateLimited(key: string): boolean {
    if(key === process.env.ADMIN_EMAIL) return false;
    const now = Date.now();
    const entry = rateMap.get(key);

    if (!entry || now - entry.lastReset > WINDOW_MS) {
        // Reset attempts for new or expired window
        rateMap.set(key, { attempts: 1, lastReset: now });
        return false;
    }

    if (entry.attempts >= MAX_ATTEMPTS) {
        return true; // Rate limited
    }

    entry.attempts++;
    return false;
}

// Cleanup old entries every hour to prevent memory leaks
setInterval(() => {
    const now = Date.now();
    rateMap.forEach((entry, key) => {
        if (now - entry.lastReset > WINDOW_MS * 24) {
            // 24 windows
            rateMap.delete(key);
        }
    });
}, 10 * 60 * 1000);
