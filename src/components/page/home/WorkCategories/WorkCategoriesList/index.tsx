import WorkCategoriesListItem from "./WorkCategoriesListItem";
import work_categories_list from "./work_categories_list";

const WorkCategoriesList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {work_categories_list.map((work_category, index) => {
        return (
          <div key={index}>
            <WorkCategoriesListItem
              id={work_category.id}
              title={work_category.title}
              rating={work_category.rating}
              skills={work_category.skills}
            />
          </div>
        );
      })}
    </div>
  );
};
export default WorkCategoriesList;
