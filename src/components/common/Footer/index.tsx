import Logo from "@/components/base/Logo";
import Grid from '@mui/material/Grid';
import Image from "next/image";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-footer w-full px-6 py-6">
      <Grid container spacing={2}>
        <Grid item sm={12} md={3}>
          <Logo mode="light" />
          <p className="text-white font-medium pr-6">
            NoLancer is a freelancing platform that connects businesses with
            top freelance professionals from all over the world.
            We want to provide a stress-free freelancing experience for
            businesses and freelancers with job security and a fair pay.
          </p>

          <div className="flex flex-row gap-4 mt-8">
            <a href="https://www.linkedin.com/company/nolancer" target="_blank" rel="noreferrer">
              <BsLinkedin color="white" size="30px" />
            </a>
            <a href="https://www.youtube.com/channel/UC9z3Z3z3Z3z3Z3z3Z3z" target="_blank" rel="noreferrer">
              <BsYoutube color="white" size="35px" />
            </a>
            <a href="https://www.facebook.com/nolancer" target="_blank" rel="noreferrer">
              <FaFacebookF color="white" size="30px" />
            </a>
            <a href="https://www.instagram.com/nolancer" target="_blank" rel="noreferrer">
              <FaInstagram color="white" size="30px" />
            </a>
            <a href="https://www.twitter.com/nolancer" target="_blank" rel="noreferrer">
              <FaXTwitter color="white" size="30px" />
            </a>
          </div>

          <div className="mt-10">
            <h3 className="text-white">Download our app</h3>

            <div className="flex flex-col gap-4">
              <Image
                src="/Assets/Images/Pages/Home/Footer/download-on-app-store.svg"
                alt="download-on-app-store"
                width={170}
                height={56}
              />
              <Image
                src="/Assets/Images/Pages/Home/Footer/get-it-on-google-play.png"
                alt="get-it-on-google-play"
                width={170}
                height={56}
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <h5 className="text-white font-medium text-2xl mt-8">
            Products
          </h5>

          <div className="flex flex-col gap-4 mt-4">
            <p className="text-white font-medium hover:text-gray-300 cursor-pointer hover:underline my-0 mb-1">Freelancer</p>
            <p className="text-white font-medium hover:text-gray-300 cursor-pointer hover:underline my-0 mb-1">Agency</p>
            <p className="text-white font-medium hover:text-gray-300 cursor-pointer hover:underline my-0 mb-1">Enterprise</p>
            <p className="text-white font-medium hover:text-gray-300 cursor-pointer hover:underline my-0 mb-1">Project Management</p>
            <p className="text-white font-medium hover:text-gray-300 cursor-pointer hover:underline my-0 mb-1">Field Service</p>
            <p className="text-white font-medium hover:text-gray-300 cursor-pointer hover:underline my-0 mb-1">Education</p>
            <p className="text-white font-medium hover:text-gray-300 cursor-pointer hover:underline my-0 mb-1">Financial Services</p>
            <p className="text-white font-medium hover:text-gray-300 cursor-pointer hover:underline my-0 mb-1">Healthcare</p>
            <p className="text-white font-medium hover:text-gray-300 cursor-pointer hover:underline my-0 mb-1">Manufacturing</p>
            <p className="text-white font-medium hover:text-gray-300 cursor-pointer hover:underline my-0 mb-1">Nonprofit</p>
            <p className="text-white font-medium hover:text-gray-300 cursor-pointer hover:underline my-0 mb-1">Real Estate</p>
            <p className="text-white font-medium hover:text-gray-300 cursor-pointer hover:underline my-0 mb-1">Retail</p>
            <p className="text-white font-medium hover:text-gray-300 cursor-pointer hover:underline my-0 mb-1">Technology</p>
            <p className="text-white font-medium hover:text-gray-300 cursor-pointer hover:underline my-0 mb-1">Telecommunications</p>
            <p className="text-white font-medium hover:text-gray-300 cursor-pointer hover:underline my-0 mb-1">Transportation</p>
            <p className="text-white font-medium hover:text-gray-300 cursor-pointer hover:underline my-0 mb-1">Utilities</p>
          </div>

        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <h5 className="text-white font-medium text-2xl mt-8">
            Solutions
          </h5>

          <div className="flex flex-col gap-4 mt-4">
            <p className="text-white font-medium hover:text-gray-300 cursor-pointer hover:underline my-0 mb-1">
              Project Management
            </p>
            <p className="text-white font-medium hover:text-gray-300 cursor-pointer hover:underline my-0 mb-1">
              Agile
            </p>
            <p className="text-white font-medium hover:text-gray-300 cursor-pointer hover:underline my-0 mb-1">
              Task Management
            </p>
            <p className="text-white font-medium hover:text-gray-300 cursor-pointer hover:underline my-0 mb-1">
              Time Tracking
            </p>
            <p className="text-white font-medium hover:text-gray-300 cursor-pointer hover:underline my-0 mb-1">
              Reporting
            </p>
            <p className="text-white font-medium hover:text-gray-300 cursor-pointer hover:underline my-0 mb-1">
              Work Tracking
            </p>
            <p className="text-white font-medium hover:text-gray-300 cursor-pointer hover:underline my-0 mb-1">
              Field Service
            </p>
            <p className="text-white font-medium hover:text-gray-300 cursor-pointer hover:underline my-0 mb-1">
              Customer Service
            </p>
            <p className="text-white font-medium hover:text-gray-300 cursor-pointer hover:underline my-0 mb-1">
              CRM
            </p>
            <p className="text-white font-medium hover:text-gray-300 cursor-pointer hover:underline my-0 mb-1">
              Sales
            </p>
            <p className="text-white font-medium hover:text-gray-300 cursor-pointer hover:underline my-0 mb-1">
              Marketing
            </p>
            <p className="text-white font-medium hover:text-gray-300 cursor-pointer hover:underline my-0 mb-1">
              Email
            </p>
            <p className="text-white font-medium hover:text-gray-300 cursor-pointer hover:underline my-0 mb-1">
              Automation
            </p>
            <p className="text-white font-medium hover:text-gray-300 cursor-pointer hover:underline my-0 mb-1">
              Analytics
            </p>
            <p className="text-white font-medium hover:text-gray-300 cursor-pointer hover:underline my-0 mb-1">
              Data
            </p>
            <p className="text-white font-medium hover:text-gray-300 cursor-pointer hover:underline my-0 mb-1">
              Integration
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <h5 className="text-white font-medium text-2xl mt-8">
            Company
          </h5>

          <div className="flex flex-col gap-4 mt-4">
            <p className="text-white font-medium hover:text-gray-300 cursor-pointer hover:underline my-0 mb-1">
              About Us
            </p>
            <p className="text-white font-medium hover:text-gray-300 cursor-pointer hover:underline my-0 mb-1">
              Careers
            </p>
            <p className="text-white font-medium hover:text-gray-300 cursor-pointer hover:underline my-0 mb-1">
              Blog
            </p>
            <p className="text-white font-medium hover:text-gray-300 cursor-pointer hover:underline my-0 mb-1">
              Press
            </p>
            <p className="text-white font-medium hover:text-gray-300 cursor-pointer hover:underline my-0 mb-1">
              Partners
            </p>
            <p className="text-white font-medium hover:text-gray-300 cursor-pointer hover:underline my-0 mb-1">
              Contact Us
            </p>
            <p className="text-white font-medium hover:text-gray-300 cursor-pointer hover:underline my-0 mb-1">
              Security
            </p>
            <p className="text-white font-medium hover:text-gray-300 cursor-pointer hover:underline my-0 mb-1">
              Legal
            </p>
          </div>
        </Grid>
        <Grid item xs={12} className="mt-8">
          <div className="flex flex-col sm:flex-row justify-between border-t-[1px] border-t-white border-solid border-x-0 border-b-0 pt-2 pb-3">
            <p className="text-white font-medium">
              © 2024 NoLacner All Rights Reserved
            </p>

            <div className="flex flex-row justify-between gap-1 sssm:gap-3 w-full sm:w-auto ssm:gap-4">
              <p className="text-white font-medium hover:text-gray-300 cursor-pointer hover:underline">Terms of Service</p>
              <p className="text-white font-medium hover:text-gray-300 cursor-pointer hover:underline">Privacy Policy</p>
              <p className="text-white font-medium hover:text-gray-300 cursor-pointer hover:underline">Sitemap</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Footer;
