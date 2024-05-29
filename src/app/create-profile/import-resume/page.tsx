"use client";
import Navbar from "@components/common/Navbar";
import CreateProfileLayout from "@/components/layouts/CreateProfileLayout";
import CreateProfileImportResume from "@/components/page/createProfile/steps/completeFreelancerProfile/CreateProfileImportResume";

const CreateProfileImportResumePage = () => {
    return (
        <main>
            <Navbar userNotVerified={true} />

            <section className="pt-10" aria-label="body">
                <div className="relative bg-transparent mx-auto mt-[12vh] overflow-y-scroll h-[470px]">
                    <CreateProfileLayout
                        stage={1}
                        title="How would you like to tell us about yourself?"
                        description="We need to get a sense of your education, experience and skills. It’s quickest to import your information — you can edit it before your profile goes live."
                        bottomSection={<CreateProfileImportResume />}
                        completeProfileLayout={true}
                    />
                </div>
            </section>
        </main>
    )
}
export default CreateProfileImportResumePage;