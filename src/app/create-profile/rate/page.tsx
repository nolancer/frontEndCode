import Navbar from "@components/common/Navbar";
import CreateProfileLayout from "@/components/layouts/CreateProfileLayout";
import CreateProfileRate from "@/components/page/createProfile/steps/completeFreelancerProfile/CreateProfileRate";

const CreateProfileRatePage = () => {
    return (
        <main>
            <Navbar userNotVerified={true} />

            <section className="pt-10" aria-label="body">
                <div className="relative bg-transparent mx-auto mt-[12vh] overflow-y-scroll h-[470px]">
                    <CreateProfileLayout
                        stage={9}
                        title="Now, let’s set your hourly rate."
                        description="Clients will see this rate on your profile and in search results once you publish your profile. You can adjust your rate every time you submit a proposal."
                        bottomSection={<CreateProfileRate />}
                        completeProfileLayout={true}
                    />
                </div>
            </section>
        </main>
    )
}
export default CreateProfileRatePage;