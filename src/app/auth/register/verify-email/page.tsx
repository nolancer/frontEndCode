"use client";

import Navbar from "@/components/common/Navbar";
import { useAuth } from "@/providers/AuthProvider";
import { Button, Skeleton } from "@mui/material";
import Image from "next/image";

const VerifyEmailPage = () => {
    const auth = useAuth();

    return (
        <div>
            <Navbar userNotVerified={true} />

            <section className="mt-28 h-[calc(100vh-200px)] flex flex-col justify-center items-center gap-6">
                <div className="relative w-32 h-24">
                    <Image
                        fill={true}
                        src="/Assets/Images/Pages/Register/EmailVerify/email_envelop.png"
                        alt="Email Verification"
                        title="Email Verification"
                    />
                </div>

                <h2 className="my-0 text-2xl font-semibold mt-4">Verify your email to continue</h2>

                <div className="my-0 flex flex-col justify-center items-center w-8/12">
                    <p className="my-0">
                        We have sent a verification email to email address:
                    </p>
                    <p className="mt-1 mb-2 font-semibold italic">
                        {(auth.loading && auth.user === null) ? (
                            <Skeleton className="w-60 h-8" />
                        ) : (
                            (auth.user?.email) ? (auth.user?.email) : ("No email found")
                        )}
                    </p>
                    <p className="my-0 px-8 text-center text-base text-gray-500">
                        Please check your email and select the link provided to verify your address.
                    </p>
                </div>

                <div className="my-0 mt-4">
                    <Button
                        variant="outlined"
                        color="primary"
                        className="mr-4 rounded-md"
                    >
                        Resend Email
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        className="rounded-md"
                    >
                        Go to Gmail Inbox
                    </Button>
                </div>

                <p className="text-blue-600 underline mt-6 cursor-pointer">
                    Didn't receive email?
                </p>
            </section>
        </div >
    )
}
export default VerifyEmailPage;