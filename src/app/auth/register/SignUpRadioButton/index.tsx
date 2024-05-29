import { BsCheckCircleFill, BsCheckCircle } from "react-icons/bs";

interface SignUpRadioButtonProps {
  selected?: boolean;
  type: "client" | "freelancer";
  children: React.ReactNode;
  onChangeSelected: () => void;
  className?: string;
}

const SignUpRadioButton = ({
  selected,
  type,
  children,
  onChangeSelected,
  className,
}: SignUpRadioButtonProps) => {
  return (
    <div
      className={`border-gray-300 border border-solid hover:border-blue-500 ${selected ? "border-blue-500 bg-[rgba(45,22,255,0.09)]" : ""
        } cursor-pointer transition-all ease-linear border-2 ${className ? (className) : ('rounded-md hover:rounded-md h-fit w-60 py-4 min-h-[220px] px-5')}`}
      onClick={onChangeSelected}
    >
      <div className="flex justify-end">
        <div>
          {selected ? (
            <BsCheckCircleFill color="blue" size="25" />
          ) : (
            <BsCheckCircle color="gray" size="25" />
          )}
        </div>
      </div>
      <div className="flex justify-center">{children}</div>

      <div className="mt-4 md:mt-6">
        {type === "client" ? (
          <h2 className="text-xl ssm:text-2xl md:text-lg font-medium md:font-bold">
            <span className="text-green-600 font-bold">For Clients</span>: Your
            journey to finding top talent starts here.
          </h2>
        ) : (
          <h2 className="text-xl ssm:text-2xl md:text-lg font-medium md:font-bold">
            <span className="text-primary font-bold">For Freelancers</span>: I
            am a freelancer looking for freelance work
          </h2>
        )}
      </div>
    </div>
  );
};
export default SignUpRadioButton;
