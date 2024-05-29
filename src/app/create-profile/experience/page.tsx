import Navbar from "@components/common/Navbar";
import CreateProfileExperience from "@/components/page/createProfile/steps/InitialQuestions/CreateProfileExperience";
import CreateProfileLayout from "@/components/layouts/CreateProfileLayout";

const CreateProfileExperiencePage = () => {
    return (
        <main>
            <Navbar userNotVerified={true} />

            <section className="pt-10" aria-label="body">
                <div className="relative bg-transparent mx-auto mt-[12vh]">
                    <CreateProfileLayout
                        stage={1}
                        title="A few quick questions: first, have you freelanced before?"
                        description="This lets us know how much help to give you along the way. We won’t share your answer with anyone else, including potential clients."
                        bottomSection={<CreateProfileExperience />}
                    />
                </div>
            </section>
        </main>
    )
}
export default CreateProfileExperiencePage;