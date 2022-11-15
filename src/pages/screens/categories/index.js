import { useSelector } from "react-redux";
import CategoryCard from "../../../components/productCard/categoryCard";

export default function Categories() {
  const { categories } = useSelector((state) => state.CategoriesReducers);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 text-left">
          <h2 className="fs-2">
            All Cate<span className="border-title">gories</span>
          </h2>
        </div>
      </div>
      <div className="row">
        {categories.map((element, index) => {
          return (
            <div
              className="col-md-4 col-sm-6 col-lg-3"
              key={`${element._id}-${index}`}
              id={`${element._id}-${index}`}
            >
              <CategoryCard
                image={element.image}
                name={element.category}
                params={`/sub_categories/${element._id}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
