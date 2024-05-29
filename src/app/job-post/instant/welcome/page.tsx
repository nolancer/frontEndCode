import Navbar from "@components/common/Navbar";
import NewUserWelcomeBanner from "@/components/page/jobPost/instant/welcome/NewUserWelcomeBanner";

const NewJobPostWelcomePage = () => {
    return (
        <main>
            <Navbar />

            <section className="pt-[110px]" aria-label="body">
                <div className="bg-bgCard z-0 w-full h-full fixed top-[46vh]" />
                <div className="relative z-50 bg-transparent mx-auto mt-[30vh] h-[55vh]">
                    <NewUserWelcomeBanner />
                </div>
            </section>
            <div className="mb-10"></div>
        </main>
    )
}
export default NewJobPostWelcomePage;