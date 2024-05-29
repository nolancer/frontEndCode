import Navbar from "@components/common/Navbar";
import CreateProfileLayout from "@/components/layouts/CreateProfileLayout";
import CreateProfileEmployment from "@/components/page/createProfile/steps/completeFreelancerProfile/CreateProfileEmployment";

const CreateProfileEmploymentPage = () => {
    return (
        <main>
            <Navbar userNotVerified={true} />

            <section className="pt-10" aria-label="body">
                <div className="relative bg-transparent mx-auto mt-[12vh] overflow-y-scroll h-[470px]">
                    <CreateProfileLayout
                        stage={3}
                        title="Here’s what you’ve told us about your experience — any more to add?"
                        description="The more you tell us, the better: freelancers who’ve added their work experience are twice as likely to win work."
                        bottomSection={<CreateProfileEmployment />}
                        completeProfileLayout={true}
                    />
                </div>
            </section>
        </main>
    )
}
export default CreateProfileEmploymentPage;