"use client";
import { useState } from "react";
import IconRadioButton from "@/components/base/IconRadioButton";
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import { FaHandsClapping } from "react-icons/fa6";
import { SlChart } from "react-icons/sl";

const CreateProfileExperience = () => {
    const [selected, setSelected] = useState<"hourly" | "fixed" | "third" | null>("hourly");

    return (
        <div className="pb-6">
            <div className="flex flex-row justify-between h-60 gap-8">
                <div className="w-full h-full">
                    <IconRadioButton
                        selected={
                            selected === "hourly" ? true : false
                        }
                        onChangeSelected={() => setSelected("hourly")}
                        icon={<SavedSearchIcon style={{ fontSize: "120px" }} color="inherit" />}
                        label="I am brand new to this"
                    />
                </div>

                <div className="w-full h-full">
                    <IconRadioButton
                        selected={selected === "fixed" ? true : false}
                        onChangeSelected={() => setSelected("fixed")}
                        icon={<FaHandsClapping style={{ fontSize: "120px" }} color="inherit" />}
                        label="I have some experience"
                    />
                </div>

                <div className="w-full h-full">
                    <IconRadioButton
                        selected={selected === "third" ? true : false}
                        onChangeSelected={() => setSelected("third")}
                        icon={<SlChart style={{ fontSize: "120px" }} color="inherit" />}
                        label="I am an expert"
                    />
                </div>
            </div>
        </div>
    )
}
export default CreateProfileExperience;