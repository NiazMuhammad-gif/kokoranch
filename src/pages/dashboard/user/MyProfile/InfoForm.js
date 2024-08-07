import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_USER } from "../../../../redux/actions/authentication";
import Popup from "../../../../components/popUp/popUp";
import Images from "../../../../constants/images";

export default function InfoForm({ setFormChange }) {
  const {
    control,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm();

  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  // USER DATA
  const user = {};
  // const { user, token } = useSelector((state) => state.authReducer);
  // useEffect(() => {
  //   setValue("_id", user?._id);
  //   setValue("firstName", user?.firstName);
  //   setValue("lastName", user?.lastName);
  //   setValue("email", user?.email);
  //   setValue("contact", user?.contact?.toString());
  // }, [user, setValue]); // eslint-disable-line react-hooks/exhaustive-deps

  const onsubmit = (data) => {
    // setLoading(true);
    // dispatch(UPDATE_USER(data, token, setLoading, setPopupOpen));
  };
  return (
    <>
      <form
        id="info-form"
        className="row info-change-form"
        onSubmit={handleSubmit(onsubmit)}
      >
        {/* USER ID  */}
        <Controller
          name="_id"
          control={control}
          defaultValue=""
          rules={{
            required: true,
          }}
          render={({ field }) => {
            return (
              <input
                name={field.name}
                type="hidden"
                value={field.value}
                onChange={field.onChange}
                error={errors._id}
              />
            );
          }}
        />

        {/* FIRST NAME  */}
        <div className="col-md-6 col-sm-12 mt-4">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            rules={{
              required: true,
            }}
            render={({ field }) => {
              return (
                <input
                  className="form-control form-control-white"
                  name={field.name}
                  value={field.value}
                  placeholder="JOHN"
                  onChange={field.onChange}
                  error={errors.firstName}
                />
              );
            }}
          ></Controller>
        </div>

        {/* LAST NAME  */}
        <div className="col-md-6 col-sm-12 mt-4">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            rules={{
              required: true,
            }}
            render={({ field }) => {
              return (
                <input
                  className="form-control form-control-white"
                  name={field.name}
                  value={field.value}
                  placeholder="SMITH"
                  onChange={field.onChange}
                  error={errors.lastName}
                />
              );
            }}
          ></Controller>
        </div>

        {/* EMAIL ADDRESS */}
        <div className="col-md-6 col-sm-12 mt-4">
          <label htmlFor="lastName" className="form-label">
            Email Address
          </label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: true,
            }}
            render={({ field }) => {
              return (
                <input
                  className="form-control form-control-white"
                  name={field.name}
                  value={field.value}
                  placeholder="abc@xyz.com"
                  onChange={field.onChange}
                  error={errors.lastName}
                />
              );
            }}
          ></Controller>
        </div>

        {/* CONTACT NUMBER */}
        <div className="col-md-6 col-sm-12 mt-4">
          <label htmlFor="contact" className="form-label">
            Contact No.
          </label>
          <Controller
            name="contact"
            control={control}
            defaultValue=""
            rules={{
              required: true,
            }}
            render={({ field }) => {
              return (
                <PhoneInput
                  enableSearch={true}
                  value={field.value}
                  country={"pk"}
                  placeholder="+123456789"
                  name={field.name}
                  error={errors.contact}
                  onChange={(phone) => setValue("contact", phone)}
                />
              );
            }}
          ></Controller>
        </div>

        <div className="info-change-form_button-wrapper">
          <button
            className="btn btn-solid-light"
            onClick={() => setFormChange(false)}
          >
            Cancel
          </button>
          <button
            className="btn btn-solid btn-solid-primary"
            form="info-form"
            type="submit"
            disabled={isLoading}
          >
            Save
          </button>
        </div>
      </form>
      <Popup open={popupOpen} setOpen={setPopupOpen}>
        <div className="model-wrapper">
          <img
            src={Images.Pictures.successCheck}
            className="model-wrapper_image"
            alt="success"
          />
          <p className="model-wrapper_text">
            Profile Info Updated Successfully
          </p>
          <button
            onClick={() => {
              setPopupOpen(false);
              setFormChange(false);
            }}
            className="btn btn-solid btn-solid-primary-rounded model-wrapper_button "
          >
            Close
          </button>
        </div>
      </Popup>
    </>
  );
}
