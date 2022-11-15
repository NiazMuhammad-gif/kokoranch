import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Images from "../../../constants/images";
import PhoneInput from "react-phone-input-2";
import { useDispatch } from "react-redux";
import { REGISTER } from "../../../redux/actions/authentication";
import { toast } from "react-toastify";

export default function Register() {
  const dispatch = new useDispatch();
  const navigate = useNavigate();

  const [isLoading, setLoading] = useState(false);
  const [isCheck, setCheck] = useState(false);
  const [user, setUser] = new useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    password: "",
    confirm: "",
    type: "buyer",
  });

  const onchange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onsubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (user.password !== user.confirm) {
      setLoading(false);
      toast.error("Password does not match");
      return false;
    }
    if (user.password.length < 6) {
      setLoading(false);
      toast.error("Password must be at least 6 characters");
      return false;
    }
    dispatch(REGISTER(user, setLoading, navigate));
  };
  return (
    <>
      <div
        className="container-fluid auth-back d-flex justify-content-center py-5"
        style={{
          position: "relative",
        }}
      >
        <img
          src={Images.Pictures.brownLeftLeaf}
          style={{
            position: "absolute",
            bottom: "-17rem",
            left: "0rem",
            width: "60rem",
          }}
          alt="brown-left-leaf"
        />
        <div className="col-lg-6 col-md-11 col-sm-12 dark-card auth-card d-flex my-5">
          <div className="row mt-md-1">
            <div className="col-12 text-center mt-5">
              <h2 style={{ fontWeight: 400 }}>Sign Up as Buyer</h2>
            </div>
            <form className="row px-5 my-3" onSubmit={onsubmit}>
              <div className="col-md-6 col-sm-12 mt-4">
                <label for="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  value={user.firstName}
                  onChange={onchange}
                  name="firstName"
                  placeholder="Enter Your First Name"
                  required
                />
              </div>
              <div className="col-md-6 col-sm-12 mt-4">
                <label for="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  value={user.lastName}
                  onChange={onchange}
                  name="lastName"
                  placeholder="Enter Your Last Name"
                  required
                />
              </div>
              <div className="col-md-6 col-sm-12 mt-4">
                <label for="email" className="form-label">
                  Enter Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={user.email}
                  onChange={onchange}
                  name="email"
                  placeholder="Enter Your Email Address"
                  required
                />
              </div>
              <div className="col-md-6 col-sm-12 mt-4">
                <label for="contact" className="form-label">
                  Enter Phone Number
                </label>
                <PhoneInput
                  country={"us"}
                  enableSearch={true}
                  id="contact"
                  value={user.contact}
                  onChange={(contact) => setUser({ ...user, contact })}
                  name="contact"
                  placeholder="Phone Number"
                  required
                />
              </div>

              <div className="col-md-6 col-sm-12 mt-4">
                <label for="password" className="form-label">
                  Create New Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={user.password}
                  onChange={onchange}
                  name="password"
                  placeholder="Enter Your Password"
                  required
                />
              </div>
              <div className="col-md-6 col-sm-12 mt-4">
                <label for="confirm" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirm"
                  value={user.confirm}
                  onChange={onchange}
                  name="confirm"
                  placeholder="Confirm Your Password"
                  required
                />
              </div>
              <div className="col-12 mt-5 d-flex align-items-center">
                <input
                  type="checkbox"
                  checked={isCheck}
                  onChange={() => setCheck(!isCheck)}
                  className="checkbox_animated_2 check-it me-4"
                />{" "}
                <p>
                  I agree with the
                  <Link to={"/policy"} style={{ color: "#14a384" }}>
                    {" "}
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link to={"/terms"} style={{ color: "#14a384" }}>
                    Terms & Conditions
                  </Link>
                </p>
              </div>
              <div className="col-md-12 mt-3 text-center">
                <p>
                  Want to sign up as a Vender or Trader.{" "}
                  <Link to="/vendor-register" style={{ color: "#14a384" }}>
                    Click here ?
                  </Link>
                </p>
              </div>
              <div className="col-md-12 mt-3 text-center">
                <p>
                  Already have an account?{" "}
                  <Link to="/login" style={{ color: "#14a384" }}>
                    Login
                  </Link>
                </p>
              </div>
              <div className="col-12 my-4 text-center">
                <button
                  className="btn btn-solid-light-rounded py-3 m-auto  register-btn"
                  style={{ width: "20rem", color: "#14A384" }}
                  disabled={isLoading || !isCheck}
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
