"use client";
import { useState } from "react";
import { GoPackage } from "react-icons/go";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import FormControlLabel from '@mui/material/FormControlLabel';
import IconCheckButton from "@/components/base/IconCheckButton";
import { MdWorkspacePremium } from "react-icons/md";
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from "@mui/material";

const CreateProfileWorkPreference = () => {
    const [selected, setSelected] = useState<string[]>([]);

    const handleToggle = (value: string) => {
        if (selected.includes(value)) {
            setSelected(selected.filter((item) => item !== value));
        } else {
            setSelected([...selected, value]);
        }
    };

    return (
        <div className="pb-6">
            <div className="flex flex-row justify-between h-72 gap-8 w-8/12">
                <div className="w-full h-full">
                    <IconCheckButton
                        selected={selected.includes("1")}
                        onChangeSelected={() => handleToggle("1")}
                        icon={<MdWorkspacePremium style={{ fontSize: "100px" }} color="rgb(43, 103, 219)" />}
                        label="I'd like to find opportunities myself"
                        description="I want to find work on my own, and I'm comfortable with the sales and marketing side of things"
                    />
                </div>

                <div className="w-full h-full">
                    <IconCheckButton
                        selected={selected.includes("2")}
                        onChangeSelected={() => handleToggle("2")}
                        icon={<GoPackage style={{ fontSize: "100px" }} color="rgb(43, 103, 219)" />}
                        label="I'd like to package up my work for clients to buy"
                        description="I want to create a product or service that I can sell to clients"
                    />
                </div>
            </div>

            <div className="mt-4">
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                size="large"
                                defaultChecked
                            />
                        }
                        label={<Typography variant="h6" color="black">
                            I&lsquo;m open to contract-to-hire opportunities -&nbsp;
                            <span className="text-gray-600">Start with a contract, and later explore a full-time option with the client</span>
                        </Typography>}
                    />
                </FormGroup>
            </div>
            <div className="bg-green-100 p-2 my-4 rounded-sm">
                <div className="flex flex-row mx-1">
                    <div className="mt-2">
                        <IoIosCheckmarkCircleOutline size="30px" />
                    </div>
                    <Typography variant="h6" className="text-gray-700 my-0 ml-3 mt-[6px]">
                        Okay, thanks! We&lsquo;ll keep an eye out for the right opportunities.
                    </Typography>
                </div>
            </div>
        </div>
    )
}
export default CreateProfileWorkPreference;