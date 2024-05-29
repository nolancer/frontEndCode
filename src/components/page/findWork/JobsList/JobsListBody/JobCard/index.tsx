import { BsPatchCheckFill } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import Rating from '@mui/material/Rating';

const JobCard = () => {

    const skillsList = [
        "React",
        "Redux",
        "Flux",
        "Webpack",
        "RESTful APIs",
        "HTML5",
        "CSS3",
        /* 
         "Babel",
         "NPM",
         "Git",
         "Agile Development",
         "AI",
         "Web Applications",
         "Frontend Development",
         "Backend Development",
         "Full Stack Development",
         "Software Development",
         "UI/UX Design",
         "Web Applications" 
        */
    ];

    return (
        <div className="w-full h-auto p-4 pt-2 pb-4 border-x-0 border-t-0 border-b-[1px] border-gray-300 border-solid my-0 hover:bg-gray-100 cursor-pointer transition-all duration-100">
            <p className="mb-0 text-sm text-gray-500">Posted 55 minutes ago</p>
            <h2 className="text-gray-600 hover:text-black hover:underline font-light mt-1 mb-0">Full Stack Developer with Frontend Focus (React & .NET)</h2>
            <div className="flex flex-row text-gray-500 gap-1 mt-2 mb-4 text-sm">
                <p className="m-0">Fixed-price</p>
                <p className="m-0">-</p>
                <p className="m-0">Intermediate</p>
                <p className="m-0">-</p>
                <p className="m-0">Est. Budget: $1K</p>
            </div>
            <p className="text-gray-700 font-light text-base mt-1 mb-0 text-ellipsis line-clamp-3">
                Job Description:
                Seeking a highly skilled Full Stack Developer with a specialized focus on frontend development using React and backend proficiency in .NET. The ideal candidate will possess a strong foundation in software development principles and a dedication to crafting efficient, scalable web applications.

                Responsibilities:

                Design, develop, and implement user interface components using React.js concepts and workflows (Redux, Flux, Webpack).
                Develop and maintain backend services and APIs using the .NET framework to support frontend functionalities.
                Ensure the technical feasibility of UI/UX designs and convert them into high-quality code.
                Collaborate with stakeholders to define, design, and implement new features.
                Optimize applications for maximum speed and scalability while ensuring security and data protection.
                Stay abreast of emerging technologies and industry trends to incorporate them into projects.
                Qualifications:

                Solid experience as a Full Stack Developer with a focus on frontend development using React.
                Strong proficiency in the .NET framework for backend development.
                Experience with RESTful APIs and integrating them with frontend components.
                Proficient understanding of web markup, including HTML5 and CSS3.
                Familiarity with front-end development tools such as Babel, Webpack, NPM, etc.
                Knowledge of code versioning tools (Git) and agile development methodologies.
                Excellent problem-solving skills and meticulous attention to detail.
                Effective communication and teamwork skills.

                Looking for a driven individual passionate about leveraging latest technology stack to create next-gen AI powered web applications.
            </p>
            <a href="#" className="text-primary text-base">more</a>
            <div className="
                mt-4
                text-gray-500
                flex
                flex-wrap
                w-full
                overflow-hidden
                scrollbar-hide
            ">
                {skillsList.map((skill, index) => (
                    <div key={index} className="text-gray-500 font-normal bg-gray-100 rounded-2xl px-3 py-1 text-sm h-7 w-fit mr-2 mb-2">{skill}</div>
                ))}
            </div>
            <div className="flex flex-row gap-4 mt-2">
                <div className="flex flex-row">
                    <p className="m-0">
                        <BsPatchCheckFill color="darkBlue" />
                    </p>
                    <p className="text-gray-500 font-light text-sm m-0 ml-2">Payment verified</p>
                </div>
                <div className="mt-0">
                    <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly />
                </div>
                <p className="text-gray-500 font-normal text-sm m-0 ml-2">$400+ <span className="font-extralight">spent</span></p>
                <div className="flex">
                    <IoLocationOutline />
                    <p className="text-gray-500 font-light text-sm m-0 ml-2">United States</p>
                </div>
            </div>
            <div className="flex flex-row mt-2 gap-4">
                <div className="text-gray-500 font-light text-sm m-0">Proposals: <span className="text-gray-600">15 to 20</span></div>
                <div className="text-gray-500 font-light text-sm m-0">Connects to apply: <span className="text-gray-600">12 Connects</span></div>
            </div>
        </div>
    )
}
export default JobCard;