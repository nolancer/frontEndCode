import React from "react";
import { IoRadioButtonOn, IoRadioButtonOffSharp } from "react-icons/io5";

interface IconRadioButtonProps {
    selected?: boolean;
    onChangeSelected: () => void;
    icon: React.ReactNode;
    label: string;
}

const IconRadioButton = ({
    selected,
    onChangeSelected,
    icon,
    label
}: IconRadioButtonProps) => {
    return (
        <div
            className={`border border-solid rounded-md hover:rounded-md h-fit hover:border-blue-500 ${selected ? "border-blue-500 bg-[#242425]" : "border-gray-300 bg-bgCard"} cursor-pointer transition-all ease-linear border-2 py-2 pr-3 pl-5 w-full h-full flex flex-col justify-between`}
            onClick={onChangeSelected}
        >
            <div className="flex flex-row justify-between">
                <div className={`flex justify-start my-0 mt-4 ${selected ? ("text-white") : ("text-gray-700")} `}>
                    {icon}
                </div>
                <div>
                    {selected ? (
                        <IoRadioButtonOn color="rgb(43, 103, 219)" size="30" />
                    ) : (
                        <IoRadioButtonOffSharp color="gray" size="30" />
                    )}
                </div>
            </div>

            <div className="mt-1">
                {selected ? (
                    <h2 className="text-2xl font-lato">
                        <span className="text-green-600 font-light">{label}</span>
                    </h2>
                ) : (
                    <h2 className="text-2xl font-lato">
                        <span className="text-primary font-light">{label}</span>
                    </h2>
                )}
            </div>
        </div>
    );
};
export default IconRadioButton;
