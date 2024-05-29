"use client";
import Image from "next/image";
import { useRouter } from "nextjs13-progress";
import { Button, Skeleton } from "@mui/material";
import { useAuth } from "@/providers/AuthProvider";
import { createProfileGetStartedData } from "./data";

const CreateProfileGetStarted = () => {
    const router = useRouter();

    const auth = useAuth();

    return (
        <div className="mx-6 lxg:mx-36 flex flex-row">
            <div className="w-full lxg:w-7/12">
                {(auth.loading && auth.user === null) ? (
                    <Skeleton className="w-fit mr-4">
                        <h2 className="text-3xl mlg:text-4xl font-medium font-montserrat leading-tight text-gray-900 my-0">
                            Hey User. Ready for your next big opportunity?
                        </h2>
                    </Skeleton>
                ) : (
                    <h2 className="text-3xl mlg:text-4xl font-medium font-montserrat leading-tight text-gray-900 my-0">
                        Hey {auth?.user?.lastName}. Ready for your next big opportunity?
                    </h2>
                )}

                <div className="my-6 lxg:pr-36">
                    {
                        createProfileGetStartedData.map((item, index) => {
                            return (
                                <div key={index} className="flex flex-row items-center border-b-[1px] border-x-0 border-t-0 border-b-gray-400 border-solid py-4">
                                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                                        <p className="text-white font-semibold">{index + 1}</p>
                                    </div>
                                    <p className="text-lg mlg:text-xl font-extralight font-montserrat text-gray-700 ml-4">
                                        {item.label}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="flex flex-col-reverse gap-4 md:gap-0 md:flex-row mt-10">
                    <div className="w-full md:w-fit">
                        <Button
                            color="info"
                            className="mt-4 md:mt-0 border-2 border-solid border-primary hover:border-2 hover:border-solid hover:border-primary focus:border-2 focus:border-solid focus:border-primary hover:text-primary focus:text-white bg-primary focus:primary font-semibold text-white hover:bg-transparent focus:bg-primary normal-case text-base mlg:text-lg px-auto py-auto h-12 mlg:h-14 w-full md:w-36 mlg:w-44"
                            onClick={() => router.push("/create-profile/experience")}
                        >
                            Get Started
                        </Button>
                    </div>

                    <div className="ml-0 md:ml-6 pr-0 mlg:pr-4 flex flex-col justify-center items-center lxg:block lxg:flex-none lxg:justify-normal lxg:items-baseline">
                        <p className="text-base mlg:text-lg font-extralight font-montserrat text-gray-700 my-0">
                            It only takes 5-10 minutes and you can edit it later.
                            <br className="hidden md:block" />
                            We’ll save as you go.
                        </p>
                    </div>
                </div>
            </div>
            <div className="hidden lxg:block w-5/12">
                <div className="pl-0">
                    <Image
                        src={"/Assets/Images/Pages/JobPosts/Instant/online_cv.svg"}
                        alt="Welcome Banner"
                        width={500}
                        height={500}
                        loading="eager"
                    />
                </div>
            </div>
        </div>
    )
}
export default CreateProfileGetStarted;