import Navbar from "@components/common/Navbar";
import CreateNewJobLayout from "@/components/layouts/CreateNewJobLayout";
import CreateJobTitle from "@/components/page/jobPost/instant/createJob/steps/CreateJobTitle";

const NewJobPostTitlePage = () => {
    return (
        <main>
            <Navbar />

            <section className="pt-[110px]" aria-label="body">
                <div className="relative bg-transparent mx-auto mt-[15vh]">
                    <CreateNewJobLayout
                        stage={1}
                        title="Let&apos;s start with a <br/> strong title."
                        description="This helps your job post stand out to the right candidates. It&apos;s the first thing they&apos;ll see, so make it count!"
                        rightSection={<CreateJobTitle />}
                    />
                </div>
            </section>
        </main>
    )
}
export default NewJobPostTitlePage;