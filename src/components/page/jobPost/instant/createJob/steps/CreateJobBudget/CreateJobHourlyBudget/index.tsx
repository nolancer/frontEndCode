"use client";
import Input from "@/components/base/Input";
import { SetStateAction } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setJobHourlyRate } from "@/redux/features/createNewJob/createNewJobSlice";

const CreateJobHourlyBudget = () => {
    const dispatch = useAppDispatch();

    const hourlyRate = useAppSelector((state) => state.createNewJob.hourlyRate);

    const handleSetMinHourlyRate = (min: number) => {
        dispatch(setJobHourlyRate({ min, max: hourlyRate.max }));
    }

    const handleSetMaxHourlyRate = (max: number) => {
        dispatch(setJobHourlyRate({ min: hourlyRate.min, max }));
    }

    return (
        <div>
            <div className="flex flex-row justify-between mt-4">
                <div className="w-6/12">
                    <Input
                        type="number"
                        label="From"
                        id="budget-hourly-min"
                        placeholder=""
                        className="w-44"
                        required
                        fullWidth={false}
                        endAdornment={<p className="mt-4 text-gray-700 text-xl">&nbsp; / hr</p>}
                        value={hourlyRate.min}
                        onChange={(e) => handleSetMinHourlyRate(parseInt(e.target.value))}
                    />
                </div>

                <div className="w-6/12">
                    <Input
                        type="number"
                        label="To"
                        id="budget-hourly-max"
                        placeholder=""
                        className="w-44"
                        required
                        fullWidth={false}
                        endAdornment={<p className="mt-4 text-gray-700 text-xl">&nbsp; / hr</p>}
                        value={hourlyRate.max}
                        onChange={(e) => handleSetMaxHourlyRate(parseInt(e.target.value))}
                    />
                </div>
            </div>
            <p className="text-gray-700 text-md mt-6 font-sans leading-6">
                Professionals tend to charge <b>$25 - $50</b> /hour (USD) for web development projects like yours.
            </p>

            <p className="text-primary text-xl underline cursor-pointer mt-16">Not ready to set an hourly rate?</p>
        </div>
    )
}
export default CreateJobHourlyBudget;