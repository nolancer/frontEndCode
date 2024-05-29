"use client";

import { useState } from "react";

import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { BsApple, BsFacebook, BsGithub } from "react-icons/bs";
import Input from "@components/base/Input";
import Button from "@components/base/Button";
import IconButton from "@components/base/IconButton";
import CheckBox from "@components/base/CheckBox";
import NavLink from "@/components/base/NavLink";

import * as yup from "yup";
import { useFormik } from 'formik';
import { enqueueSnackbar } from "notistack";
import { useRouter } from "nextjs13-progress";

import { useAuth } from "@/providers/AuthProvider";
import { SocialLoginProvider } from "@/lib/commonTypes";
import { FaLinkedinIn } from "react-icons/fa";
import { useSearchParams } from "next/navigation";
import { Alert } from "@mui/material";
import { LoginActionResult, LoginUserData } from "@/providers/AuthProvider/authTypes";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(15).required(),
});

const LoginForm = () => {
  const auth = useAuth();
  const router = useRouter();

  const searchParams = useSearchParams();
  const [showLoader, setShowLoader] = useState(false);
  const urlError = searchParams?.get("error") === "OAuthAccountNotLinked" ? "Email already in use with a different provider!" : "";

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      submitForm(values);
    },
  });

  const submitForm = async (data: yup.InferType<typeof validationSchema>) => {
    console.log("Form Data after submission ===> ", data);
    console.log("Form Submitted");

    const loginData = {
      email: data.email,
      password: data.password,
    } as LoginUserData;

    const responseLogin = await auth.loginAction(loginData) as LoginActionResult;

    if (responseLogin.status === "error") {
      let errorMessage = "";

      if (responseLogin.error === "CredentialsSignin") {
        errorMessage = "Invalid email or password. Please try again.";
      }

      if (responseLogin.error === "UserNotFound") {
        errorMessage = "Oops! We couldn't find an account with this email address. Please sign up to create a new account.";
      }

      if (responseLogin.error === "UserAlreadyExistsEmail") {
        errorMessage = "Google Account is not linked with this email. Please sign in with email and password and then you can link your Google account"
      }

      if (responseLogin.error === "UserAlreadyExistsGoogle") {
        errorMessage = "This email is already registered with Google. Please sign in with Google";
      }

      if (responseLogin.error === "InvalidAccountType") {
        errorMessage = "Invalid Account Type. Please report this issue to the support team.";
      }

      if (responseLogin.error === "unknownError") {
        errorMessage = "Unknown Error Occurred. Please try again later";
      }

      if (responseLogin.error === "SocialSignin") {
        errorMessage = "Oh no! Something went wrong while signing in with Google. Please try again later.";
      }

      enqueueSnackbar(errorMessage, {
        variant: "error",
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right",
        },
        autoHideDuration: 4000,
      });

      return;
    }

    if (responseLogin?.error === null) {
      console.log("Response from login action is equal to : ", responseLogin);

      enqueueSnackbar(`User signed in successfully`, {
        variant: "success",
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right",
        },
        autoHideDuration: 3000,
      });
      // router.push();
    }
  };

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

      const loginUserData = {
        email: userInfo.email
      }

      const responseLogin = await auth.loginAction(loginUserData) as LoginActionResult;

      if (responseLogin.status === "error") {
        let errorMessage = "";

        if (responseLogin.error === "CredentialsSignin") {
          errorMessage = "Invalid email or password. Please try again.";
        }

        if (responseLogin.error === "UserNotFound") {
          errorMessage = "Oops! We couldn't find an account with this email address. Please sign up to create a new account.";
        }

        if (responseLogin.error === "UserAlreadyExistsEmail") {
          errorMessage = "Google Account is not linked with this email. Please sign in with email and password and then you can link your Google account"
        }

        if (responseLogin.error === "UserAlreadyExistsGoogle") {
          errorMessage = "This email is already registered with Google. Please sign in with Google";
        }

        if (responseLogin.error === "InvalidAccountType") {
          errorMessage = "Invalid Account Type. Please report this issue to the support team.";
        }

        if (responseLogin.error === "unknownError") {
          errorMessage = "Unknown Error Occurred. Please try again later";
        }

        if (responseLogin.error === "SocialSignin") {
          errorMessage = "Oh no! Something went wrong while signing in with Google. Please try again later.";
        }

        enqueueSnackbar(errorMessage, {
          variant: "error",
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "right",
          },
          autoHideDuration: 4000,
        });

        return;
      }

      if (responseLogin?.error === null) {
        console.log("Response from login action is equal to : ", responseLogin);

        enqueueSnackbar(`User signed in successfully`, {
          variant: "success",
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "right",
          },
          autoHideDuration: 3000,
        });
      }

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

  const [rememberMe, setRememberMe] = useState(true);
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
        Hi, Welcome Back!
      </h2>
      <p className="text-sm mt-2 text-center lg:mx-4 llg:mx-12">
        Find and Hire top freelance developers at one place
      </p>
      <form onSubmit={formik.handleSubmit} className="mb-10">
        <div className="mt-4">
          {/* <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email Address
            </label> */}
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
        <div className="mb-6">
          {/* <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label> */}
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
        <div className="flex items-start mb-6">
          <div className="flex flex-row justify-between mlg:flex-col lg:flex-row lg:justify-between w-full">
            <div className="hidden ssm:block">
              <CheckBox
                id="remember"
                label="Keep me signed in"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="-mt-1"
              />
            </div>
            <NavLink href="/auth/forgot-password" className="text-sm font-medium text-blue-700 hover:underline dark:text-blue-500 mlg:flex mlg:justify-end mlg:items-end mlg:w-full lg:w-fit lg:block">
              Forgot Password?
            </NavLink>
          </div>
        </div>
        <Button type="submit" text="Login" />

        {(urlError) && (
          <Alert severity="error" className="mt-8">{urlError}</Alert>
        )}

        <div>
          <div className="flex items-center mt-8">
            <div className="flex-grow border-solid border-t border-b-0 border-gray-300"></div>
            <div className="px-3 text-sm font-medium text-gray-700 dark:text-gray-300">
              Or continue with
            </div>
            <div className="flex-grow border-solid border-t border-b-0 border-gray-300"></div>
          </div>
        </div>

        {/* Display google , facebook, apple icons with border light gray around and md rounded and three items with flex between */}
        <div className="hidden lg:flex flex-col gap-4 mt-6">
          <IconButton
            text="Continue with Google"
            fullWidth={true}
            onClick={() => handleLoginWithGoogle()}
            disabled={showLoader}
            icon={<FcGoogle size={30} />}
          />
          {/*  <IconButton
            icon={<FaLinkedinIn color="#0077B5" size={30} />}
            onClick={() => handleSocialLogin(SocialLoginProvider.Linkedin)}
          />
          <IconButton icon={<Image
            src="/Assets/Icons/Social/microsoft.svg"
            width={30}
            height={30}
            alt="Microsoft"
            className="mx-auto"
            priority
          />}
            onClick={() => handleSocialLogin(SocialLoginProvider.Microsoft)}
          /> */}
          {/* <IconButton
            text="Continue with Github"
            fullWidth={true}
            icon={<BsGithub size={30} />}
            onClick={() => handleSocialLogin(SocialLoginProvider.Github)}
          /> */}
        </div>

        <div className="flex flex-col justify-center items-center gap-3 lg:hidden mt-6">
          <IconButton
            text="Continue with Google"
            icon={<FcGoogle size={25} />}
            fullWidth={true}
            className="w-full normal-case text-md ssm:text-lg"
            customStyles={true}
            onClick={() => handleLoginWithGoogle()}
            disabled={showLoader}
          />
          {/*
          <IconButton
            text="Continue with LinkedIn"
            onClick={() => handleSocialLogin(SocialLoginProvider.Linkedin)}
            icon={<FaLinkedinIn color="#0077B5" size={30} />}
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
            />}
            fullWidth={true}
            className="w-full normal-case text-md ssm:text-lg"
            customStyles={true}
          /> 
          */}
          {/* 
          <IconButton
            text="Continue with Github"
            onClick={() => handleSocialLogin(SocialLoginProvider.Github)}
            icon={<BsGithub size={25} />}
            fullWidth={true}
            className="w-full normal-case text-md ssm:text-lg"
            customStyles={true}
          /> 
          */}
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
