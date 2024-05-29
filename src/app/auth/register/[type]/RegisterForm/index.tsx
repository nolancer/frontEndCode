"use client";
import axios from "axios";
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
  setInitiateSocialLogin,
  setAuthData
} from "@/redux/features/auth/registerSlice";
import { useGoogleLogin } from '@react-oauth/google';
import { enqueueSnackbar } from "notistack";

import { z } from 'zod';
import Image from "next/image";
import { useFormik } from 'formik';
import { Alert, Tooltip } from "@mui/material";
import { useAuth } from "@/providers/AuthProvider";
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { extractFirstAndLastName } from "@/lib/methods";
import { SocialLoginProvider } from "@/lib/commonTypes";
import { usePathname, useSearchParams } from "next/navigation";
import { auth, db } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";
import { getUserByEmail } from "@/lib/dbQueries/GET/getUserByEmail";
import { LoginActionResult, LoginUserData, RegisterUserData } from "@/providers/AuthProvider/authTypes";
import Register from "../../page";
import { ACCOUNTS_COLLECTION } from "@/utils/contants";
import { NEW_USER_REDIRECT_URL } from "@/lib/routes";

interface RegisterFormProps {
  type: "client" | "freelancer";
}

const validationSchema = z.object({
  firstName: z.string().min(1, "First Name is required").max(100),
  lastName: z.string().min(1, "Last Name is required").max(100),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters long"),
  confirmPassword: z.string().min(1, "Password confirmation is required"),
  country: z.string().min(1, "Country is required"),
})
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

