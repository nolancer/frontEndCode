import AuthProvider from "@/providers/AuthProvider";
import StoreProvider from "@/providers/StoreProvider";
import NextSnackbarProvider from "@/providers/NextSnackbarProvider";
import GoogleOAuthProviderWrapper from "@/providers/GoogleOAuthProviderWrapper";

interface MainAppLayoutProps {
    children: React.ReactNode;
}

const MainAppLayout = ({
    children
}: MainAppLayoutProps) => {
    return (
        <AuthProvider>
            <GoogleOAuthProviderWrapper>
                <StoreProvider>
                    <NextSnackbarProvider>
                        {children}
                    </NextSnackbarProvider>
                </StoreProvider>
            </GoogleOAuthProviderWrapper>
        </AuthProvider>
    )
}
export default MainAppLayout;