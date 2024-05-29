import React from "react";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import CheckIcon from "@mui/icons-material/Check";

const HireCertifiedTalent = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 5 },
    animate: { opacity: 1, y: 0 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="w-full bg-primary text-white h-full md:h-[500px] flex rounded-none sm:rounded-lg flex-col-reverse md:flex-row md:justify-evenly">
      <div className="w-full md:w-9/12 lg:w-6/12 px-5 lg:px-10 mx-0 md:mx-5 lg:mx-10 my-auto">
        <motion.h1
          className="text-2xl sm:text-3xl lg:text-4xl mb-6 font-semibold leading-9 md:leading-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Discover the Pinnacle of Tech Talent
        </motion.h1>
        <motion.p
          className="text-md sm:text-lg mb-8"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          Our platform proudly presents the elite 1% of certified professionals,
          including Microsoft Certified, AWS Certified, Google Cloud Certified,
          Google Android Certified, Meta Certified, and IBM Certified experts.
          They&apos;re poised to bring your visionary projects to life.
        </motion.p>

        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="mb-6 ml-auto sm:mx-0"
        >
          <motion.div variants={fadeInUp}>
            <Button
              color="info"
              className="border-white border-2 border-solid hover:border-white focus:border-2 focus:border-solid focus:border-white text-white focus:text-white hover:bg-primary focus:primary font-semibold hover:text-white focus:bg-primary rounded-lg normal-case text-md lg:text-lg px-2 sm:px-5 py-2"
            >
              Explore Our Certified Talent
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="w-full md:w-3/12 lg:w-6/12 mt-auto md:mt-0 flex flex-col sm:mx-0 justify-center">
        <motion.div variants={fadeInUp}>
          <Image
            src="/Assets/Images/Pages/Home/TopOnePercent/people.png"
            width={500}
            height={500}
            alt="Hire Certified Talent Image"
            className="rounded-none sm:rounded-lg w-screen block sm:hidden lg:block md:w-fit lg:w-10/12 h-52 sssm:h-60 ssm:h-72 sm:h-auto xl:h-96 mx-auto lg:ml-12 mt-0 shadow-md"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HireCertifiedTalent;
