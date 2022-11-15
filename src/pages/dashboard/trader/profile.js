import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import { toast } from "react-toastify";
import { FaRegEdit } from "react-icons/fa";
import Images from "../../../constants/images";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import { UPDATE_USER } from "../../../redux/actions/authentication";
export default function Profile({ setSidebar, sidebar }) {
  const dispatch = useDispatch();
  const { user: userData, userUpdated } = useSelector(
    (state) => state.authReducer
  );

  // const [isLoading, setLoading] = useState(false);
  const [editAble, setEditAble] = useState(false);
  const [user, setUser] = useState();
  const [selectedImageD, setselectedImageD] = useState();
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const profileName = user?.firstName + " " + user?.lastName;
  const onsubmit = (e) => {
    e.preventDefault();
    // setLoading(true);

    if (editAble) {
      const data = {
        contact: parseFloat(user?.contact),
        email: user?.email,
        firstName: user?.firstName,
        lastName: user?.lastName,
        image: user?.image,
      };

      dispatch(UPDATE_USER(data, localStorage.getItem("token"), userData._id));
    }
  };
  useEffect(() => {
    if (userData) {
      setUser(userData);
    }
  }, []);

  useEffect(() => {
    if (userUpdated) {
      setEditAble(false);
    }
  }, [userUpdated]);

  return (
    <>
      <Navbar setSidebar={setSidebar} sidebar={sidebar} title="My Profile" />
      {userData ? (
        <article className="trader-profile-main">
          <div className=" trader-profile-main_form">
            <form
              onSubmit={() => {
                onsubmit();
              }}
            >
              <div className="row">
                <div className="col-3 col-sm-2 col-md-2 col-lg-2">
                  <div className="trader-profile-main_form_image-input-wrapper">
                    {selectedImageD ? (
                      <img
                        src={selectedImageD}
                        className="trader-profile-main_form_image-input-wrapper_preview"
                        alt="trader-preview"
                        style={{ width: "10rem", height: "10rem" }}
                      />
                    ) : (
                      <img
                        src={user?.image}
                        className="trader-profile-main_form_image-input-wrapper_preview"
                        alt="trader-preview"
                        style={{ width: "10rem", height: "10rem" }}
                      />
                    )}
                    {editAble ? (
                      <>
                        <input
                          type="file"
                          onChange={(e) => {
                            // console.log(e.target.files)
                            // return
                            let reader = new FileReader();
                            reader.onload = (e) => {
                              setselectedImageD(e.target.result);
                            };
                            reader.readAsDataURL(e.target.files[0]);

                            setUser({
                              ...user,
                              image: e.target.files[0],
                            });
                          }}
                          // src={Images.Pictures.profile}
                          className="trader-profile-main_form_image-input-wrapper_input"
                        />
                        <div className="trader-profile-main_form_image-input-wrapper_icon-wrapper">
                          <FaRegEdit className="trader-profile-main_form_image-input-wrapper_icon-wrapper_icon" />
                        </div>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="col-9 col-sm-10 col-md-10 col-lg-10 d-flex flex-column justify-content-center">
                  <label htmlFor="firstName" className="form-label">
                    Public Profile Name
                  </label>
                  {editAble ? (
                    <input
                      type="text"
                      className="form-control"
                      id="profileName"
                      value={profileName}
                      name="profileName"
                      onChange={(e) => {
                        console.log(e.target.value);
                      }}
                      placeholder="Enter Your Profile Name"
                      required
                    />
                  ) : (
                    <p className="preview">{profileName}</p>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-6">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  {editAble ? (
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      value={user?.firstName}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      name="firstName"
                      placeholder="Enter Your First Name"
                      required
                    />
                  ) : (
                    <p className="preview">{user?.firstName}</p>
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
                      value={user?.lastName}
                      name="lastName"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      placeholder="Enter Your Last Name"
                      required
                    />
                  ) : (
                    <p className="preview">{user?.lastName}</p>
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
                      value={user?.email}
                      name="email"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      placeholder="Enter Your Email Address"
                      required
                    />
                  ) : (
                    <p className="preview">{user?.email}</p>
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
                      value={user?.contact?.toString()}
                      name="contact"
                      onChange={(phone) => {
                        setUser({
                          ...user,
                          contact: phone,
                        });
                      }}
                      placeholder="Phone Number"
                      required
                    />
                  ) : (
                    <p className="preview">{user?.contact?.toString()}</p>
                  )}
                </div>
              </div>
            </form>
            {editAble ? (
              <div className="row mt-5">
                <div className="col-12 col-md-6 col-lg-4">
                  <button
                    onClick={(e) => {
                      onsubmit(e);
                    }}
                    className="btn btn-solid btn-solid-primary w-100 py-3"
                  >
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
                      // debugger
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
        </article>
      ) : (
        ""
      )}
    </>
  );
}
