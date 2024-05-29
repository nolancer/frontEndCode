import LinearProgressWithLabel from "@/components/base/LinearProgressWithLabel";
import Image from "next/image";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const FWProfileCard = () => {
    return (
        <div className="w-full bg-bgCard rounded-2xl p-6">
            <div className="flex my-0">
                <div className="w-3/12 flex flex-col items-center justify-center">
                    {/*  <Image src={
                        ""
                    } width={60} height={60} alt="profile" className="rounded-full w-16 h-16" /> */}
                    <AccountCircleIcon
                        className="text-6xl text-gray-900"
                    />
                </div>
                <div className="w-9/12">
                    <h1 className="text-xl my-0 font-bold underline hover:cursor-pointer hover:text-primary">
                        User Name
                    </h1>
                    <p className="text-md font-medium mt-1 my-0 text-gray-900 line-clamp-1">
                        Profile Description Tagline
                    </p>
                </div>
            </div>
            <p
                className="text-md font-medium mt-4 mb-0 text-primary underline cursor-pointer"
            >
                Complete your profile
            </p>

            <div className="mt-3">
                <LinearProgressWithLabel
                    value={100}
                />
            </div>
        </div>
    )
}
export default FWProfileCard;