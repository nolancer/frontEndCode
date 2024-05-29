"use client";
import React, { Suspense } from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import Image from "next/image";
import CssBaseline from "@mui/material/CssBaseline";
import Linker from "@components/base/Linker";
import LoginForm from "./LoginForm";
import { CircularProgress } from "@mui/material";

const Login = () => {
  return (
    <div>
      <CssBaseline />
      <div className="flex flex-col lg:flex-row h-full lg:h-screen overflow-hidden m-0 p-0">
        <motion.div
          className="w-full lg:w-7/12 h-full bg-primary px-10 lg:px-6 py-10 lg:pt-0 hidden mlg:flex flex-col justify-evenly"
          initial={{ opacity: 0, x: -20 }} // Initial animation state
          animate={{ opacity: 1, x: 0 }} // Animation when component mounts
          transition={{ duration: 0.1 }} // Animation duration
        >
          <h1 className="text-white text-[33px] font-extralight">
            Hire top freelancers or apply as a Freelancer to connect with
            High-paying clients Worldwide
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
            <p className="text-sm font-medium text-gray-900 dark:text-gray-300 block mt-2">
              Not a member?{" "}
              <Linker href="/auth/register" value="Register now" />
            </p>
          </div>
          <Suspense fallback={<div className="w-full flex flex-col justify-center items-center">
            <CircularProgress
              size={30}
              thickness={4}
              color="primary"
            />
          </div>}>
            <LoginForm />
          </Suspense>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
