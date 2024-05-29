import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import CompaniesListItem from "./CompaniesListItem";
import companies_list from "./companies_list";
import { companyItemType } from "./types";
import ButtonBase from "@mui/material/ButtonBase";
import ReactIcon from "@components/base/ReactIcon";

const CompaniesList = () => {
  return (
    <div className="flex justify-between w-full h-fit">
      <div className="w-1/12 flex flex-col justify-center items-start cursor-pointer">
        <ButtonBase className="rounded-lg">
          <ReactIcon
            icon={<AiOutlineLeft size={40} />}
            className="text-gray-400"
          />
        </ButtonBase>
      </div>
      <div className="w-10/12 flex overflow-hidden">
        {companies_list.map((company: companyItemType, index: number) => {
          return (
            <div key={index} className="mr-[10%]">
              <CompaniesListItem name={company.name} image={company.src} />
            </div>
          );
        })}
      </div>
      <div className="w-1/12 flex flex-col justify-center items-end cursor-pointer">
        <ButtonBase className="rounded-lg">
          <ReactIcon
            icon={<AiOutlineRight size={40} />}
            className="text-gray-400"
          />
        </ButtonBase>
      </div>
    </div>
  );
};
export default CompaniesList;
