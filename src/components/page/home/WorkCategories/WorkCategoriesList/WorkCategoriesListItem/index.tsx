import { useState } from "react";
import ReactIcon from "@components/base/ReactIcon";
import { workCategoryListType } from "../types";
import { AiFillStar } from "react-icons/ai";

const WorkCategoriesListItem = ({
  id,
  title,
  rating,
  skills,
}: workCategoryListType) => {
  const [isHovered, setIsHovered] = useState<Boolean>(false);

  const onMouseOver = () => {
    setIsHovered(true);
  };

  const onMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      className="cursor-pointer w-full sm:w-full h-36 sm:h-[140px] rounded-lg px-4 py-4 sm:py-auto flex flex-col justify-between sm:justify-start items-start bg-category hover:bg-categoryHover"
    >
      <h2
        className={`
      ${isHovered ? "text-white" : "text-black"
          } 
        font-light text-2xl leading-2 mt-2 sm:mt-auto`}
      >
        {title}
      </h2>
      <div className="flex my-0 sm:mt-auto">
        <div className="flex flex-row">
          <ReactIcon
            icon={<AiFillStar size={30} />}
            className={`${isHovered ? "text-white" : "text-primary"
              } block mt-0`}
          />
          <p
            className={`${isHovered ? "text-gray-200" : "text-gray-500"
              } text-lg mt-0 ml-2`}
          >
            {rating}/5
          </p>
        </div>
        <p
          className={`${isHovered ? "text-gray-200" : "text-gray-500"
            } text-lg mt-0 ml-8`}
        >
          {skills} skills
        </p>
      </div>
    </div>
  );
};
export default WorkCategoriesListItem;
