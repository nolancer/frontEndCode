import Navbar from "@components/common/Navbar";
import RegistrationSuccess from "@/components/page/register/RegistrationSuccess";

const NewJobPostWelcomePage = () => {
    return (
        <main>
            <Navbar userNotVerified={true} />

            <section className="pt-[5vh]" aria-label="body">
                <div className="relative z-50 bg-transparent mx-auto mt-[5vh] h-full md:h-[80vh]">
                    <RegistrationSuccess />
                </div>
            </section>
            <div className="mb-10"></div>
        </main>
    )
}
export default NewJobPostWelcomePage;