import Navbar from "@components/common/Navbar";
import CreateProfileLayout from "@/components/layouts/CreateProfileLayout";
import CreateProfileLocation from "@/components/page/createProfile/steps/completeFreelancerProfile/CreateProfileLocation";

const CreateProfileLocationPage = () => {
    return (
        <main>
            <Navbar userNotVerified={true} />

            <section className="pt-10" aria-label="body">
                <div className="relative bg-transparent mx-auto mt-[12vh] overflow-y-scroll h-[470px]">
                    <CreateProfileLayout
                        stage={10}
                        title="A few last details, then you can check and publish your profile."
                        description="A professional photo helps you build trust with your clients. To keep things safe and simple, they’ll pay you through us - which is why we need your personal information."
                        bottomSection={<CreateProfileLocation />}
                        completeProfileLayout={true}
                    />
                </div>
            </section>
        </main>
    )
}
export default CreateProfileLocationPage;