import Navbar from "@components/common/Navbar";
import CreateProfileLayout from "@/components/layouts/CreateProfileLayout";
import CreateProfileSkills from "@/components/page/createProfile/steps/completeFreelancerProfile/CreateProfileSkills";

const CreateProfileSkillsPage = () => {
    return (
        <main>
            <Navbar userNotVerified={true} />

            <section className="pt-10" aria-label="body">
                <div className="relative bg-transparent mx-auto mt-[12vh] overflow-y-scroll h-[470px]">
                    <CreateProfileLayout
                        stage={6}
                        title="Nearly there! What work are you here to do?"
                        description="Your skills show clients what you can offer, and help us choose which jobs to recommend to you. Add or remove the ones we’ve suggested, or start typing to pick more. It’s up to you."
                        bottomSection={<CreateProfileSkills />}
                        completeProfileLayout={true}
                    />
                </div>
            </section>
        </main>
    )
}
export default CreateProfileSkillsPage;