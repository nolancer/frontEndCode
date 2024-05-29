import { Button } from "@mui/material";
import JoinUsBannerItem from "./JoinUsBannerItem";

import join_banner_list from "./join_banner_list";
import { useRouter } from "nextjs13-progress";

const JoinUsBanner = () => {
  const router = useRouter();

  return (
    <div className="w-full min-h-96">
      <div>
        <h5 className="text-2xl sm:text-3xl text-left sm:text-center text-primary mt-20 mb-0">
          Advantages
        </h5>
        <h1 className="text-gray-700 text-3xl ssm:text-4xl sm:text-[40px] font-semibold text-left sm:text-center ml-0 mr-0 ssm:mr-3 sm:mx-24 lg:mx-48 llg:mx-72 leading-normal sm:leading-tight mt-4">
          Join Us And Be A Part Of This Great Community
        </h1>
        <p className="text-gray-500 font-light text-xl sm:text-2xl text-left sm:text-center sm:mx-10 llg:mx-44">
          Experience the Distinction of Joining Our Community of Certified
          Professionals and Enhance Your Reputation to Impress Clients
        </p>

        <div className="flex mt-10 w-fit mx-auto">
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
      <div className="mt-12">
        {join_banner_list.map((joinBanner, index) => {
          return (
            <div key={index}>
              <JoinUsBannerItem
                image={joinBanner.image}
                title={joinBanner.title}
                description={joinBanner.description}
                buttonText={joinBanner.buttonText}
                direction={joinBanner.direction}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default JoinUsBanner;
