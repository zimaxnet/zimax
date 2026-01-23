// Simple in-memory rate limiter for development
// For production, use Redis or a proper rate limiting service

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

const store: RateLimitStore = {};

const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 5; // 5 requests per window

export function checkRateLimit(identifier: string): { allowed: boolean; resetTime?: number } {
  const now = Date.now();
  const record = store[identifier];

  if (!record || now > record.resetTime) {
    // Create new record or reset expired one
    store[identifier] = {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    };
    return { allowed: true };
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return { allowed: false, resetTime: record.resetTime };
  }

  record.count++;
  return { allowed: true };
}

// Clean up old entries periodically
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    Object.keys(store).forEach((key) => {
      if (store[key].resetTime < now) {
        delete store[key];
      }
    });
  }, RATE_LIMIT_WINDOW);
}
