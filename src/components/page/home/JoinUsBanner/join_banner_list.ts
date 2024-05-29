// image,
// title,
// description,
// buttonText,
// direction,

import { JoinUsBannerItemType } from "./type";

const join_banner_list:JoinUsBannerItemType[] = [
    {
        image: "/Assets/Images/Pages/Home/JoinUsLearning/1.png",
        title: "There are thousands of certified talents who can help you solve the problems on your project",
        description: "Our talents will help you with every job you give very quickly and precisely. We prioritize satisfaction and speed when working on a project",
        buttonText: "Hire Talent",
        direction:"left"
    },
    {
        image: "/Assets/Images/Pages/Home/JoinUsLearning/2.png",
        title: "Post Jobs Now and Let our Talent Contact You",
        description: "We prioritize quality of talent by providing you certified talent from AWS, Google, Microsoft, IBM and META",
        buttonText: "Post a Job",
        direction:"right"
    }
] as JoinUsBannerItemType[]

export default join_banner_list