// JobsListBody.tsx
import { TabPanel } from "@mui/lab";
import { tabsList } from "@/components/page/findWork/JobsList/JobListHeader/data";
import TabsListRenderer from "@/components/page/findWork/JobsList/JobsListBody/TabsListRenderer";
import JobCardList from "@/components/page/findWork/JobsList/JobsListBody/JobCardList";

const JobsListBody = () => {
    return (
        <div className="">
            <TabsListRenderer>
                {tabsList.map((tab, index) => (
                    <TabPanel key={index} value={tab.value} className="p-0 m-0">
                        <JobCardList type={tab.panel} />
                    </TabPanel>
                ))}
            </TabsListRenderer>
        </div>
    );
};
export default JobsListBody;