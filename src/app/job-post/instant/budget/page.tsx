import Navbar from "@components/common/Navbar";
import CreateNewJobLayout from "@/components/layouts/CreateNewJobLayout";
import CreateJobBudget from "@/components/page/jobPost/instant/createJob/steps/CreateJobBudget";

const NewJobPostBudgetPage = () => {
    return (
        <main>
            <Navbar />

            <section className="pt-[110px] pb-40" aria-label="body">
                <div className="relative bg-transparent mx-auto mt-[15vh]">
                    <CreateNewJobLayout
                        stage={4}
                        title="Tell us about your budget."
                        description="This will help us match you to talent within your range."
                        rightSection={<CreateJobBudget />}
                    />
                </div>
            </section>
        </main>
    )
}
export default NewJobPostBudgetPage;