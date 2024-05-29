"use client";
import Input from "@components/base/Input";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setJobTitle } from "@/redux/features/createNewJob/createNewJobSlice";

const CreateJobTitle = () => {
    const dispatch = useAppDispatch();
    const jobTitle = useAppSelector((state) => state.createNewJob.title);

    return (
        <div>
            <Input
                label="Write a title for your job post"
                placeholder="e.g. Senior Software Engineer"
                type="text"
                id="job-title"
                required
                variant="standard"
                fullWidth={true}
                value={jobTitle}
                onChange={(e) => dispatch(setJobTitle(e.target.value))}
            />

            <h4 className="font-bold text-xl mb-0">Example titles</h4>
            <ul className="-ml-6 mt-2">
                <li>UX/UI designer to bring website mockup and prototype to life</li>
                <li>Video editor needed to create whiteboard explainer video</li>
                <li>UX designer with e-commerce experience to support app development</li>
            </ul>
        </div>
    )
}
export default CreateJobTitle;