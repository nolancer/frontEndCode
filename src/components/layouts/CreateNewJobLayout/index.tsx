import React from "react";
import CreateNewJobFooter from "@/components/page/jobPost/instant/createJob/CreateNewJobFooter";

interface CreateNewJobLayoutProps {
    stage: number;
    title: string;
    description: TrustedHTML | string | React.ReactNode;
    rightSection: React.ReactNode;
    className?: string;
}

const CreateNewJobLayout = (props: CreateNewJobLayoutProps) => {
    const {
        stage = 1,
        title,
        description,
        rightSection,
        className = "",
    } = props;
    return (
        <div>
            <div className={`mx-60 flex flex-row ${className}`}>
                <div className="w-6/12">
                    <div className="flex">
                        <p
                            className="text-md font-extralight font-montserrat text-gray-700 mt-0 leading-6"
                        >
                            {stage}/5
                        </p>
                        <p
                            className="ml-8 text-md font-extralight font-montserrat text-gray-700 mt-0 leading-6"
                        >
                            Job post
                        </p>
                    </div>
                    <h2 className="text-4xl font-sans leading-tight text-gray-700 my-0" dangerouslySetInnerHTML={{ __html: title }} />
                    {(typeof description === "string") ? (
                        <p className="
                        text-md
                        font-extralight
                        font-montserrat
                        text-gray-700
                        mt-6
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
                            mt-6
                            leading-6
                            pr-32
                        "
                        >
                            {description as React.ReactNode}
                        </div>
                    )}
                </div>
                <div className="w-6/12">
                    {rightSection}
                </div>
            </div>
            <CreateNewJobFooter step={stage} />
        </div>
    )
}
export default CreateNewJobLayout;