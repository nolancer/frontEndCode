/**
 * An Array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */

export const publicRoutes = [
    "/",
]

/**
 * An Array of routes that are used for API authentication
 * These routes do not require authentication 
 * They are public api routes
 * @type {string[]}
 */
export const apiRoutes = [
    "/api/user",
]

/**
 * An Array of routes that are used for authentication
 * These routes will redirect logged in users to / main page
 * @type {string[]}
 */

export const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/register/client",
    "/auth/register/freelancer",
]

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication 
 * purposes
 * @type {string}
 */

export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after a successful login
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/";

/**
 * The new user redirect routes
 */

export const NEW_USER_REDIRECT_URL = "/auth/register/registration-success";

/** 
 * The unVerified user email redirect routes
 * These routes are used to redirect users who have not verified their email 
 * 
 */

export const UNVERIFIED_USER_EMAIL_REDIRECT = "/auth/register/verify-email";