import { db } from "@/firebase";
import { collection, getDocs, query } from "firebase/firestore";

export const getDocsByCollection = async (collectionReference: string) => {
    try {
        const q = query(collection(db, collectionReference));

        const querySnapshot = await getDocs(q);

        let array = querySnapshot.docs.map(doc => {
            return doc.data()
        });

        console.log("Data from Firestore for Data/Chat/Single/Users: ", array)

        return array;

    } catch (error) {
        console.log("Error getting document: ", error)
        return null;
    }
}