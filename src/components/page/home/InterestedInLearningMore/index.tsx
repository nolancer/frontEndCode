import { useState } from "react";
import { SnackbarProvider, useSnackbar } from 'notistack'
import { useRouter } from "nextjs13-progress";
import Button from "@/components/base/Button";
import { whyYouShouldLearnMore } from "./data";
import Input from "@/components/base/Input";
import { IconButton } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "@/firebase";
import {
    doc,
    collection,
    onSnapshot,
    addDoc,
    query,
    orderBy,
    deleteDoc,
    setDoc,
    Timestamp,
} from "firebase/firestore";

const InterestedInLearningMore = () => {
    const router = useRouter();
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    // For Loading
    const [user, loading, error] = useAuthState(auth);

    const [email, setEmail] = useState<string>("");

    const handleJoinWaitList = async () => {
        if (email.trim() === "") {
            enqueueSnackbar("Please enter your email to join the waitlist.", {
                variant: "warning",
                autoHideDuration: 4000,
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "right",
                },
            });

            return;
        }

        if (
            email.trim() !== ""
        ) {
            ////////////////////////////// For New Version of Firebase(V9) //////////////////////////////
            // ADD EMAIL TO FIRESTORE
            const waitListData = {
                email: email,
                createdAt: new Date().toISOString(),
            };

            addDoc(collection(db, `waitListCustomers`), waitListData)
                .then(() => {
                    enqueueSnackbar("You have been added to waitlist successfully.", {
                        variant: "success",
                        autoHideDuration: 4000,
                        anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "right",
                        },
                    });

                    setEmail("");
                })
                .catch((err) => {
                    console.warn(err);
                    enqueueSnackbar("Error while adding you to waitlist.", {
                        variant: "error",
                        autoHideDuration: 4000,
                        anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "right",
                        },
                    });
                });
            //
            ////////////////////////////// For New Version of Firebase(V9) //////////////////////////////
        }
    };

    return (
        <div className="border-none border border-primary ssm:border-solid w-full py-8 px-5 ssm:px-8 rounded-2xl">
            <h2 className="text-3xl font-normal sssm:font-medium text-primary mb-6 mt-0 ml-0 text-left" id="subscribe-email-heading">Revolutionize your freelance career with Nolancer!</h2>
            <div className="flex flex-col mlg:flex-row">
                <div className="p-0 m-0 w-full mlg:w-6/12">
                    <div className="w-full flex flex-col justify-center">
                        <ul className="-ml-10 list-none">
                            {whyYouShouldLearnMore.map((item, index) => {
                                return (
                                    <li key={index} className="text-md ssm:text-lg text-gray-600 mb-2 flex flex-row my-0">
                                        <p className="my-0">⭐</p>
                                        <p className="my-0 ml-2">{item}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="w-full mlg:w-6/12 pt-0 mt-0 mlg:pl-20">
                    <Input
                        className="w-full ssm:w-80 text-2xl bg-blue-100"
                        type="email"
                        placeholder="youremail@email.com"
                        fullWidth={false}
                        label="Your email"
                        id="subscribe-email-input"
                        variant="outlined"
                        required={true}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        padding="12px"
                        fontSize="20px"
                    />

                    <IconButton
                        className="border-2 border-solid border-primary hover:border-2 hover:border-solid hover:border-primary focus:border-2 focus:border-solid focus:border-primary hover:text-primary focus:text-white bg-primary focus:primary font-semibold text-white hover:bg-transparent focus:bg-primary rounded-lg ml-0 normal-case text-lg px-5 py-2 mt-6"
                        onClick={handleJoinWaitList}
                        type="submit"
                    >
                        Join the Waitlist
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default InterestedInLearningMore;
