"use client";
import { useAuth } from "@/providers/AuthProvider";
import { Button, Skeleton } from "@mui/material";
import Image from "next/image";
import { useRouter } from "nextjs13-progress";

const NewUserWelcomeBanner = () => {
    const auth = useAuth();
    const router = useRouter();

    if (auth.loading === false && auth.user === null) {
        return null
    } else {
        return (
            <div className="mx-36 flex flex-row">
                <div className="w-6/12">
                    {(auth.loading && auth.user === null) ? (
                        <Skeleton
                            animation="wave"
                            variant="text"
                            width={"100%"}
                            height={80}
                            className="w-full -mt-12 my-0"
                        />
                    ) : (
                        <h2 className="text-6xl font-sharp -mt-12 leading-tight text-gray-900 my-0">
                            Welcome, {auth.user.firstName}! <br />
                            Let&apos;s start with your  <br />
                            first job post.
                        </h2>
                    )}

                    <p className="
                    text-2xl
                    font-extralight
                    font-montserrat
                    text-gray-700
                    mt-6
                    leading-8
                ">
                        It&apos;s the fastest way to meet top talent.
                    </p>

                    <Button
                        color="info"
                        className="border-2 border-solid border-primary hover:border-2 hover:border-solid hover:border-primary focus:border-2 focus:border-solid focus:border-primary hover:text-primary focus:text-white bg-primary focus:primary font-semibold text-white hover:bg-transparent focus:bg-primary normal-case text-lg px-16 py-3"
                        onClick={() => router.push("/job-post/instant/title")}
                    >
                        Get Started
                    </Button>
                </div>
                <div className="w-6/12">
                    <Image
                        src={"/Assets/Images/Pages/JobPosts/Instant/online_cv.svg"}
                        alt="Welcome Banner"
                        width={500}
                        height={500}
                        loading="eager"
                    />
                </div>
            </div>
        );
    }
}
export default NewUserWelcomeBanner;