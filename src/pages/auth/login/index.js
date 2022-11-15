import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN } from "../../../redux/actions/authentication";
import Images from "../../../constants/images";
import { useDispatch } from "react-redux";

export default function Login() {
  // FORM DATA
  const [credidentials, setCredidentials] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  // IS LOADING
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();

  // SETTING STATE WITH INPUT
  const onchange = (e) => {
    setCredidentials({ ...credidentials, [e.target.name]: e.target.value });
  };

  // FORM SUBMISSION
  const onsubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(LOGIN(credidentials, setLoading, navigate));
  };
  return (
    <>
      <div
        className="container-fluid auth-back d-flex justify-content-center py-5"
        style={{
          textAlign: "left",
          position: "relative",
        }}
      >
        <img
          src={Images.Pictures.brownLeftLeaf}
          style={{
            position: "absolute",
            bottom: "-15rem",
            left: "3rem",
            width: "55rem",
          }}
          alt="BACKGROUND LEFT LEAF"
        />
        <div
          className="col-lg-6 col-md-8 col-sm-12 dark-card auth-card d-flex my-5 "
          style={{ height: "62rem" }}
        >
          <div className="row g-4 mt-md-1 p-5">
            <div className="col-12 text-center">
              <h2 className="fs-2">Login</h2>
            </div>
            <form onSubmit={onsubmit}>
              <div className="col-md-12">
                <label htmlFor="email" className="form-label">
                  Email or Phone
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={credidentials.email}
                  onChange={onchange}
                  name="email"
                  placeholder="Email or Phone"
                  required
                />
              </div>
              <div className="col-md-12 mt-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={credidentials.password}
                  onChange={onchange}
                  name="password"
                  placeholder="Enter Password"
                  required
                />
                <Link to={"/forgot-password"}>
                  <p className="font-light" style={{ float: "right" }}>
                    Forgot Password?
                  </p>
                </Link>
              </div>
              <div className="col-md-12 my-5 text-center">
                <p>
                  Don't have an account?{" "}
                  <Link to="/register" style={{ color: "#14a384" }}>
                    Sign up
                  </Link>
                </p>
              </div>
              <div className="col-md-12 mt-3 text-center">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn btn-block btn-solid btn-solid-primary-rounded my-3"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
