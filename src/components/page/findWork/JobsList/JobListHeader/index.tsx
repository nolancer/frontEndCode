import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { tabsList } from '@/components/page/findWork/JobsList/JobListHeader/data';

interface JobsListHeaderProps {
    handleChange: (event: React.SyntheticEvent, newValue: string) => void
}

const JobsListHeader = (
    { handleChange }: JobsListHeaderProps
) => {
    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
                {tabsList.map((tab, index) => {
                    return <Tab label={tab.label} value={tab.value} key={index} />
                })}
            </TabList>
        </Box>
    )
}
export default JobsListHeader;