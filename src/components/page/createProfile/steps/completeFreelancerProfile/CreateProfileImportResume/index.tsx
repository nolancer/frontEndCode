import { enqueueSnackbar } from "notistack";
import IconButton from "@/components/base/IconButton";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EditNoteIcon from '@mui/icons-material/EditNote';

const CreateProfileImportResume = () => {
    return (
        <div className="flex flex-col sm:flex-row">
            <div className="w-6/12">
                <IconButton
                    variant="text"
                    className="text-primary bg-transparent hover:bg-transparent border-primary border border-solid cursor-pointer rounded-3xl mt-10 normal-case text-lg px-24"
                    fullWidth={false}
                    customStyles={true}
                    text="Import from LinkedIn"
                    type="button"
                    icon={<LinkedInIcon />}
                    onClick={() => {
                        enqueueSnackbar("Import from LinkedIn", {
                            variant: "info",
                            anchorOrigin: {
                                vertical: "bottom",
                                horizontal: "right"
                            },
                            autoHideDuration: 6000
                        });
                    }}
                />

                <IconButton
                    variant="text"
                    className="text-primary bg-transparent hover:bg-transparent border-primary border border-solid cursor-pointer rounded-3xl mt-4 normal-case text-lg px-24"
                    fullWidth={false}
                    customStyles={true}
                    uploadButton={true}
                    text="Upload your resume"
                    type="button"
                    icon={<AttachFileIcon />}
                    onClick={(e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                        const input = e.target as HTMLInputElement;
                        console.log("File selected:", (input as HTMLInputElement).files?.[0]?.name);
                        /*  handleSetJobAttachment((input as HTMLInputElement).files?.[0]?.name as string); */
                    }}
                />

                <IconButton
                    variant="text"
                    className="text-primary bg-transparent hover:bg-transparent border-primary border border-solid cursor-pointer rounded-3xl mt-4 normal-case text-lg px-28"
                    fullWidth={false}
                    customStyles={true}
                    text="Fill out manually"
                    type="button"
                    helperText="It can take up to 10 minutes to fill out manually."
                    icon={<EditNoteIcon />}
                    onClick={() => {
                        enqueueSnackbar("Fill out manually", {
                            variant: "info",
                            anchorOrigin: {
                                vertical: "bottom",
                                horizontal: "right"
                            },
                            autoHideDuration: 6000
                        });
                    }}
                />
            </div>
            <div className="w-6/12">
                <p className="bg-gray-300 w-96 h-auto px-5 py-7 text-2xl rounded-xl">
                    No<span className="text-primary">Lancer</span> profile will help you get the job you deserve. Import your resume to get started.
                    The fastest way to create your profile is to import your resume.
                    We will always ask you to review and edit your profile before it goes live.
                </p>
            </div>
        </div>
    )
}
export default CreateProfileImportResume;