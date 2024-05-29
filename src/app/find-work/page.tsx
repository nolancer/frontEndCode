import { Grid } from "@mui/material";
import Navbar from "@components/common/Navbar";
import JobsList from "@components/page/findWork/JobsList";
import FWProfileCard from "@components/page/findWork/FWProfileCard";

const FindWorkPage = () => {
    return (
        <div>
            <Navbar />

            <section className="pt-[110px] mx-6" aria-label="body">
                <Grid container spacing={3}>
                    <Grid item xs={6} md={8}>
                        <JobsList />
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <div className="mt-6">
                            <FWProfileCard />
                        </div>
                    </Grid>
                </Grid>
            </section>
        </div>
    )
}
export default FindWorkPage;