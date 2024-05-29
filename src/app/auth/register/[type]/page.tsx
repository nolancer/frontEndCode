"use client";
import React, { Suspense, useEffect } from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import Image from "next/image";
import { useRouter } from "nextjs13-progress";

import RegisterForm from "./RegisterForm";
import Linker from "@components/base/Linker";
import Logo from "@/components/base/Logo";
import { CircularProgress, CssBaseline } from "@mui/material";
import { useAppSelector } from "@/redux/hooks";
import SocialRegisterForm from "./SocialRegisterForm";

interface RegisterTypeProps {
  params: any;
}

const RegisterType = ({ params }: RegisterTypeProps) => {
  const router = useRouter();

  const isSocialLoginInitiated = useAppSelector((state) => state.createNewUser.isSocialLoginInitiated);

  useEffect(() => {
    console.log(params.type);
  });

  return (
    <div>
      <CssBaseline />
      <div className="flex flex-col lg:flex-row h-full lg:h-screen overflow-hidden">
        <motion.div
          className="w-full lg:w-7/12 h-full bg-primary px-10 lg:px-6 py-10 lg:pt-0 hidden mlg:flex flex-col justify-evenly"
          initial={{ opacity: 0, x: -20 }} // Initial animation state
          animate={{ opacity: 1, x: 0 }} // Animation when component mounts
          transition={{ duration: 0.1 }} // Animation duration
        >
          <div onClick={() => router.push("/")} className="relative mx-auto lg:mx-0 top-auto left-auto 3xl:fixed 3xl:top-5 3xl:left-5 block">
            <Logo mode="light" />
          </div>
          <h1 className="text-white text-[33px] font-extralight text-center lg:text-left">
            {params.type === "freelance"
              ? "Welcome Talent 👋! Sign up and discover endless opportunities."
              : "Welcome Aboard 👋! Discover exceptional freelance talent to bring your projects to life."}
          </h1>

          <Image
            src={"/Assets/Images/Pages/Login/portal.jxr"}
            width={700}
            height={400}
            alt="Portal"
            className="mt-4 object-contain llg:object-cover w-full llg:w-[700px] xl:w-full px-16 lg:px-0 lg:pr-20 h-auto hidden lg:block rounded-lg"
            priority
          />
        </motion.div>
        <motion.div
          className="w-full lg:w-5/12 h-full px-10 ssm:px-14 sm:px-20 flex flex-col min-h-screen overflow-auto"
          initial={{ opacity: 0, x: 50 }} // Initial animation state
          animate={{ opacity: 1, x: 0 }} // Animation when component mounts
          transition={{ duration: 0.1 }} // Animation duration
        >
          <div className="flex justify-end">
            {isSocialLoginInitiated ? (
              <p className="text-sm font-medium text-gray-900 dark:text-gray-300 block mt-4 mb-4">
                {params.type === "freelance" ? "Here to join the freelance community?" : "Here to find exceptional freelance talent?"}
                {" "}
                <Linker href="/auth/login" value={params.type === "freelance" ? "Join as a Client" : "Join as a Freelancer"} />
              </p>
            ) : (
              <p className="text-sm font-medium text-gray-900 dark:text-gray-300 block mt-4 mb-4">
                Already have an account?{" "}
                <Linker href="/auth/login" value="Login In" />
              </p>
            )}
          </div>

          {isSocialLoginInitiated === false ? (
            <Suspense fallback={<div className="w-full flex flex-col justify-center items-center">
              <CircularProgress
                size={30}
                thickness={4}
                color="primary"
              />
            </div>}>
              <RegisterForm type={params.type} />
            </Suspense>
          ) : (
            <SocialRegisterForm
              type={params.type}
            />
          )}

          <div className="mt-16"></div>
        </motion.div>
      </div >
    </div >
  );
};
export default RegisterType;
