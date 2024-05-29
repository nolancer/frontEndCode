import Navbar from "@components/common/Navbar";
import CreateProfileLayout from "@/components/layouts/CreateProfileLayout";
import CreateProfileWorkPreference from "@/components/page/createProfile/steps/InitialQuestions/CreateProfileWorkPreference";

const CreateProfileWorkPreferencePage = () => {
    return (
        <main>
            <Navbar userNotVerified={true} />

            <section className="pt-10" aria-label="body">
                <div className="relative bg-transparent mx-auto mt-[12vh] overflow-y-scroll h-[470px]">
                    <CreateProfileLayout
                        stage={3}
                        title="And how would you like to work?"
                        description="Everybody works in different ways, so we have different ways of helping you win work. You can select multiple preferences now and can always change it later!"
                        bottomSection={<CreateProfileWorkPreference />}
                    />
                </div>
            </section>
        </main>
    )
}
export default CreateProfileWorkPreferencePage;