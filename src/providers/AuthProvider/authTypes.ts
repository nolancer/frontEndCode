export type LoginActionError = "CredentialsSignin" |
    "SocialSignin" |
    "unknownError" |
    "UserNotFound" |
    "InvalidAccountType" |
    "UserAlreadyExistsEmail" |
    "UserAlreadyExistsGoogle";

export type LoginActionResult =
    | { status: "success"; error: null }
    | { status: "error"; error: LoginActionError };

export interface RegisterUserData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: "freelancer" | "client" | null;
    country: string;
    createdAt: Date | null;
    updatedAt: Date | null;
    accountType: "email" | "google" | "facebook" | "apple" | "twitter" | "github" | null;
    emailVerified: boolean;
    image: string;
    isTwoFactorEnabled: boolean;
    twoFactorConfirmationType: "email" | "phone" | "none" | null;
}

export interface LoginUserData {
    email: string;
    password?: string;
}