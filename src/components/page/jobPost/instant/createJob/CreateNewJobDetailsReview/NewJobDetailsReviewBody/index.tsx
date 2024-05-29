"use client";
import { useState, useEffect } from "react";
import { useAppSelector } from "@/redux/hooks";
import { MdOutlineEdit } from "react-icons/md";
import Button from "@/components/base/Button";
import ControlledAccordions from "@/components/base/ControlledAccordions";
import IconButton from "@/components/base/IconButton";
import NewJobScreeningQuestions from "@/components/page/jobPost/instant/createJob/CreateNewJobDetailsReview/NewJobDetailsReviewBody/NewJobScreeningQuestions";

interface NewJobDetailsReviewBodyProps {
    className?: string;
}

const NewJobDetailsReviewBody = ({
    className
}: NewJobDetailsReviewBodyProps) => {
    const [budget, setBudget] = useState<string>("");
    const title = useAppSelector((state) => state.createNewJob.title);
    const description = useAppSelector((state) => state.createNewJob.description);
    const skills = useAppSelector((state) => state.createNewJob.skills);
    const scope = useAppSelector((state) => state.createNewJob.scope);
    const duration = useAppSelector((state) => state.createNewJob.duration);
    const experience = useAppSelector((state) => state.createNewJob.experience);
    const hourlyRate = useAppSelector((state) => state.createNewJob.hourlyRate);
    const fixedPrice = useAppSelector((state) => state.createNewJob.fixedPrice);

    useEffect(() => {
        if (hourlyRate.min === 0 && hourlyRate.max === 0) {
            setBudget(`$${fixedPrice}.00`);
        } else {
            setBudget(`$${hourlyRate.min} - $${hourlyRate.max}`);
        }
    }, [hourlyRate, fixedPrice]);

    return (
        <div>
            <div className={`border-[0.5px] border-gray-400 border-solid rounded-2xl w-full ${className}`}>
                <div className="flex p-6">
                    <div className="w-1/2">
                        <h3 className="text-gray-800 font-medium text-3xl my-0">
                            {title}
                        </h3>
                    </div>
                    <div className="w-1/2 flex justify-end items-end">
                        <IconButton
                            icon={<MdOutlineEdit size="25" />}
                            onClick={() => { console.log("pressed") }}
                            customStyles={true}
                            className="text-gray-800 rounded-full px-0 w-6 py-2"
                        />
                    </div>
                </div>

                <hr className="border-b-[0.5px] border-t-0 border-x-0 border-gray-400 border-solid" />

                <div className="flex p-6 py-4">
                    <div className="w-1/2">
                        <p className="text-gray-800 font-medium text-lg my-0 mt-1">
                            {description}
                        </p>
                    </div>
                    <div className="w-1/2 flex justify-end items-end">
                        <IconButton
                            icon={<MdOutlineEdit size="25" />}
                            onClick={() => { console.log("pressed") }}
                            customStyles={true}
                            className="text-gray-800 rounded-full px-0 w-6 py-2"
                        />
                    </div>
                </div>

                <hr className="border-b-[0.5px] border-t-0 border-x-0 border-gray-400 border-solid" />

                <section className="p-6 py-4">
                    <div className="flex">
                        <div className="w-1/2">
                            <h3 className="text-gray-800 font-medium text-2xl my-0">Category</h3>
                        </div>
                        <div className="w-1/2 flex justify-end items-end">
                            <IconButton
                                icon={<MdOutlineEdit size="25" />}
                                onClick={() => { console.log("pressed") }}
                                customStyles={true}
                                className="text-gray-800 rounded-full px-0 w-6 py-2"
                            />
                        </div>
                    </div>
                    <p className="text-gray-800 font-medium text-md my-0">Graphic Design</p>
                </section>

                <section className="p-6 py-4">
                    <div className="flex">
                        <div className="w-1/2">
                            <h3 className="text-gray-800 font-medium text-2xl my-0">Skills</h3>
                        </div>
                        <div className="w-1/2 flex justify-end items-end">
                            <IconButton
                                icon={<MdOutlineEdit size="25" />}
                                onClick={() => { console.log("pressed") }}
                                customStyles={true}
                                className="text-gray-800 rounded-full px-0 w-6 py-2"
                            />
                        </div>
                    </div>
                    <p className="text-gray-800 font-medium text-md my-0">
                        {/*   Graphic Design, English, Web Development */}
                        {skills.join(", ")}
                    </p>
                </section>

                <section className="p-6 py-4">
                    <div className="flex">
                        <div className="w-1/2">
                            <h3 className="text-gray-800 font-medium text-2xl my-0">Scope</h3>
                        </div>
                        <div className="w-1/2 flex justify-end items-end">
                            <IconButton
                                icon={<MdOutlineEdit size="25" />}
                                onClick={() => { console.log("pressed") }}
                                customStyles={true}
                                className="text-gray-800 rounded-full px-0 w-6 py-2"
                            />
                        </div>
                    </div>
                    <p className="text-gray-800 font-medium text-md my-0">
                        {/* Medium, More than 6 months, Expert level, Contract-to-hire opportunity */}
                        {scope.label}, {duration.label}, {experience.label}
                    </p>
                </section>

                <section className="p-6 py-4">
                    <div className="flex">
                        <div className="w-1/2">
                            <h3 className="text-gray-800 font-medium text-2xl my-0">Budget</h3>
                        </div>
                        <div className="w-1/2 flex justify-end items-end">
                            <IconButton
                                icon={<MdOutlineEdit size="25" />}
                                onClick={() => { console.log("pressed") }}
                                customStyles={true}
                                className="text-gray-800 rounded-full px-0 w-6 py-2"
                            />
                        </div>
                    </div>
                    <p className="text-gray-800 font-medium text-md my-0">
                        {budget}
                    </p>
                </section>

                <hr className="border-b-[0.5px] border-t-0 border-x-0 border-gray-400 border-solid mb-0" />

                <section>
                    <ControlledAccordions
                        accordiansList={[
                            {
                                title: 'Screening questions (optional)',
                                overview: 'Narrow down your candidates',
                                content: <NewJobScreeningQuestions />
                            },
                            {
                                title: 'Advanced preferences (optional)',
                                overview: 'Hours per week, hire date, and more',
                                content: <NewJobScreeningQuestions />
                            }
                        ]}
                        className="p-6 border-none bg-transparent m-0 w-full cursor-pointer"
                    />
                </section>

                <hr className="border-b-[0.5px] border-t-0 border-x-0 border-gray-400 border-solid my-0" />

                <div className="flex p-6">
                    <div className="w-full flex flex-row justify-between items-center">
                        <div className="flex flex-col items-center justify-center">
                            <Button
                                variant="text"
                                customStyles={true}
                                className="text-primary disabled:text-gray-400 bg-gray-200 hover:bg-gray-300 focus:ring-blue-800 border-primary disabled:border-none border border-solid cursor-pointer rounded-3xl px-14"
                                fullWidth={false}
                                text="Back"
                            /* onClick={() => {
                                router.push(backRoute);
                            }} */
                            />
                        </div>

                        <div className="flex flex-col items-center justify-center">
                            <Button
                                variant="text"
                                customStyles={true}
                                className="px-14 bg-primary text-white hover:bg-blue-700 focus:ring-blue-800 rounded-3xl"
                                text={"Post Job"}
                                fullWidth={false}
                                /* onClick={() => {
                                     router.push(forwardRoute);
                                }} */
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NewJobDetailsReviewBody;