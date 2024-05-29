import Image from "next/image";

const RightHomeBanner = () => {
  return (
    <div className="w-full h-full">
      <div className="bg-primary w-full h-full border-white border-solid border-[0.3px] rounded-3xl sm:rounded-[30px] mt-0">
        <h2 className="text-white text-xl sssm:text-2xl text-center pt-4 px-4">Hire Now & Apply Now</h2>
        <div className="w-full flex justify-center items-center align-middle">
          <Image
            src="/Assets/Images/Pages/Home/Banner/people.png"
            alt="Working people"
            width={400}
            height={350}
            className="w-56 sssm:w-72 sm:w-96 h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};
export default RightHomeBanner;
