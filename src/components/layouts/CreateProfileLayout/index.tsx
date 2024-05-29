"use client";
import React from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CreateFreelancerProfileFooter from "@/components/page/createProfile/CreateFreelancerProfileFooter";
import CompleteFreelancerProfileFooter from "@/components/page/createProfile/CompleteFreelancerProfileFooter";

interface CreateProfileLayoutProps {
    stage: number;
    title: string;
    description: TrustedHTML | string | React.ReactNode;
    bottomSection: React.ReactNode;
    className?: string;
    completeProfileLayout?: boolean;
}

const CreateProfileLayout = (props: CreateProfileLayoutProps) => {
    const {
        stage = 1,
        title,
        description,
        bottomSection,
        className = "",
        completeProfileLayout = false
    } = props;
    return (
        <div>
            <div className={`mx-36 flex flex-col ${className}`}>
                <div className="w-8/12">
                    <div className="flex">
                        <p
                            className="text-md font-extralight font-montserrat text-gray-700 mt-0 leading-6"
                        >
                            {stage}/{completeProfileLayout ? 10 : 3}
                        </p>

                        {
                            completeProfileLayout && stage === 1 && (
                                <p className="my-0 ml-4">
                                    Create your profile
                                </p>
                            )
                        }

                        {
                            completeProfileLayout && stage === 1 && (
                                <div className="my-0 ml-4 flex flex-row">
                                    <AccessTimeIcon className="text-primary" />
                                    <p className="my-0 ml-2 text-primary">
                                        5-10 minutes
                                    </p>
                                </div>
                            )
                        }
                    </div>
                    <h2 className="text-4xl font-sans leading-tight text-gray-700 my-0" dangerouslySetInnerHTML={{ __html: title }} />
                    {(typeof description === "string") ? (
                        <p className="
                        text-md
                        font-extralight
                        font-montserrat
                        text-gray-700
                        mt-2
                        leading-6
                        pr-32
                    "
                            dangerouslySetInnerHTML={{ __html: description }}
                        />
                    ) : (
                        <div className="
                            text-md
                            font-extralight
                            font-montserrat
                            text-gray-700
                            mt-2
                            leading-6
                            pr-28
                        "
                        >
                            {description as React.ReactNode}
                        </div>
                    )}
                </div>
                <div className={`w-full ${completeProfileLayout ? "mt-0" : "mt-2"} `}>
                    {bottomSection}
                </div>
            </div>
            {completeProfileLayout ? (
                <CompleteFreelancerProfileFooter step={stage} />
            ) : (
                <CreateFreelancerProfileFooter step={stage} />
            )}
        </div>
    )
}
export default CreateProfileLayout;