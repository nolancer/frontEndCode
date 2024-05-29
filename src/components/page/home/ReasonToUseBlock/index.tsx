import ReasonToUseItem from "./ReasonToUseItem";
import reason_to_use_list from "./reason_to_use_list";

const ReasonToUseBlock = () => {
  return (
    <div className="w-full h-fit">
      <h1 className="text-gray-700 font-normal font-sans text-4xl sm:text-5xl lg:text-[50px] mb-0 mt-8">
        Why you should join No<span className="text-primary">Lancer</span>
      </h1>
      <p className="text-gray-600 mb-0 mt-2">
        Quickly assemble the teams you need, exactly when you need them.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {reason_to_use_list.map((reason_to_use, index) => {
          return (
            <div key={index}>
              <ReasonToUseItem
                id={reason_to_use.id}
                icon={reason_to_use.icon}
                title={reason_to_use.title}
                description={reason_to_use.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ReasonToUseBlock;
