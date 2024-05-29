"use client";
import { useState, useEffect } from "react";
import { useRouter } from "nextjs13-progress";
import Button from "@/components/base/Button";
import LinearProgressWithLabel from "@/components/base/LinearProgressWithLabel";

interface CompleteFreelancerProfileFooterProps {
    step: number;
}

const CompleteFreelancerProfileFooter = ({
    step
}: CompleteFreelancerProfileFooterProps) => {
    const router = useRouter();

    const [progress, setProgress] = useState(0);
    const [forwardRoute, setForwardRoute] = useState("");
    const [backRoute, setBackRoute] = useState("");

    // Calculate the percentage of the progress bar
    const calculateProgress = (step: number) => {
        switch (step) {
            case 1:
                setProgress(10);
                setForwardRoute("/create-profile/title");
                setBackRoute("/create-profile/work-preference");
                break;
            case 2:
                setProgress(20);
                setForwardRoute("/create-profile/employment");
                setBackRoute("/create-profile/import-resume");
                break;
            case 3:
                setProgress(30);
                setForwardRoute("/create-profile/education");
                setBackRoute("/create-profile/title");
                break;
            case 4:
                setProgress(40);
                setForwardRoute("/create-profile/languages");
                setBackRoute("/create-profile/employment");
                break;
            case 5:
                setProgress(50);
                setForwardRoute("/create-profile/skills");
                setBackRoute("/create-profile/education");
                break;
            case 6:
                setProgress(60);
                setForwardRoute("/create-profile/overview");
                setBackRoute("/create-profile/languages");
                break;
            case 7:
                setProgress(70);
                setForwardRoute("/create-profile/categories");
                setBackRoute("/create-profile/skills");
                break;
            case 8:
                setProgress(80);
                setForwardRoute("/create-profile/rate");
                setBackRoute("/create-profile/overview");
                break;
            case 9:
                setProgress(90);
                setForwardRoute("/create-profile/location");
                setBackRoute("/create-profile/categories");
                break;
            case 10:
                setProgress(100);
                setForwardRoute("/create-profile/submit");
                setBackRoute("/create-profile/rate");
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
                return "Continue editing your profile";
            case 2:
                return "Next, add your experience";
            case 3:
                return "Next, add your education";
            case 4:
                return "Next, add languages";
            case 5:
                return "Next, add your skills";
            case 6:
                return "Next, write an overview";
            case 7:
                return "Next, choose your categories";
            case 8:
                return "Next, set your rate";
            case 9:
                return "Next, add your photo and location";
            case 10:
                return "Review your profile";
            default:
                return "Next";
        }
    }

    return (
        <div className="w-full bg-gray-100 h-auto fixed bottom-0">
            <LinearProgressWithLabel showlabel={false} value={progress} />

            <div className="w-full flex flex-row justify-between items-center px-6 h-24">
                <div className="flex flex-col items-center justify-center">
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
export default CompleteFreelancerProfileFooter;