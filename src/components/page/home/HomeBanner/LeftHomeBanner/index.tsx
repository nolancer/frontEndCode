"use client";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useRouter } from "nextjs13-progress";
import { motion, AnimatePresence } from "framer-motion";

const LeftHomeBanner = () => {
  const router = useRouter();
  const [bannerText, setBannerText] = useState<string>("Hire the Best Freelancers in the World 🌍");

  useEffect(() => {
    const texts = [
      "Hire the Best Freelancers in the World 🌍",
      "Work with top companies and get paid instantly 💰",
      "Get your project done by the best freelancers in the world 🌍",
      "Get your project done by the best freelancers in the world 🌍",
    ];
    let index = 0;
    const interval = setInterval(() => {
      setBannerText(texts[index]);
      index = (index + 1) % texts.length;
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pr-5">
      <p className="text-gray-500 font-light">
        More than 200+ <b>projects</b> posted daily
      </p>
      <AnimatePresence mode="wait">
        <motion.div
          key={bannerText}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="transition-all duration-300 ease-linear"
        >
          <h1 className="text-primary text-3xl leading-tight ssm:text-4xl sm:text-5xl ssm:leading-normal sm:leading-[60px] font-semibold h-auto mlg:h-52">
            {bannerText}
          </h1>
        </motion.div>
      </AnimatePresence>
      <p className="text-gray-700 text-lg font-normal mt-0">
        The Worlds Fastest Growing Freelance Marketplace
      </p>
      <div className="flex mt-10">
        <Button
          color="info"
          className="border-2 border-solid border-primary hover:border-2 hover:border-solid hover:border-primary focus:border-2 focus:border-solid focus:border-primary hover:text-primary focus:text-white bg-primary focus:primary font-semibold text-white hover:bg-transparent focus:bg-primary rounded-lg normal-case text-sm ssm:text-lg px-3 ssm:px-5 py-2"
          onClick={
            () => router.push("/auth/register")
          }
        >
          Apply as Freelancer
        </Button>
        <Button
          color="info"
          className="border-primary border-2 border-solid hover:border-primary focus:border-2 focus:border-solid focus:border-primary text-primary focus:text-white hover:bg-primary focus:primary font-semibold hover:text-white focus:bg-primary rounded-lg normal-case text-sm ssm:text-lg px-3 ssm:px-5 py-2 ml-4"
          onClick={
            () => router.push("/auth/register")
          }
        >
          Hire Freelancers
        </Button>
      </div>
    </div>
  );
};
export default LeftHomeBanner;
