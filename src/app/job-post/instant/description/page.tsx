import Navbar from "@components/common/Navbar";
import CreateNewJobLayout from "@/components/layouts/CreateNewJobLayout";
import CreateJobDescription from "@/components/page/jobPost/instant/createJob/steps/CreateJobDescription";

const NewJobPostDescriptionPage = () => {

    const talentLookingForList: string[] = [
        "Clear expectations about your task or deliverables",
        "The skills required for your work",
        "Good communication",
        "Details about how you or your team like to work"
    ];

    function talentAreLookingFor() {
        return (
            <div>
                <p className="text-md my-0">Talent are looking for:</p>
                <ul className="list-disc list-inside -ml-8 mt-2">
                    {talentLookingForList.map((item, index) => {
                        return (
                            <li key={index} className="font-extralight font-montserrat text-gray-700 leading-7">
                                {item}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }

    return (
        <main>
            <Navbar />

            <section className="pt-[110px]" aria-label="body">
                <div className="relative bg-transparent mx-auto mt-[15vh]">
                    <CreateNewJobLayout
                        stage={5}
                        title="Start the conversation."
                        description={talentAreLookingFor()}
                        rightSection={<CreateJobDescription />}
                    />
                </div>
            </section>
        </main>
    )
}
export default NewJobPostDescriptionPage;