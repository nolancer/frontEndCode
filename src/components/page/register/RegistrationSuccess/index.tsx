"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import { useSnackbar } from "notistack";
import { useRouter } from "nextjs13-progress";
import { useAppSelector } from "@/redux/hooks";
import { useAuth } from "@/providers/AuthProvider";
import { UNVERIFIED_USER_EMAIL_REDIRECT } from "@/lib/routes";

export enum UserType {
    Freelancer = "freelancer",
    Client = "client"
}

const RegistrationSuccess = () => {
    const auth = useAuth();
    const router = useRouter();
    const { enqueueSnackbar } = useSnackbar();

    const [type, setType] = useState("");

    useEffect(() => {
        if (type === "" && !auth.loading) {
            setType(auth.user?.role);
        }
    }, [auth.user]);

    const moveToNextPage = () => {
        if (type === UserType.Freelancer) {
            router.push("/create-profile/get-started");
        }

        if (type === UserType.Client) {
            router.push("/job-post/instant/welcome");
        }

        if (type !== UserType.Freelancer && type !== UserType.Client) {
            enqueueSnackbar(`Invalid user type! Please select a user type again. ${type}`, {
                variant: "error",
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "right"
                },
                autoHideDuration: 6000
            });

            return;
        }
    }

    useEffect(() => {
        // Move to the next page if the user is already logged in after 2 seconds
        if (auth.user.email_verified) {
            setTimeout(() => {
                moveToNextPage();
            }, 1000);
        } else {
            setTimeout(() => {
                router.push(UNVERIFIED_USER_EMAIL_REDIRECT);
            }, 1000);
        }
    }, [auth.user.email_verified])

    return (
        <div className="w-full flex flex-col items-center">
            <Image
                src={"/Assets/Images/Pages/Register/work.svg"}
                alt="Profile Image"
                width={240}
                height={240}
                loading="eager"
            />
            <h2 className="mx-6 md:mx-auto text-3xl sm:text-4xl lg:text-5xl font-sharp leading-tight text-gray-900 my-0 text-center">
                <span className="text-green-500">Congratulations!</span> <br />
                Your account has been created successfully.
            </h2>
            <p className="
                    text-center
                    sm:text-left
                    mx-6
                    md:mx-auto
                    text-xl
                    sm:text-2xl
                    font-extralight
                    font-montserrat
                    text-gray-700
                    mt-6
                    leading-8
                ">
                Please check your email for a verification link. <br />
            </p>

            <Button
                color="info"
                className="mt-8 border-2 border-solid border-primary hover:border-2 hover:border-solid hover:border-primary focus:border-2 focus:border-solid focus:border-primary hover:text-primary focus:text-white bg-primary focus:primary font-medium sm:font-semibold text-white hover:bg-transparent focus:bg-primary normal-case text-lg px-12 sm:px-16 py-2 sm:py-3"
                onClick={moveToNextPage}
            >
                Get Started
            </Button>
        </div>
    )
}
export default RegistrationSuccess;