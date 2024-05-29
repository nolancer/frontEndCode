import { Button } from "@mui/material";
import Image from "next/image";

import { JoinUsBannerItemType } from "../type";

const JoinUsBannerItem = ({
  image,
  title,
  description,
  buttonText,
  direction,
}: JoinUsBannerItemType) => {
  return (
    <div
      className={`mt-12 sm:mt-0 h-full w-full flex
            ${direction === "left" ? "md:flex-row-reverse flex-col" : "flex-col md:flex-row"}
            `}
    >
      <div className="w-full md:w-6/12 h-full flex justify-center items-center">
        <Image
          src={image}
          alt={"Join Us Today"}
          title="Join Us Today"
          width={550}
          height={450}
          className="w-full mx-2 sm:mx-0 sm:w-[550px] h-auto"
        />
      </div>
      <div className={`px-0 sm:pl-6 w-full md:w-6/12 min-h-full flex flex-col justify-center`}>
        <h2 className="text-3xl sm:m-0">{title}</h2>
        <p className="text-gray-700 mt-0 sm:mt-4 text-[22px]">{description}</p>
        <div className="w-44">
          <Button
            color="info"
            className="border-2 border-solid border-primary hover:border-2 hover:border-solid hover:border-primary focus:border-2 focus:border-solid focus:border-primary hover:text-primary focus:text-white bg-primary focus:primary font-semibold text-white hover:bg-transparent focus:bg-primary rounded-lg normal-case text-lg px-5 py-2"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default JoinUsBannerItem;
