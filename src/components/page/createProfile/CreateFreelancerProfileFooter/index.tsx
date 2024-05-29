"use client";
import { useState, useEffect } from "react";
import { useRouter } from "nextjs13-progress";
import Button from "@/components/base/Button";
import LinearProgressWithLabel from "@/components/base/LinearProgressWithLabel";

interface CreateFreelancerProfileFooterProps {
    step: number;
}

const CreateFreelancerProfileFooter = ({
    step
}: CreateFreelancerProfileFooterProps) => {
    const router = useRouter();

    const [progress, setProgress] = useState(0);
    const [forwardRoute, setForwardRoute] = useState("");
    const [backRoute, setBackRoute] = useState("");

    // Calculate the percentage of the progress bar
    const calculateProgress = (step: number) => {
        switch (step) {
            case 1:
                setProgress(33);
                setForwardRoute("/create-profile/goal");
                setBackRoute("/create-profile/get-started");
                break;
            case 2:
                setProgress(66);
                setForwardRoute("/create-profile/work-preference");
                setBackRoute("/create-profile/experience");
                break;
            case 3:
                setProgress(100);
                setForwardRoute("/create-profile/import-resume");
                setBackRoute("/create-profile/goal");
                break;
            default:
                setProgress(0);
                break;
        }
    }

    useEffect(() => {
        calculateProgress(step);
    }, [step]);

    const getButtonText = (step: number) => {
        switch (step) {
            case 1:
                return "Next";
            case 2:
                return "Next";
            case 3:
                return "Next, create a profile";
            default:
                return "Next";
        }
    }

    return (
        <div className="w-full bg-gray-100 h-auto fixed bottom-0">
            <LinearProgressWithLabel showlabel={false} value={progress} />

            <div className="w-full flex flex-row justify-between items-center px-6 h-24">
                <div className="flex flex-col items-center justify-center">
                    {(step !== 1) && (
                        <Button
                            variant="text"
                            customStyles={true}
                            className="text-primary disabled:text-gray-400 bg-gray-200 hover:bg-gray-300 focus:ring-blue-800 border-primary disabled:border-none border border-solid cursor-pointer rounded-3xl px-14 normal-case text-lg"
                            disabled={backRoute === ""}
                            fullWidth={false}
                            text="Back"
                            onClick={() => {
                                router.push(backRoute);
                            }}
                        />
                    )}
                </div>

                <div className="flex flex-col items-center justify-center">
                    <Button
                        variant="text"
                        customStyles={true}
                        className="px-14 bg-primary text-white disabled:bg-gray-200 disabled:text-gray-400 disabled:border-none hover:bg-blue-700 focus:ring-blue-800 rounded-3xl normal-case text-lg"
                        text={getButtonText(step)}
                        fullWidth={false}
                        disabled={forwardRoute === ""}
                        onClick={() => {
                            router.push(forwardRoute);
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
export default CreateFreelancerProfileFooter;