import React from "react";
import { useSelector } from "react-redux";

export default function InfoDetails({ setFormChange }) {
  // USER DATA
  const { user } = useSelector((state) => state.authReducer);
  return (
    <>
      <div className="col-lg-6 col-md-12 col-sm-12">
        <h4 className="fs-4">First Name</h4>
        <h3 className="fs-3">{user?.firstName || "Undefined"}</h3>
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12">
        <h4 className="fs-4">Last Name</h4>
        <h3 className="fs-3">{user?.lastName || "Undefined"}</h3>
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12">
        <h4 className="fs-4">Email Address</h4>
        <h3 className="fs-3">{user?.email || "Undefined"}</h3>
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12">
        <h4 className="fs-4">Contact No.</h4>
        <h3 className="fs-3">+{user?.contact || "Undefined"}</h3>
      </div>
      <div className="row" style={{ paddingTop: "6rem" }}>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <button
            className="btn btn-solid btn-solid-primary btn-full"
            onClick={() => {
              setFormChange("info-form");
            }}
          >
            Edit
          </button>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <button
            className="btn btn-solid btn-solid-primary btn-full"
            onClick={() => {
              setFormChange("password-form");
            }}
          >
            Change Password
          </button>
        </div>
      </div>
    </>
  );
}
