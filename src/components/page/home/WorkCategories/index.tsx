import NavLink from "@/components/base/NavLink";
import WorkCategoriesList from "./WorkCategoriesList";

const WorkCategories = () => {
  return (
    <div>
      <h3 className="text-gray-700 font-normal font-sans text-3xl leading-9 mb-2 sm:text-[50px] sm:mb-4">
        Browse talent by category
      </h3>
      <p className="text-gray-600 mt-0">
        Looking for work? <NavLink href="/find_work">Browse jobs</NavLink>
      </p>
      <div className="mt-10">
        <WorkCategoriesList />
      </div>
    </div>
  );
};
export default WorkCategories;
