import React from "react";
import { ImCheckboxUnchecked } from "react-icons/im";
import { BsFillCheckSquareFill } from "react-icons/bs";

interface IconCheckButtonProps {
    selected?: boolean;
    onChangeSelected: () => void;
    icon: React.ReactNode;
    label: string;
    description?: string;
}

const IconCheckButton = ({
    selected,
    onChangeSelected,
    icon,
    label,
    description
}: IconCheckButtonProps) => {
    return (
        <div
            className={`border border-solid rounded-md hover:rounded-md h-fit hover:border-blue-500 ${selected ? "border-blue-500 bg-[#242425]" : "border-gray-300 bg-bgCard"} cursor-pointer transition-all ease-linear border-2 py-2 pr-3 pl-5 w-full h-full flex flex-col justify-stretch`}
            onClick={onChangeSelected}
        >
            <div className="flex flex-row justify-between my-0">
                <div className={`flex justify-start my-0 ${selected ? ("text-white") : ("text-gray-700")} `}>
                    {icon}
                </div>
                <div>
                    {selected ? (
                        <BsFillCheckSquareFill color="rgb(43, 103, 219)" size="30" />
                    ) : (
                        <ImCheckboxUnchecked color="gray" size="30" />
                    )}
                </div>
            </div>

            <div className="my-0">
                <h2 className="text-2xl font-lato mb-0 mt-4">
                    <span className={`${selected ? ("text-white") : ("text-black")}`}>{label}</span>
                </h2>
                <p className={`${selected ? ("text-white") : ("text-gray-400")} mb-0 mt-2`}>{description}</p>
            </div>
        </div>
    );
};
export default IconCheckButton;
