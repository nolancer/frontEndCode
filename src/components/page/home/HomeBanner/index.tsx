import Button from "@/components/base/Button";
import LeftHomeBanner from "./LeftHomeBanner";
import RightHomeBanner from "./RightHomeBanner";

const HomeBanner = () => {

  const handleNavigateToWaitlist = () => {
    const element = document.getElementById("subscribe-email-heading");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="w-full min-h-[calc(100vh-90px)] flex flex-col-reverse sm:grid grid-cols-1 sm:grid-cols-2">
      <div className="w-full h-full">
        <LeftHomeBanner />
      </div>
      <div className="w-full h-full mt-10 sm:mt-auto">
        <RightHomeBanner />
      </div>

      <Button
        variant="outlined"
        className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 border-b-2 border-primary bg-white text-primary hover:scale-125 text-lg ssm:text-xl sm:text-2xl rounded-xl normal-case transition-all duration-300 ease-in-out 
  w-11/12 sm:w-auto`}
        text="Join the Waitlist"
        fullWidth={false}
        customStyles={true}
        onClick={handleNavigateToWaitlist}
      />

    </div>
  );
};
export default HomeBanner;
