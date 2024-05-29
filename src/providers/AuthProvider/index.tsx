"use client";
import { useRouter } from "next/navigation";
import { getUserByEmail } from "@/lib/dbQueries/GET/getUserByEmail";
import { useContext, createContext, useState, useEffect } from "react";
import { LoginActionResult, LoginUserData, RegisterUserData } from "@/providers/AuthProvider/authTypes";
import { getUserFromCookie, removeUserFromCookie, setUserInCookie } from "@/lib/actions/auth-actions";

interface AuthContextType {
    token: string;
    user: any;
    loginAction: (data: LoginUserData) => Promise<LoginActionResult>;
    logOut: () => void;
    loading: boolean;
}

const AuthContext = createContext({} as AuthContextType);

interface AuthProviderProps {
    children: React.ReactNode;
}

const AuthProvider = ({
    children
}: AuthProviderProps) => {
    const router = useRouter();

    const [user, setUser] = useState<null | RegisterUserData>(null);
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState("");

    useEffect(() => {
        let localUser = getUserFromCookie();
        if (user === null) {
            if (localUser !== null) {
                setUser(localUser);
                setToken(localUser.id);
            } else {
                setUser(null);
            }

            setLoading(false);
        }
    }, [user, token]);

    const loginAction = async (data: LoginUserData): Promise<LoginActionResult> => {
        const email = data?.email;
        const password = data?.password;

        try {
            const dbUser = await getUserByEmail(email as string) as any;

            if (dbUser.length === 0) {
                return Promise.resolve({ status: "error", error: "UserNotFound" });
            } else {
                const userData: RegisterUserData = dbUser[0];

                console.log("User data is equal to : ", userData);

                if (userData.accountType === "email") {
                    if (email === userData.email && password === userData.password) {
                        setUser(userData);
                        setUserInCookie(userData);
                        return Promise.resolve({ status: "success", error: null });
                    } else {
                        return Promise.resolve({ status: "error", error: "CredentialsSignin" });
                    }
                }

                if (userData.accountType === "google") {
                    if (email === userData.email) {
                        setUser(userData);
                        setUserInCookie(userData);
                        return Promise.resolve({ status: "success", error: null });
                    } else {
                        return Promise.resolve({ status: "error", error: "SocialSignin" });
                    }
                }

                return Promise.resolve({ status: "error", error: "InvalidAccountType" });
            }
        } catch (err) {
            console.error(err);
            return Promise.resolve({ status: "error", error: "unknownError" });
        }
    };

    const logOut = () => {
        setUser(null);
        removeUserFromCookie();
        router.push("/auth/login");
    };

    return (
        <AuthContext.Provider value={{ token, user, loading, loginAction, logOut } as AuthContextType}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
};