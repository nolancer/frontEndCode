import Navbar from "@components/common/Navbar";
import CreateProfileLayout from "@/components/layouts/CreateProfileLayout";
import CreateProfileEducation from "@/components/page/createProfile/steps/completeFreelancerProfile/CreateProfileEducation";

const CreateProfileEducationPage = () => {
    return (
        <main>
            <Navbar userNotVerified={true} />

            <section className="pt-10" aria-label="body">
                <div className="relative bg-transparent mx-auto mt-[12vh] overflow-y-scroll h-[470px]">
                    <CreateProfileLayout
                        stage={4}
                        title="And here’s what we picked up on your education – is it right?"
                        description="Again, this is worth taking a moment on. People who include their education get seen three times more."
                        bottomSection={<CreateProfileEducation />}
                        completeProfileLayout={true}
                    />
                </div>
            </section>
        </main>
    )
}
export default CreateProfileEducationPage;