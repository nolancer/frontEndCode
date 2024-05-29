import CryptoJS from "crypto-js";

const ENCRYPTION_KEY = "ZC(-~7MQ$[V8O?b%@$##@13d4%)(!*&dsOd1w";

interface EncryptionData {
    data: any;
}

// Encryption and decryption functions
export const encryptData = (data: EncryptionData) => {
    return CryptoJS.AES.encrypt(JSON.stringify(data), ENCRYPTION_KEY).toString();
};

export const decryptData = (encryptedData: any) => {
    if (!encryptedData) {
        return null;
    }
    try {
        const bytes = CryptoJS.AES.decrypt(encryptedData, ENCRYPTION_KEY);
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    } catch {
        return null;
    }
};