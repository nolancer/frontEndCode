"use client";
import { useState } from "react";
import { TabContext } from "@mui/lab";
import JobsListHeader from "@components/page/findWork/JobsList/JobListHeader";
import JobsListBody from "@components/page/findWork/JobsList/JobsListBody";

const JobsList = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <div className="w-full">
            <h1 className="font-normal">Jobs you might like</h1>
            <TabContext value={value}>
                <JobsListHeader
                    handleChange={handleChange}
                />
                <p className="pl-6 font-light text-gray-500">Browse jobs that match your experience to a client&apos;s hiring preferences. Ordered by most relevant.</p>
                <hr className="text-gray-200 mb-0" />
                <JobsListBody />
            </TabContext>
        </div>
    )
}
export default JobsList;