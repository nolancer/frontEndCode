import { RegisterUserData } from "@/app/auth/register/[type]/RegisterForm/userTypes";

export interface AuthRegisterState {
    authData: RegisterUserData;
    isSocialLoginInitiated: boolean;
}