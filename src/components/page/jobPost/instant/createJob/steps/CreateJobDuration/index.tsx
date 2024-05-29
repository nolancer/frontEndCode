"use client";
import { SetStateAction } from "react";
import ControlledRadioButtonsGroup from "@/components/base/ControlledRadioButtonsGroup";
import { projectDurationOptions, projectScopeOptions, projectExperienceOptions, projectJobTypeOptions } from "@/components/page/jobPost/instant/createJob/steps/CreateJobDuration/data";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setJobDuration, setJobExperience, setJobScope, setJobContractToHire } from "@/redux/features/createNewJob/createNewJobSlice";
import { ControlledRadioButtonsGroupOptionsType } from "@/components/base/ControlledRadioButtonsGroup/types";

const CreateJobDuration = () => {
    const dispatch = useAppDispatch();

    const scope = useAppSelector((state) => state.createNewJob.scope);
    const duration = useAppSelector((state) => state.createNewJob.duration);
    const experience = useAppSelector((state) => state.createNewJob.experience);
    const jobType = useAppSelector((state) => state.createNewJob.isContractToHire);

    const handleSetScope = (scope: SetStateAction<ControlledRadioButtonsGroupOptionsType>) => {
        dispatch(setJobScope(scope));
    }

    const setExperience = (experience: SetStateAction<ControlledRadioButtonsGroupOptionsType>) => {
        dispatch(setJobExperience(experience));
    }

    const setJobType = (jobType: SetStateAction<ControlledRadioButtonsGroupOptionsType>) => {
        dispatch(setJobContractToHire(jobType === projectJobTypeOptions[0]));
    }

    return (
        <div>
            <ControlledRadioButtonsGroup
                value={scope}
                setValue={handleSetScope}
                options={projectScopeOptions}
            />

            <ControlledRadioButtonsGroup
                label="How long will your work take?"
                value={duration}
                setValue={(duration) => dispatch(setJobDuration(duration))}
                options={projectDurationOptions}
                className="mt-4 mb-4"
            />

            <ControlledRadioButtonsGroup
                label="What level of experience will it need?"
                value={experience}
                setValue={(experience) => setExperience(experience)}
                options={projectExperienceOptions}
                className="mt-4 mb-4"
            />

            <ControlledRadioButtonsGroup
                label="Is this job a contract-to-hire opportunity?"
                value={(jobType) ? projectJobTypeOptions[0] : projectJobTypeOptions[1]}
                setValue={(jobType) => setJobType(jobType)}
                options={projectJobTypeOptions}
                className="mt-4 mb-4"
            />
        </div>
    )
}
export default CreateJobDuration;