import { db } from "@/firebase";
import { ACCOUNTS_COLLECTION } from "@/utils/contants";
import { collection, getDocs, query, where } from "firebase/firestore";

export const getUserByEmail = async (email: string) => {
    const q = query(collection(db, ACCOUNTS_COLLECTION), where("email", "==", email));

    const querySnapshot = await getDocs(q);

    let array = querySnapshot.docs.map(doc => {
        return doc.data()
    });

    console.log("Data from Firestore for usersList by user email: ", array)

    return array;
}

export const getUserById = async (id: string) => {
    const q = query(collection(db, ACCOUNTS_COLLECTION), where("id", "==", id));

    const querySnapshot = await getDocs(q);

    let array = querySnapshot.docs.map(doc => {
        return doc.data()
    });

    console.log("Data from Firestore for usersList by user id: ", array)

    return array;
}