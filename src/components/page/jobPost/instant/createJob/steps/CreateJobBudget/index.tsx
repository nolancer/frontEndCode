"use client";
import { useState } from "react";
import BudgetTypeRadioButton from "@/components/base/BudgetTypeRadioButton";
import CreateJobHourlyBudget from "@/components/page/jobPost/instant/createJob/steps/CreateJobBudget/CreateJobHourlyBudget";
import CreateJobFixedBudget from "@/components/page/jobPost/instant/createJob/steps/CreateJobBudget/CreateJobFixedBudget";

const CreateJobBudget = () => {
    const [selected, setSelected] = useState<"hourly" | "fixed" | null>("hourly");

    return (
        <div className="pb-6">
            <div className="flex flex-row justify-between">
                <div>
                    <BudgetTypeRadioButton
                        type="hourly"
                        selected={
                            selected === "hourly" ? true : false
                        }
                        onChangeSelected={() => setSelected("hourly")}
                    />
                </div>

                <div>
                    <BudgetTypeRadioButton
                        type="fixed"
                        selected={selected === "fixed" ? true : false}
                        onChangeSelected={() => setSelected("fixed")}
                    />
                </div>
            </div>

            {(selected === "hourly") && (
                <CreateJobHourlyBudget />
            )}

            {(selected === "fixed") && (
                <CreateJobFixedBudget />
            )}
        </div>
    )
}
export default CreateJobBudget;