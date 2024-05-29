import CreateProfileGetStarted from "@/components/page/createProfile/CreateProfileGetStarted";
import Navbar from "@components/common/Navbar";

const NewFreelancerGetStartedPage = () => {
    return (
        <main>
            <Navbar userNotVerified={true} />

            <section className="pt-32" aria-label="body">
                <div className="relative z-50 bg-transparent mx-auto h-full">
                    <CreateProfileGetStarted />
                </div>
            </section>
        </main>
    )
}
export default NewFreelancerGetStartedPage;