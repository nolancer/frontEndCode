// src\redux\features\createNewJob\createNewJobSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import { JobState } from './types';
import { projectDurationOptions, projectExperienceOptions, projectScopeOptions } from '@/components/page/jobPost/instant/createJob/steps/CreateJobDuration/data';

const initialState: JobState = {
    id: 1,
    title: '',
    skills: [],
    scope: projectScopeOptions[0],
    duration: projectDurationOptions[0],
    experience: projectExperienceOptions[0],
    isContractToHire: false,
    hourlyRate: {
        min: 0,
        max: 0
    },
    fixedPrice: 0,
    description: "",
    attachments: [],
};

export const createNewJobSlice = createSlice({
    name: 'createNewJob',
    initialState,
    reducers: {
        setJobTitle: (state, action) => {
            state.title = action.payload;
        },
        setJobSkills: (state, action) => {
            state.skills = action.payload;
        },
        setJobScope: (state, action) => {
            state.scope = action.payload;
        },
        setJobDuration: (state, action) => {
            state.duration = action.payload;
        },
        setJobExperience: (state, action) => {
            state.experience = action.payload;
        },
        setJobContractToHire: (state, action) => {
            state.isContractToHire = action.payload;
        },
        setJobHourlyRate: (state, action) => {
            state.hourlyRate = action.payload;
        },
        setJobFixedPrice: (state, action) => {
            state.fixedPrice = action.payload;
        },
        setJobDescription: (state, action) => {
            state.description = action.payload;
        },
        addJobAttachement: (state, action) => {
            state.attachments.push(action.payload);
        },
        removeAttachment: (state, action) => {
            state.attachments = state.attachments.filter((attachment) => attachment.id !== action.payload.id);
        }
    },
});

export const {
    setJobTitle,
    setJobSkills,
    setJobScope,
    setJobDuration,
    setJobExperience,
    setJobContractToHire,
    setJobHourlyRate,
    setJobFixedPrice,
    setJobDescription,
    addJobAttachement,
    removeAttachment
} = createNewJobSlice.actions;

export default createNewJobSlice.reducer