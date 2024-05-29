import { Timestamp } from "firebase-admin/firestore";
import Cookies from "js-cookie";
import { decryptData, encryptData } from "@/lib/encryptions";
import { RegisterUserData } from "@/app/auth/register/[type]/RegisterForm/userTypes";

export const setUserInCookie = (user: RegisterUserData) => {
    const userString = JSON.stringify(user);
    const encryptedUserData = encryptData({ data: userString });
    Cookies.set("user", encryptedUserData,
        {
            secure: true,
            sameSite: "lax",
            expires: 2
        });
}

export const getUserFromCookie = () => {
    let encryptedUserData = Cookies.get("user");
    if (encryptedUserData !== null) {
        const decryptedUserData = decryptData(encryptedUserData);

        if (decryptedUserData !== null) {
            const userDecryptedData = JSON.parse(decryptedUserData.data);
            return userDecryptedData;
        } else {
            return null;
        }
    } else {
        return null;
    }
}

export const verifyUserCookie = (cookie: any) => {
    if (cookie !== null) {
        const decryptedUserData = decryptData(cookie);

        if (decryptedUserData !== null) {
            const userDecryptedData = JSON.parse(decryptedUserData.data);
            return userDecryptedData;
        } else {
            return null;
        }
    } else {
        return null;
    }
}

export const removeUserFromCookie = () => {
    Cookies.remove("user");
}

export const isAuthenticated = () => {
    if (getUserFromCookie() !== null) {
        return true;
    } else {
        return false;
    }
};