import Navbar from "@components/common/Navbar";
import CreateProfileLayout from "@/components/layouts/CreateProfileLayout";
import CreateProfileCategories from "@/components/page/createProfile/steps/completeFreelancerProfile/CreateProfileCategories";

const CreateProfileCategoriesPage = () => {
    return (
        <main>
            <Navbar userNotVerified={true} />

            <section className="pt-10" aria-label="body">
                <div className="relative bg-transparent mx-auto mt-[12vh] overflow-y-scroll h-[470px]">
                    <CreateProfileLayout
                        stage={8}
                        title="What are the main services you offer?"
                        description="Choose at least one service that best describes the type of work you do. This helps us match you with clients who need your unique expertise."
                        bottomSection={<CreateProfileCategories />}
                        completeProfileLayout={true}
                    />
                </div>
            </section>
        </main>
    )
}
export default CreateProfileCategoriesPage;