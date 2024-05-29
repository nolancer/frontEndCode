import Navbar from "@components/common/Navbar";
import CreateNewJobLayout from "@/components/layouts/CreateNewJobLayout";
import CreateJobSkills from "@/components/page/jobPost/instant/createJob/steps/CreateJobSkills";

const NewJobPostSkillsPage = () => {
    return (
        <main>
            <Navbar />

            <section className="pt-[110px] pb-40" aria-label="body">
                <div className="relative bg-transparent mx-auto mt-[15vh]">
                    <CreateNewJobLayout
                        stage={2}
                        title="What are the main skills required for your work?"
                        description={""}
                        rightSection={<CreateJobSkills />}
                    />
                </div>
            </section>
        </main>
    )
}
export default NewJobPostSkillsPage;