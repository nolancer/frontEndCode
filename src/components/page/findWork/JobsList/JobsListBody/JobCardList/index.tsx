import JobCard from "@/components/page/findWork/JobsList/JobsListBody/JobCard";

interface JobCardListProps {
    type: string;
}

const JobCardList = ({
    type
}: JobCardListProps) => {
    return (
        <div className="m-0">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                <div key={index} className="m-0">
                    <JobCard />
                </div>
            ))}
        </div>
    );
};
export default JobCardList;