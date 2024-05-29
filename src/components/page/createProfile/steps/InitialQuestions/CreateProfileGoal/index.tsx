"use client";
import { useState } from "react";
import IconRadioButton from "@/components/base/IconRadioButton";
import { RiCoinsFill } from "react-icons/ri";
import { GiMoneyStack } from "react-icons/gi";
import { SlBadge } from "react-icons/sl";
import { MdOutlineAddToHomeScreen } from "react-icons/md";

const CreateProfileGoal = () => {
    const [selected, setSelected] = useState<"1" | "2" | "3" | "4" | null>("1");

    return (
        <div className="pb-6">
            <div className="flex flex-row justify-between h-72 gap-8">
                <div className="w-full h-full">
                    <IconRadioButton
                        selected={
                            selected === "1" ? true : false
                        }
                        onChangeSelected={() => setSelected("1")}
                        icon={<RiCoinsFill style={{ fontSize: "120px" }} color="brown" />}
                        label="To earn my main income"
                    />
                </div>

                <div className="w-full h-full">
                    <IconRadioButton
                        selected={selected === "2" ? true : false}
                        onChangeSelected={() => setSelected("2")}
                        icon={<GiMoneyStack style={{ fontSize: "120px" }} color="blue" />}
                        label="To make money on the side"
                    />
                </div>

                <div className="w-full h-full">
                    <IconRadioButton
                        selected={selected === "3" ? true : false}
                        onChangeSelected={() => setSelected("3")}
                        icon={<SlBadge style={{ fontSize: "120px" }} color="gold" />}
                        label="To get experience for a full-time job"
                    />
                </div>

                <div className="w-full h-full">
                    <IconRadioButton
                        selected={selected === "4" ? true : false}
                        onChangeSelected={() => setSelected("4")}
                        icon={<MdOutlineAddToHomeScreen style={{ fontSize: "120px" }} color="inherit" />}
                        label="I don't have a goal in my mind yet"
                    />
                </div>
            </div>
        </div>
    )
}
export default CreateProfileGoal;