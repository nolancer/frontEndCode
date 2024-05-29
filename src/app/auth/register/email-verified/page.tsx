"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useSnackbar } from "notistack";
import { useRouter } from "next/navigation";
import Navbar from "@/components/common/Navbar";
import { useAuth } from "@/providers/AuthProvider";
import { UserType } from "@/components/page/register/RegistrationSuccess";
import { UNVERIFIED_USER_EMAIL_REDIRECT } from "@/lib/routes";

const EmailVerifiedPage = () => {
    const auth = useAuth();
    const router = useRouter();
    const { enqueueSnackbar } = useSnackbar();

    const moveToNextPage = () => {
        const type = auth.user.role;

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
        if (auth?.user && !auth.loading) {
            // if (auth?.user?.email_verified && !auth.loading) {
            if (true) {
                setTimeout(() => {
                    moveToNextPage();
                }, 1000);
            } else {
                setTimeout(() => {
                    router.push(UNVERIFIED_USER_EMAIL_REDIRECT);
                }, 1000);
            }
        }
    }, [auth?.user?.email_verified, auth.loading])

    return (
        <div>
            <Navbar userNotVerified={true} />

            <section className="mt-28 h-[calc(100vh-200px)] flex flex-col justify-evenly items-center gap-6">
                <div className="relative w-40 h-40">
                    <Image
                        fill={true}
                        src="/Assets/Images/Pages/Register/EmailVerify/email_verified.png"
                        alt="Email Verified"
                        title="Email Verified"
                        className="animate-ping"
                    />
                </div>

                <h2 className="my-0 text-4xl font-light text-center leading-relaxed animate-pulse">Thank you verifying your account! <br /> Redirecting...</h2>
            </section>
        </div >
    )
}
export default EmailVerifiedPage;