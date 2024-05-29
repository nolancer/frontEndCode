import Image from "next/image";
import { ReasonToUseItemType } from "../types";

const ReasonToUseItem = ({
  id,
  icon,
  title,
  description,
}: ReasonToUseItemType) => {
  return (
    <div
      aria-label={`${id} : title`}
      className="flex flex-col items-center w-full min-h-full px-5 py-5"
    >
      <Image
        src={icon}
        alt={title}
        width={80}
        height={80}
        className="w-20 h-auto block m-0 mt-6"
      />
      <h2 className="text-gray-900 text-2xl mt-6 mb-0 text-center min-h-full">{title}</h2>
      <p className="text-gray-800 font-light mt-4 mb-0 text-center">
        {description}
      </p>
    </div>
  );
};
export default ReasonToUseItem;
