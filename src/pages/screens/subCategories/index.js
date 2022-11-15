import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CategoryCard from "../../../components/productCard/categoryCard";

export default function SubCategories() {
  const { subCategories, subSubCategories } = useSelector(
    (state) => state.CategoriesReducers
  );
  const { id } = useParams();

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 text-left">
          <h2 className="fs-2">
            All Sub Cate<span className="border-title">gories</span>
          </h2>
        </div>
      </div>
      <div className="row justify-content-center">
        {subCategories
          .filter((arr) => arr.category._id.toString() === id)
          .map((element, index) => {
            return (
              <div
                className="col-md-4 col-sm-6 col-lg-3"
                key={`${element._id}-${index}`}
                id={`${element._id}-${index}`}
              >
                <CategoryCard
                  image={element.image}
                  name={element.subCategory}
                  params={
                    subSubCategories.filter(
                      (arr) =>
                        arr.subCategory._id.toString() ===
                        element._id.toString()
                    ) > 0
                      ? `/sub_sub_categories/${element._id}`
                      : `/products/${element._id}`
                  }
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
