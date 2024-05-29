import Image from "next/image";
import { CompaniesListItemTypes } from "../types";

const CompaniesListItem = ({ image, name }: CompaniesListItemTypes) => {
  return (
    <div className="w-fit h-fit rounded-2xl flex justify-center items-center">
      <Image
        src={image}
        alt={name}
        title={name}
        width={122}
        height={100}
        className="w-44 h-16"
      />
    </div>
  );
};
export default CompaniesListItem;
