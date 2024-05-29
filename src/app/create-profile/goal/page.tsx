import Navbar from "@components/common/Navbar";
import CreateProfileLayout from "@/components/layouts/CreateProfileLayout";
import CreateProfileGoal from "@/components/page/createProfile/steps/InitialQuestions/CreateProfileGoal";

const CreateProfileGoalPage = () => {
    return (
        <main>
            <Navbar userNotVerified={true} />

            <section className="pt-10" aria-label="body">
                <div className="relative bg-transparent mx-auto mt-[12vh]">
                    <CreateProfileLayout
                        stage={2}
                        title="Got it. What’s your biggest goal for freelancing?"
                        description="Different people come to Upwork for various reasons. We want to highlight the opportunities that fit your goals best while still showing you all the possibilities."
                        bottomSection={<CreateProfileGoal />}
                    />
                </div>
            </section>
        </main>
    )
}
export default CreateProfileGoalPage;