const RegisterForm = ({ type }: RegisterFormProps) => {
  const auth = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();

  const urlError = searchParams?.get("error") === "OAuthAccountNotLinked" ? "Email already in use with a different provider!" : "";

  const [error, setError] = useState<string | null>(null);
  const [showLoader, setShowLoader] = useState(false);

  // state values
  const isSocialLoginInitiated = useAppSelector((state) => state.createNewUser.isSocialLoginInitiated);
  const authDataState = useAppSelector((state) => state.createNewUser.authData);

  const [rememberMe, setRememberMe] = useState(true);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
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

  // Handle Login With Google
  const handleLoginWithGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      setShowLoader(true);

      // fetching userinfo can be done on the client or the server
      const userInfo = await axios
        .get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        })
        .then((res) => res.data);

      const userData: RegisterUserData = {
        firstName: userInfo.given_name,
        lastName: userInfo.family_name,
        email: userInfo.email,
        password: "",
        role: type,
        country: "",
        createdAt: new Date(),
        updatedAt: new Date(),
        accountType: "google",
        emailVerified: userInfo.email_verified,
        image: userInfo.picture,
        isTwoFactorEnabled: false,
        twoFactorConfirmationType: "none"
      }

      dispatch(setAuthData(userData));
      dispatch(setInitiateSocialLogin(true));

      setShowLoader(false);
    },

    onError: (error) => {
      console.log("Error from Google Login", error);

      enqueueSnackbar(`Error while signing in with Google`, {
        variant: "error",
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right",
        },
        autoHideDuration: 3000,
      });

      setShowLoader(false);
    },
  });

  const submitForm = async (data: z.infer<typeof validationSchema>) => {
    const userData: RegisterUserData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      role: type,
      country: data.country,
      createdAt: new Date(),
      updatedAt: new Date(),
      accountType: "email",
      emailVerified: false,
      image: "",
      isTwoFactorEnabled: false,
      twoFactorConfirmationType: "none"
    }


    const responseRegister = await handleRegister(userData);

    if (responseRegister === "created") {
      enqueueSnackbar(`User registered successfully`, {
        variant: "default",
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right",
        },
        autoHideDuration: 3000,
      });

      const loginData = {
        email: data.email,
        password: data.password
      } as LoginUserData;

      const responseLogin = await auth.loginAction(loginData) as LoginActionResult;

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
      enqueueSnackbar(`User already exists with ${data.email} email address. Please Try using another email or login using this account`, {
        variant: "error",
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right",
        },
      })

      formik.setFieldError("email", "User already exists with this email address");
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
          : "Register now and start earning 🚀!"}
      </h2>
      <p className="text-sm mt-2 text-center lg:mx-4 llg:mx-12">
        {type === "client"
          ? "Discover exceptional freelance talent to bring your projects to life."
          : "Find, apply, and showcase your skills. Discover projects and let your talents shine."}
      </p>

      {(error || urlError) && (
        <Alert severity="error" className="mt-6">{error || urlError}</Alert>
      )}

      <form onSubmit={formik.handleSubmit}>
        {/* Display google , facebook, apple icons with border light gray around and md rounded and three items with flex between */}
        <div className="hidden lg:flex flex-col gap-4 mt-6">
          <Tooltip title={showLoader ? "Please wait signing in using google" : "Continue with Google"} placement="top">
            <IconButton
              text="Continue with Google"
              fullWidth={true}
              onClick={() => handleLoginWithGoogle()}
              icon={<FcGoogle size={30} />}
              disabled={showLoader}
            />
          </Tooltip>
          {/* <IconButton onClick={() => handleSocialLogin(SocialLoginProvider.Linkedin)} icon={<FaLinkedinIn color="#0077B5" size={30} />} />
          <IconButton
            onClick={() => handleSocialLogin(SocialLoginProvider.Microsoft)}
            icon={<Image
              src="/Assets/Icons/Social/microsoft.svg"
              width={30}
              height={30}
              alt="Microsoft"
              className="mx-auto"
              priority
            />}
          /> */}
          {/* <IconButton
            text="Continue with Github"
            fullWidth={true}
            onClick={() => { alert("To be Implemented") }}
            icon={<BsGithub size={30} />}
          /> */}
        </div>

        <div className="hidden lg:block">
          <div className="flex items-center mt-8 mb-8">
            <div className="flex-grow border-solid border-t border-b-0 border-gray-300"></div>
            <div className="px-3 text-md font-medium text-gray-700 dark:text-gray-300">
              Or
            </div>
            <div className="flex-grow border-solid border-t border-b-0 border-gray-300"></div>
          </div>
        </div>

        <div className="mt-8 lg:mt-auto grid grid-cols-2 gap-4">
          <div>
            <Input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <p className="text-red-400 mt-1"> {formik.touched.firstName && formik.errors.firstName} </p>
          </div>
          <div>
            <Input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <p className="text-red-400 mt-1"> {formik.touched.lastName && formik.errors.lastName} </p>
          </div>
        </div>
        <div className="mt-4">
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <p className="text-red-400 mt-1"> {formik.touched.email && formik.errors.email} </p>
        </div>
        <div className="mt-4">
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {<p className="text-red-400 mt-1"> {formik.touched.password && formik.errors.password} </p>}
        </div>
        <div className="mt-4">
          <Input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <p className="text-red-400 mt-1"> {formik.touched.confirmPassword && formik.errors.confirmPassword} </p>
        </div>
        <div className="mt-4">
          <CountrySelect
            id="countrySelect"
            fullWidth
            name="country"
            value={formik.values.country}
            onChange={(value: string) => {
              formik.setFieldValue("country", value);
            }}
          />
          <p className="text-red-400 mt-1"> {formik.touched.country && formik.errors.country} </p>
        </div>

        <div className="block lg:hidden">
          <div className="flex items-start mb-6 mt-6">
            <div className="flex flex-row justify-between mlg:flex-col lg:flex-row lg:justify-between w-full">
              <div className="hidden ssm:block w-6/12">
                <CheckBox
                  id="remember"
                  label="Keep me signed in"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="-mt-1"
                />
              </div>
              <div className="w-32">
                <NavLink href="/auth/forgot-password" className="text-sm font-medium text-blue-700 hover:underline dark:text-blue-500 mlg:flex mlg:justify-end mlg:items-end mlg:w-full lg:w-fit lg:block">
                  Forgot Password?
                </NavLink>
              </div>
            </div>
          </div>
          <Button
            type="submit"
            text="Register"
          />
        </div>

        <div className="block lg:hidden">
          {/* Display an text for continue with google, facebook etc with border in its left and right and text at center */}
          <div className="flex items-center mt-8 mb-8">
            <div className="flex-grow border-solid border-t border-b-0 border-gray-300"></div>
            <div className="px-3 text-sm font-medium text-gray-700 dark:text-gray-300">
              OR
            </div>
            <div className="flex-grow border-solid border-t border-b-0 border-gray-300"></div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-3 lg:hidden mt-6">
          <Tooltip title={showLoader ? "Please wait signing in using google" : "Continue with Google"} placement="top">
            <div className="w-full">
              <IconButton
                text="Continue with Google"
                fullWidth={true}
                onClick={() => handleLoginWithGoogle()}
                icon={<FcGoogle size={30} />}
                className="w-full normal-case text-md ssm:text-lg"
                customStyles={true}
                disabled={showLoader}
              />
            </div>
          </Tooltip>
          {/*   <IconButton
            text="Continue with Linkedin"
            onClick={() => handleSocialLogin(SocialLoginProvider.Linkedin)}
            icon={<FaLinkedinIn color="#0077B5" size={25} />}
            fullWidth={true}
            className="w-full normal-case text-md ssm:text-lg"
            customStyles={true}
          />
          <IconButton
            text="Continue with Microsoft"
            onClick={() => handleSocialLogin(SocialLoginProvider.Microsoft)}
            icon={<Image
              src="/Assets/Icons/Social/microsoft.svg"
              width={30}
              height={30}
              alt="Microsoft"
              className="mx-auto"
              priority
            />
            }
            fullWidth={true}
            className="w-full normal-case text-md ssm:text-lg"
            customStyles={true}
          /> */}
          {/* <IconButton
            text="Continue with Github"
            onClick={() => handleSocialLogin(SocialLoginProvider.Github)}
            icon={<BsGithub size={25} />}
            fullWidth={true}
            className="w-full normal-case text-md ssm:text-lg"
            customStyles={true}
          /> */}
        </div>

        <div className="hidden lg:block">
          <div className="flex items-start mb-6 mt-6">
            <div className="flex flex-row justify-between mlg:flex-col lg:flex-row lg:justify-between w-full">
              <CheckBox
                id="remember"
                label="Keep me signed in"
                checked={rememberMe}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRememberMe(e.target.checked)}
                className="-mt-1"
              />
              <div className="w-full lg:w-44">
                <NavLink href="/auth/forgot-password" className="text-sm font-medium text-blue-700 hover:underline dark:text-blue-500 mlg:flex mlg:justify-end mlg:items-end mlg:w-full lg:w-fit lg:block">
                  Forgot Password?
                </NavLink>
              </div>
            </div>
          </div>
          <Button
            type="submit"
            text="Register"
          />
        </div>
      </form >
    </div >
  );
};
export default RegisterForm;
