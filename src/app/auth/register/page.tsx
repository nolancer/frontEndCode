"use client";

import * as Yup from "yup";
import { useState } from "react";
import { useFormik } from "formik";

import Image from "next/image";
import { useRouter } from "nextjs13-progress"

import Logo from "@components/base/Logo";
import SignUpRadioButton from "./SignUpRadioButton";
import Button from "@components/base/Button";
import Linker from "@components/base/Linker";
import { CssBaseline } from "@mui/material";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setAuthData } from "@/redux/features/auth/registerSlice";

const Register = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const currentUserRole = useAppSelector((state) => state.createNewUser.authData.role)

  const handleAuthRole = (role: "client" | "freelancer") => {
    dispatch(setAuthData({
      role: role
    }))
  }

  return (
    <div>
      <CssBaseline />
      <div className="bg-white md:bg-primary min-h-screen pt-4 pb-10">
        <div className="mx-4 md:ml-8">
          <div onClick={() => router.push("/")}>
            <div className="hidden md:block">
              <Logo mode="light" />
            </div>

            <div className="block md:hidden">
              <Logo mode="dark" />
            </div>
          </div>

          <div className="mt-10 border-none md:border md:border-solid border-gray-300 w-full md:w-10/12 lg:w-7/12 min-h-96 mx-auto rounded-md bg-white">
            <h2 className="text-3xl md:text-4xl font-sans font-medium md:font-semibold mt-10 text-center text-gray-700">
              Join as a client or freelancer
            </h2>

            <div className="flex flex-col md:flex-row justify-center mt-12">
              <SignUpRadioButton
                selected={currentUserRole === "client" ? true : false}
                type="client"
                onChangeSelected={() => handleAuthRole("client")}
                className="rounded-md hover:rounded-md h-fit w-full md:w-60 py-2 md:py-4 md:min-h-[220px] px-5"
              >
                <Image
                  src="/Assets/Images/Pages/Register/find.png"
                  width={50}
                  height={50}
                  alt="Find"
                  className="mx-auto"
                  priority
                />
              </SignUpRadioButton>
              <div className="ml-0 md:ml-7 mt-4 md:mt-auto">
                <SignUpRadioButton
                  selected={currentUserRole === "freelancer" ? true : false}
                  type="freelancer"
                  onChangeSelected={() => handleAuthRole("freelancer")}
                  className="rounded-md hover:rounded-md h-fit w-full md:w-60 py-2 md:py-4 md:min-h-[220px] px-5"
                >
                  <Image
                    src="/Assets/Images/Pages/Register/work.png"
                    width={50}
                    height={50}
                    alt="Find"
                    className="mx-auto"
                    priority
                  />
                </SignUpRadioButton>
              </div>
            </div>

            <div className="w-full md:w-7/12 md:px-8 mx-auto lg:px-auto lg:w-7/12 llg:w-5/12 mt-10">
              <Button
                disabled={currentUserRole === null}
                type="button"
                text={
                  currentUserRole === null
                    ? "Select a role to continue"
                    : currentUserRole === "client"
                      ? "Continue as a client"
                      : "Continue as a freelancer"
                }
                onClick={() => {
                  if (currentUserRole === "client") {
                    router.push("/auth/register/client");
                  }

                  if (currentUserRole === "freelancer") {
                    router.push("/auth/register/freelancer");
                  }
                }}
              />
            </div>

            <div className="flex justify-center mt-6 mb-8">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-300 block">
                Already have an account?{" "}
                <Linker href="/auth/login" value="Log In now" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
