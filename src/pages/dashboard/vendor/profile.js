import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { FaRegEdit } from "react-icons/fa";
import Images from "../../../constants/images";
import NavBar from "./NavBar";

export default function Profile({ setSidebar, sidebar }) {
  const [editAble, setEditAble] = useState(false);
  const [bankEditable, setBankEditable] = useState(false);

  return (
    <>
      <NavBar setSidebar={setSidebar} sidebar={sidebar} title="My Profile" />

      <article className="vendor-profile-main">
        <div className="vendor-profile-main_form">
          <div className="row mb-5">
            <div className="col-3 col-sm-2 col-md-2 col-lg-2">
              <div className="vendor-profile-main_form_image-input-wrapper">
                <img
                  src={Images.Pictures.profile}
                  className="vendor-profile-main_form_image-input-wrapper_preview"
                  alt="vendor-preview"
                  style={{ width: "10rem", height: "10rem" }}
                />

                {editAble ? (
                  <>
                    <input
                      type="file"
                      onChange={(e) => {
                        let reader = new FileReader();
                        reader.onload = (e) => {};
                        reader.readAsDataURL(e.target.files[0]);
                      }}
                      className="vendor-profile-main_form_image-input-wrapper_input"
                    />
                    <div className="vendor-profile-main_form_image-input-wrapper_icon-wrapper">
                      <FaRegEdit className="vendor-profile-main_form_image-input-wrapper_icon-wrapper_icon" />
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="col-6 col-sm-7 col-md-7 col-lg-7 d-flex flex-column justify-content-center vendor-profile-info">
              <label htmlFor="firstName" className="form-label">
                Public Profile Name
              </label>
              {editAble ? (
                <input
                  type="text"
                  className="form-control"
                  id="profileName"
                  name="profileName"
                  placeholder="Enter Your Profile Name"
                  required
                />
              ) : (
                <p className="preview">Koko Bhai</p>
              )}
            </div>
            <div className="col-3 col-lg-3 col-md-3 col-sm-3 d-flex flex-column justify-content-center vendor-system-id">
              <p className="vendor-id">User Id : 123456</p>
              <p className="vendor-text">(System Generated)</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 mb-4">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              {editAble ? (
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter Your First Name"
                  required
                />
              ) : (
                <p className="vendor-preview">Koko</p>
              )}
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              {editAble ? (
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter Your Last Name"
                  required
                />
              ) : (
                <p className="vendor-preview">Bhai</p>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              {editAble ? (
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email Address"
                  required
                />
              ) : (
                <p className="vendor-preview">kokobhai@gmail.com</p>
              )}
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <label htmlFor="contact" className="form-label">
                {editAble ? "Phone Number" : "Contact No."}
              </label>
              {editAble ? (
                <PhoneInput
                  country={"us"}
                  enableSearch={true}
                  id="contact"
                  name="contact"
                  placeholder="Phone Number"
                  required
                />
              ) : (
                <p className="vendor-preview">+1233454545</p>
              )}
            </div>
          </div>
          {editAble ? (
            <div className="row mt-5">
              <div className="col-12 col-md-6 col-lg-4">
                <button className="btn btn-solid btn-solid-primary w-100 py-3">
                  Save
                </button>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <button
                  className="btn btn-outline-primary w-100 py-3"
                  onClick={() => {
                    setEditAble(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="row mt-5">
              <div className="col-12 col-md-6 col-lg-4">
                <button
                  className="btn btn-solid btn-solid-primary w-100 py-3"
                  onClick={() => {
                    setEditAble(true);
                  }}
                >
                  Edit
                </button>
              </div>
              <div className="col-12 col-md-6 col-lg-6"></div>
            </div>
          )}
        </div>
        {/* ******************************************************* */}
        <hr className="hr-rule" />
        <div className="vendor-profile-main_form">
          <div className="bank-details">
            <h4 className="bank-details-heading">
              {bankEditable && "Edit "}Bank Account Details :
            </h4>
            {!bankEditable && (
              <div>
                <p className="bank-detail mb-4">
                  Bank Name :
                  <span className="bank-detail-light">
                    &nbsp; Bank Of America
                  </span>
                </p>
                <p className="bank-detail mb-4">
                  Bank Account Number:
                  <span className="bank-detail-light">
                    &nbsp; 5160-6679-1290-2354
                  </span>
                </p>
                <p className="bank-detail">
                  Routing No:
                  <span className="bank-detail-light">
                    &nbsp; VG34JTEZ3557176284859324
                  </span>
                </p>
              </div>
            )}
            {bankEditable && (
              <div className="row">
                <div className="col-12 col-md-6 col-lg-6">
                  <label htmlFor="firstName" className="form-label">
                    Bank Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    id="bank-name"
                    name="bank-name"
                    placeholder="Enter Your Bank Name"
                    required
                  />
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <label htmlFor="firstName" className="form-label">
                    Bank Account Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="bank-name"
                    name="bank-name"
                    placeholder="Enter Your Bank Account Number"
                    required
                  />
                </div>
                <div className="col-12 col-md-6 col-lg-6 mt-4">
                  <label htmlFor="firstName" className="form-label">
                    Routing No
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="bank-name"
                    name="bank-name"
                    placeholder="Enter Your Routing Number"
                    required
                  />
                </div>
              </div>
            )}
            {!bankEditable && (
              <div className="row mt-5">
                <div className="col-12 col-md-6 col-lg-4">
                  <button
                    className="btn btn-solid btn-solid-primary w-100 py-3"
                    onClick={() => {
                      setBankEditable(true);
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            )}
            {bankEditable && (
              <div className="row mt-5">
                <div className="col-12 col-md-6 col-lg-4">
                  <button className="btn btn-solid btn-solid-primary w-100 py-3">
                    Save
                  </button>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <button
                    className="btn btn-outline-primary w-100 py-3"
                    onClick={() => {
                      setBankEditable(false);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </article>
    </>
  );
}
