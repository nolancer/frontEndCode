"use client";

import { GoogleOAuthProvider } from '@react-oauth/google';

interface GoogleOAuthProviderWrapperProps {
    children: React.ReactNode;
}

const GoogleOAuthProviderWrapper = ({ children }: GoogleOAuthProviderWrapperProps) => {
    return (
        <GoogleOAuthProvider
            clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}
        >
            {children}
        </GoogleOAuthProvider>
    )
}
export default GoogleOAuthProviderWrapper;