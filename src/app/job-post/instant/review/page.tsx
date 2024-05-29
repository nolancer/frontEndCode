import Navbar from "@components/common/Navbar";
import CreateNewJobDetailsReview from "@/components/page/jobPost/instant/createJob/CreateNewJobDetailsReview";

const NewJobPostReviewPage = () => {

    return (
        <main>
            <Navbar />

            <section className="pt-[110px]" aria-label="body">
                <div className="relative bg-transparent mx-32 mt-[6vh]">
                    <CreateNewJobDetailsReview />
                </div>
            </section>
        </main>
    )
}
export default NewJobPostReviewPage;