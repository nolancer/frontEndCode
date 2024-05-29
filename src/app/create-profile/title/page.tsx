import Navbar from "@components/common/Navbar";
import CreateProfileLayout from "@/components/layouts/CreateProfileLayout";
import CreateProfileTitle from "@/components/page/createProfile/steps/completeFreelancerProfile/CreateProfileTitle";

const CreateProfileTitlePage = () => {
    return (
        <main>
            <Navbar userNotVerified={true} />

            <section className="pt-10" aria-label="body">
                <div className="relative bg-transparent mx-auto mt-[12vh] overflow-y-scroll h-[470px]">
                    <CreateProfileLayout
                        stage={2}
                        title="Got it. Now, add a title to tell the world what you do."
                        description="It’s the very first thing clients see, so make it count. Stand out by describing your expertise in your own words."
                        bottomSection={<CreateProfileTitle />}
                        completeProfileLayout={true}
                    />
                </div>
            </section>
        </main>
    )
}
export default CreateProfileTitlePage;