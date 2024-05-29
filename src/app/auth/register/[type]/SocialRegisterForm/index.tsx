"use client";
import axios from "axios";
import { z } from 'zod';
import Image from "next/image";
import { useFormik } from 'formik';
import { useState, useEffect, LegacyRef } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "nextjs13-progress";
import Input from "@components/base/Input";
import Button from "@components/base/Button";
import IconButton from "@components/base/IconButton";
import CheckBox from "@components/base/CheckBox";
import CountrySelect from "@/components/base/CountrySelect";
import { CountryType } from '@/components/base/CountrySelect/types';
import NavLink from "@/components/base/NavLink";
import { useAuthState } from "react-firebase-hooks/auth";

// Redux
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
    setAuthData,
    setInitiateSocialLogin
} from "@/redux/features/auth/registerSlice";
import { useGoogleLogin } from '@react-oauth/google';
import { enqueueSnackbar } from "notistack";

import { Alert, Tooltip } from "@mui/material";
import { useAuth } from "@/providers/AuthProvider";
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { extractFirstAndLastName } from "@/lib/methods";
import { SocialLoginProvider } from "@/lib/commonTypes";
import { usePathname, useSearchParams } from "next/navigation";
import { auth, db } from "@/firebase";
import { ACCOUNTS_COLLECTION } from "@/utils/contants";
import { addDoc, collection } from "firebase/firestore";
import { getUserByEmail } from "@/lib/dbQueries/GET/getUserByEmail";
import { LoginActionResult, RegisterUserData } from "@/providers/AuthProvider/authTypes";
import Register from "../../page";
import Link from "next/link";
import { NEW_USER_REDIRECT_URL } from "@/lib/routes";

interface SocialRegisterFormProps {
    type: "client" | "freelancer";
}

const validationSchema = z.object({
    country: z.string().min(1, "Country is required"),
})

const SocialRegisterForm = ({ type }: SocialRegisterFormProps) => {
    const router = useRouter();
    const pathname = usePathname();
    const dispatch = useAppDispatch();

    const auth = useAuth();

    const [error, setError] = useState<string | null>(null);
    const [showLoader, setShowLoader] = useState(false);

    // state values
    const isSocialLoginInitiated = useAppSelector((state) => state.createNewUser.isSocialLoginInitiated);
    const authDataState = useAppSelector((state) => state.createNewUser.authData);

    const [rememberMe, setRememberMe] = useState(true);

    const formik = useFormik({
        initialValues: {
            country: ''
        },
        validationSchema: toFormikValidationSchema(validationSchema),
        onSubmit: async (values: z.infer<typeof validationSchema>) => {
            submitForm(values);
        },
    });

    const checkIfUserExists = async (email: string) => {
        if (email !== '') {
            const resultArray = await getUserByEmail(email) as any;

            if (resultArray.length > 0) {
                return true;
            } else {
                return false;
            }
        } else {
            enqueueSnackbar(`Please enter email address`, { variant: 'error' });
        }
    }

    const handleRegister = async (data: RegisterUserData): Promise<string> => {
        const userExists = await checkIfUserExists(data.email);

        if (userExists) {
            return "exists";
        } else {
            try {
                await addDoc(collection(db, ACCOUNTS_COLLECTION), data);
                return "created";
            } catch (e) {
                console.error("Error while saving user data to firestore", e);
                return "error";
            }
        }
    }

    useEffect(() => {
        console.log("Type is equal to: ", type);
    });

    const submitForm = async (data: z.infer<typeof validationSchema>) => {
        console.log("Form Data just before sending to server ===> ", data);

        const { country } = data;

        dispatch(setAuthData({
            country: country
        }));

        const userData: RegisterUserData = {
            ...authDataState,
            country: country,
        }

        const responseRegister = await handleRegister(userData);

        if (responseRegister === "created") {
            const responseLogin = await auth.loginAction(userData) as LoginActionResult;

            if (responseLogin.status === "error") {
                enqueueSnackbar(`Error while signing in user`, {
                    variant: "error",
                    anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "right",
                    },
                    autoHideDuration: 3000,
                });
            }

            if (responseLogin?.error === null) {
                console.log("Response from login action is equal to : ", responseLogin);
                router.push(NEW_USER_REDIRECT_URL);
            }
        }

        if (responseRegister === "exists") {
            enqueueSnackbar(`User already exists with ${userData.email} email address. Please Try using another email or login using this account`, {
                variant: "error",
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "right",
                },
            })
        }

        if (responseRegister === "error") {
            enqueueSnackbar(`Oops! A problem occured while registering user. Please try again later or contact support`, {
                variant: "error",
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "right",
                },
                autoHideDuration: 3000,
            });
        }
    };

    return (
        <div>
            <Image
                src={"/logo.png"}
                width={80}
                height={80}
                alt="NoLancer"
                className="mt-4 object-contain mx-auto w-full block mlg:hidden"
                priority
            />

            <h2 className="text-xl sssm:text-2xl ssm:text-3xl font-sans font-medium md:font-bold mt-4 text-center mx-2 sm:mx-3">
                {type === "client"
                    ? "Sign Up and hire Talent"
                    : "Sign up to find work you love"}
            </h2>
            <p className="text-sm mt-2 text-center lg:mx-4 llg:mx-12">
                {type === "client"
                    ? "Discover exceptional freelance talent to bring your projects to life."
                    : "Success is not one big step but a series of small steps."}
            </p>

            <form onSubmit={formik.handleSubmit} className="mt-10">
                <div className="mt-4">
                    <CountrySelect
                        id="countrySelect"
                        fullWidth
                        name="country"
                        value={formik.values.country}
                        onChange={(value: string) => {
                            formik.setFieldValue("country", value);

                            dispatch(setAuthData({
                                country: value
                            }));
                        }}
                    />
                    <p className="text-red-400 mt-1"> {formik.touched.country && formik.errors.country} </p>
                </div>

                <div>
                    <div className="flex items-start mb-6 mt-6">
                        <div className="flex flex-col gap-3">
                            <div>
                                <CheckBox
                                    id="sendEmails"
                                    label="Send me helpful emails to find rewarding work and job leads."
                                    checked={rememberMe}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRememberMe(e.target.checked)}
                                    className="mt-0"
                                />
                            </div>

                            <div>
                                <CheckBox
                                    id="termsOfService"
                                    label={<p className="p-0 py-0 my-0 text-sm font-medium text-gray-900 block">Yes, I understand and agree to the <a href="/">Upwork Terms of Service</a> , including the <a href="/">User Agreement</a> and <a href="/">Privacy Policy</a></p>}
                                    checked={rememberMe}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRememberMe(e.target.checked)}
                                    className="mt-0"
                                />
                            </div>
                        </div>
                    </div>
                    <Button
                        type="submit"
                        text={`Create my ${type === "client" ? "Client" : "Freelancer"} Account`}
                    />

                    <div className="flex justify-center mt-10">
                        <p className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 block">
                            Already have an account?{" "}
                            <Link href="/auth/login">
                                Log In now
                            </Link>
                        </p>
                        <p className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 block">
                            <Link href="/auth/register">
                                {type === "client" ? "Join as a Freelancer" : "Join as a Client"}
                            </Link>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
};
export default SocialRegisterForm;
