"use client";
import { SetStateAction } from "react";
import { MenuItem } from "@mui/material";
import { useSnackbar } from 'notistack';
import MultipleSelectChip from "@/components/base/MultipleSelectChip";
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setJobSkills } from "@/redux/features/createNewJob/createNewJobSlice";

const CreateJobSkills = () => {
    const dispatch = useAppDispatch();
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const skills = useAppSelector((state) => state.createNewJob.skills);

    const handleAddSkill = (skills: SetStateAction<string[]>) => {
        // Please note that the no more than 5 skills can be selected
        if (skills.length > 5) {
            enqueueSnackbar('No more than 5 skills can be selected',
                {
                    variant: 'default',
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'center',
                    },
                    autoHideDuration: 3000,
                }
            );
            return;
        }
        dispatch(setJobSkills(skills));
        closeSnackbar();
    }

    return (
        <div>
            <MultipleSelectChip
                label="Search skills or add your own"
                selectedSkill={skills}
                setSelectedSkill={(skills) => handleAddSkill(skills)}
            />
            <div className="flex mt-3">
                <StarPurple500Icon className="block my-0" />
                <p className="text-xl text-gray-600 my-0 ml-2">For the best results, add 3-5 skills</p>
            </div>

            <h4 className="font-bold text-xl mb-0">Selected skills</h4>

            <div className="flex flex-wrap">
                {skills.map((skill: string) => (
                    <MenuItem
                        key={skill}
                        value={skill}
                        className="w-fit bg-primary rounded-xl text-white px-3 py-1.5 mr-2 mt-2 text-sm font-medium"
                    >
                        {skill}
                    </MenuItem>
                ))}
            </div>
        </div>
    )
}
export default CreateJobSkills;