"use client";
import { useState, useEffect } from "react";
import { useRouter } from "nextjs13-progress";
import Button from "@/components/base/Button";
import {
    Button as BaseButton
} from "@mui/material";
import LinearProgressWithLabel from "@/components/base/LinearProgressWithLabel";

interface CreateNewJobFooterProps {
    step: number;
}

const CreateNewJobFooter = ({
    step
}: CreateNewJobFooterProps) => {
    const router = useRouter();

    const [progress, setProgress] = useState(0);
    const [forwardRoute, setForwardRoute] = useState("");
    const [backRoute, setBackRoute] = useState("");

    // Calculate the percentage of the progress bar
    const calculateProgress = (step: number) => {
        switch (step) {
            case 1:
                setProgress(20);
                setForwardRoute("/job-post/instant/skills");
                setBackRoute("");
                break;
            case 2:
                setProgress(40);
                setForwardRoute("/job-post/instant/duration");
                setBackRoute("/job-post/instant/title");
                break;
            case 3:
                setProgress(60);
                setForwardRoute("/job-post/instant/budget");
                setBackRoute("/job-post/instant/skills");
                break;
            case 4:
                setProgress(80);
                setForwardRoute("/job-post/instant/description");
                setBackRoute("/job-post/instant/duration");
                break;
            case 5:
                setProgress(100);
                setForwardRoute("/job-post/instant/review");
                setBackRoute("/job-post/instant/budget");
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
                return "Next: Skills";
            case 2:
                return "Next: Scope";
            case 3:
                return "Next: Budget";
            case 4:
                return "Next: Description";
            case 5:
                return "Review Job Post";
            default:
                return "Next";
        }
    }

    return (
        <div className="w-full bg-gray-100 h-auto fixed bottom-0">
            <LinearProgressWithLabel showlabel={false} value={progress} />

            <div className="w-full flex flex-row justify-between items-center px-6 h-28">
                <div className="flex flex-col items-center justify-center">
                    {(step !== 1) && (
                        <Button
                            variant="text"
                            customStyles={true}
                            className="text-primary disabled:text-gray-400 bg-gray-200 hover:bg-gray-300 focus:ring-blue-800 border-primary disabled:border-none border border-solid cursor-pointer rounded-3xl px-14"
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
                        className="px-10 bg-primary text-white hover:bg-blue-700 focus:ring-blue-800 rounded-3xl"
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
export default CreateNewJobFooter;