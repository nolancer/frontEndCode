import Input from "@/components/base/Input";

const CreateProfileTitle = () => {
    return (
        <div className="flex flex-col sm:flex-row">
            <div className="w-8/12 pr-10">
                <Input
                    label="Your professional role"
                    placeholder="e.g. Full Stack Developer | Graphic Designer | Software Developer | Copywriter | etc."
                    className="w-full mt-0"
                    fullWidth={true}
                    id="professional-role-title"
                    required
                    type="text"
                />
            </div>
            <div className="w-4/12 pl-5">
                <p className="w-full h-auto px-2 text-xl">
                    Hi! 👋 Please write a title that describes your best skills and experience.
                </p>
            </div>
        </div>
    )
}
export default CreateProfileTitle;