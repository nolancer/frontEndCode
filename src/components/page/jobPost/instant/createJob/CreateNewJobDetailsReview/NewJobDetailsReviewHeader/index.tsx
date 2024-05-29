"use client"
import Button from "@/components/base/Button"

const NewJobDetailsReviewHeader = () => {
    return (
        <div className="flex justify-between">
            <h2
                className="text-4xl text-gray-800 mb-0 mt-1 font-serif font-medium"
            >
                Job details
            </h2>
            <Button
                variant="text"
                customStyles={true}
                className="px-14 py-2 bg-primary text-white hover:bg-blue-700 focus:ring-blue-800 h-12 rounded-3xl"
                text={"Post this job"}
                fullWidth={false}
                onClick={() => { console.log("Checking") }}
            />
        </div>
    )
}
export default NewJobDetailsReviewHeader;