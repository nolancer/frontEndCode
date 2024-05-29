import Navbar from "@components/common/Navbar";
import CreateNewJobLayout from "@/components/layouts/CreateNewJobLayout";
import CreateJobDuration from "@/components/page/jobPost/instant/createJob/steps/CreateJobDuration";

const NewJobPostDurationPage = () => {
    return (
        <main>
            <Navbar />

            <section className="pt-[110px] pb-40" aria-label="body">
                <div className="relative bg-transparent mx-auto mt-[15vh]">
                    <CreateNewJobLayout
                        stage={3}
                        title="Next, estimate the <br /> scope of your work."
                        description="Consider the size of your project and the time it will take."
                        rightSection={<CreateJobDuration />}
                    />
                </div>
            </section>
        </main>
    )
}
export default NewJobPostDurationPage;