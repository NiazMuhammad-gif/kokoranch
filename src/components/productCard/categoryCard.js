import { Link } from "react-router-dom";

export default function CategoryCard(props) {
  return (
    <div className="card-flyer card-flyer_category mx-1">
      <Link to={props.params}>
        <div className="text-box">
          <div className="image-box">
            <img src={props.image} alt="" />
          </div>
          <div className="text-container text-center p-5">
            <h3 style={{ fontWeight: 100, textTransform: "capitalize" }}>
              {props.name}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
}
