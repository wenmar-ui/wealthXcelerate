/**
 * security.ts — Frontend security utilities
 * Implements Section 3 (Content Sanitization) and Section 6 (Rate Limiting)
 * of the WealthXcelerate Security Architecture.
 */

// ─── Input Sanitization ──────────────────────────────────────────────────────

/**
 * Strips HTML tags and trims whitespace to prevent XSS via form inputs.
 * React already escapes DOM values, but this adds a defense-in-depth layer
 * before data is transmitted to the CRM.
 */
export function sanitizeText(value: string): string {
  return value
    .replace(/<[^>]*>/g, '')       // Strip HTML tags
    .replace(/[<>"'`]/g, '')       // Remove remaining dangerous characters
    .trim()
    .slice(0, 1000);               // Hard cap to prevent oversized payloads
}

/**
 * Validates and sanitizes an email address.
 */
export function sanitizeEmail(value: string): string {
  const trimmed = value.trim().toLowerCase().slice(0, 254);
  return trimmed;
}

/**
 * Returns true if the email format is valid.
 */
export function isValidEmail(email: string): boolean {
  const EMAIL_REGEX = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
  return EMAIL_REGEX.test(email);
}

/**
 * Returns true if the name field contains only safe characters.
 */
export function isValidName(name: string): boolean {
  return /^[a-zA-Z\s'\-]{1,100}$/.test(name);
}

// ─── Rate Limiting ────────────────────────────────────────────────────────────

interface RateLimitEntry {
  count: number;
  windowStart: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

/**
 * Simple client-side rate limiter.
 * Implements Section 6: "Throttling on interaction-heavy buttons."
 *
 * @param key     - Unique identifier for the action (e.g. 'contact-form')
 * @param limit   - Max number of attempts allowed in the window
 * @param windowMs - Time window in milliseconds (default: 60 seconds)
 * @returns true if the action is allowed, false if rate limited
 */
export function checkRateLimit(
  key: string,
  limit: number = 3,
  windowMs: number = 60_000
): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(key);

  if (!entry || now - entry.windowStart > windowMs) {
    rateLimitStore.set(key, { count: 1, windowStart: now });
    return true;
  }

  if (entry.count >= limit) {
    return false; // Rate limited
  }

  entry.count += 1;
  return true;
}

/**
 * Returns the remaining seconds until the rate limit resets.
 */
export function getRateLimitRemaining(
  key: string,
  windowMs: number = 60_000
): number {
  const entry = rateLimitStore.get(key);
  if (!entry) return 0;
  const elapsed = Date.now() - entry.windowStart;
  return Math.max(0, Math.ceil((windowMs - elapsed) / 1000));
}
