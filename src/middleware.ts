import {
    DEFAULT_LOGIN_REDIRECT,
    NEW_USER_REDIRECT_URL,
    UNVERIFIED_USER_EMAIL_REDIRECT,
    apiAuthPrefix,
    apiRoutes,
    authRoutes,
    publicRoutes,
} from "@/lib/routes";
import type { NextRequest } from "next/server";
import { verifyUserCookie } from '@/lib/actions/auth-actions';
import { RegisterUserData } from "./providers/AuthProvider/authTypes";

export function middleware(request: NextRequest) {
    const { nextUrl } = request;
    let userCookie = request.cookies.get("user")?.value;
    let user = verifyUserCookie(userCookie) as RegisterUserData;

    console.log("Middleware Started");
    const isLoggedIn = !!user;

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isApiRoute = apiRoutes.includes(nextUrl.pathname);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    if (isPublicRoute) {
        return null;
    }

    if (isApiAuthRoute) {
        return null;
    }

    if (isApiRoute) {
        return null;
    }

    if (isAuthRoute) {
        if (isLoggedIn) {
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
        }
        return null;
    }

    if (
        !isLoggedIn
        && !isPublicRoute
        && !isApiRoute
        && !isAuthRoute
        && !isApiAuthRoute
    ) {
        return Response.redirect(new URL(
            `/auth/login`,
            nextUrl
        ));
    }

    if (isLoggedIn) {
        console.log("Already logged in middleware", nextUrl.pathname, user);
        if (user.emailVerified === false) {
            Response.redirect(new URL(
                `${NEW_USER_REDIRECT_URL}`,
                nextUrl
            ));

            setTimeout(() => {
                return Response.redirect(new URL(
                    `${UNVERIFIED_USER_EMAIL_REDIRECT}`,
                    nextUrl
                ));
            }, 1000)
        }

        return null;
    }

    return null;
};

// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}