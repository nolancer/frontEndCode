import Navbar from "@components/common/Navbar";
import CreateProfileLayout from "@/components/layouts/CreateProfileLayout";
import CreateProfileLanguages from "@/components/page/createProfile/steps/completeFreelancerProfile/CreateProfileLanguages";

const CreateProfileLanguagesPage = () => {
    return (
        <main>
            <Navbar userNotVerified={true} />

            <section className="pt-10" aria-label="body">
                <div className="relative bg-transparent mx-auto mt-[12vh] overflow-y-scroll h-[470px]">
                    <CreateProfileLayout
                        stage={5}
                        title="Looking good. Next, tell us which languages you speak."
                        description="Upwork is global, so clients are often interested to know what languages you speak. English is a must, but do you speak any other languages?"
                        bottomSection={<CreateProfileLanguages />}
                        completeProfileLayout={true}
                    />
                </div>
            </section>
        </main>
    )
}
export default CreateProfileLanguagesPage;