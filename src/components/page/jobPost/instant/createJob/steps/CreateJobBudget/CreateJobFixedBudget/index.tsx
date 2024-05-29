"use client";
import Input from "@/components/base/Input";
import { SetStateAction } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setJobFixedPrice } from "@/redux/features/createNewJob/createNewJobSlice";

const CreateJobFixedBudget = () => {
    const dispatch = useAppDispatch();

    const fixedPrice = useAppSelector((state) => state.createNewJob.fixedPrice);

    const handleSetFixedPrice = (price: number) => {
        dispatch(setJobFixedPrice(price));
    }

    return (
        <div>
            <p className="text-md text-gray-500 mt-8">
                Set a price for the project and pay at the end, or you can divide the project into milestones and pay as each milestone is completed.
            </p>

            <h3 className='text-gray-700 text-lg mb-0 mt-8'>What is the best cost estimate for your project?</h3>
            <p className="text-md text-gray-500 mt-2">
                You can negotiate this cost and create milestones when you chat with your freelancer.
            </p>

            <Input
                type="number"
                label=""
                id="budget-fixed"
                placeholder=""
                className="w-44"
                required
                fullWidth={false}
                endAdornment={<p className="mt-4 text-gray-700 text-xl">&nbsp; $</p>}
                value={fixedPrice}
                onChange={(e) => handleSetFixedPrice(parseInt(e.target.value))}
            />

            <p className="text-primary text-xl underline cursor-pointer mt-8">Not ready to set a budget?</p>
        </div>
    )
}
export default CreateJobFixedBudget;