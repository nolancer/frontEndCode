"use client";
import Input from "@components/base/Input";
import IconButton from "@/components/base/IconButton";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CloseIcon from '@mui/icons-material/Close';

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setJobDescription, addJobAttachement, removeAttachment } from "@/redux/features/createNewJob/createNewJobSlice";

const CreateJobDescription = () => {
    const dispatch = useAppDispatch();

    const description = useAppSelector((state) => state.createNewJob.description);
    const jobAttachment = useAppSelector((state) => state.createNewJob.attachments);

    const handleSetDescription = (description: string) => {
        dispatch(setJobDescription(description));
    }

    const handleSetJobAttachment = (attachment: string) => {
        console.log("Attachment: ", attachment);

        let attachementObject = {
            id: jobAttachment.length + 1,
            title: attachment,
            url: attachment
        }

        dispatch(addJobAttachement(attachementObject));
    };

    return (
        <div>
            <Input
                label="Describe what you need"
                placeholder="Already have a description? Paste it here."
                type="text"
                id="job-title"
                required
                variant="outlined"
                fullWidth={true}
                multiline={true}
                rows={8}
                maxLength={5000}
                value={description}
                onChange={(e) => handleSetDescription(e.target.value)}
            />

            <p className="text-black text-lg mb-0 mt-6">Need help?</p>

            <p className="text-primary text-xl underline cursor-pointer mt-1">See examples of effective descriptions</p>

            <IconButton
                variant="text"
                className="text-primary bg-transparent hover:bg-transparent border-primary border border-solid cursor-pointer rounded-3xl mt-10 normal-case text-lg px-10"
                fullWidth={false}
                customStyles={true}
                uploadButton={true}
                text="Attach file"
                type="button"
                helperText="Max file size: 100 MB"
                icon={<AttachFileIcon />}
                onClick={(e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                    const input = e.target as HTMLInputElement;
                    console.log("File selected:", (input as HTMLInputElement).files?.[0]?.name);
                    handleSetJobAttachment((input as HTMLInputElement).files?.[0]?.name as string);
                }}
            />

            {jobAttachment && jobAttachment.length > 0 && (
                <div className="flex flex-col items-start justify-start bg-white border border-solid border-primary border-opacity-10 rounded-md mt-6">
                    {jobAttachment.map((attachment, index) => (
                        <div key={index} className="flex flex-row justify-between w-full p-4">
                            <p
                                className="text-primary text-lg font-bold h-full my-auto"
                            >
                                {index + 1}
                            </p>
                            <p className="text-gray-700 text-md h-full my-auto">{attachment.url}</p>
                            <IconButton
                                variant="text"
                                className="text-primary bg-transparent hover:bg-transparent border-red-500 border border-solid cursor-pointer rounded-lg normal-case text-lg px-2 py-2 block"
                                fullWidth={false}
                                customStyles={true}
                                type="button"
                                icon={<CloseIcon className="text-red-500" />}
                                onClick={() => dispatch(removeAttachment(attachment))}
                            />
                        </div>
                    ))}
                </div>
            )}
            <div className="mt-52" />
        </div>
    )
}
export default CreateJobDescription;