import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Images from "../../../constants/images";

export default function Checkout() {
  //   const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
    // setValue,
    // getValues,
  } = useForm();
  const [loading, setLoading] = useState(false);

  const handleOrder = async (values) => {
    console.log(values);
    setLoading(true);
  };
  return (
    <>
      <div
        className="container mt-5"
        style={{
          position: "relative",
          top: "0rem",
          // left: "40rem",
        }}
      >
        <img
          src={Images.Pictures.brownRightLeaf}
          style={{
            position: "absolute",
            top: "10rem",
            right: "5rem",
            width: "40rem",
            transform: "rotate(270deg)",
            zIndex: "-1",
          }}
          alt="brownRightLeaf"
        ></img>
        <img
          src={Images.Pictures.brownLeftLeaf}
          style={{
            position: "absolute",
            bottom: "-30rem",
            left: "-5rem",
            width: "60rem",
            zIndex: "-1",
          }}
          alt="brownLeftLeaf"
        ></img>
        <h2 className=" fs-2 mb-4">Checkout</h2>
        <div className="row">
          <div className="col-md-7 col-sm-12">
            <div className="container-fluid auth-back d-flex justify-content-center py-5 checkout-form">
              <div className="row mt-md-1">
                <form
                  className="row px-5 my-3"
                  id="my-form"
                  onSubmit={handleSubmit(handleOrder)}
                >
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
                            className="form-control"
                            name={field.name}
                            value={field.value}
                            placeholder="Enter Your First Name"
                            onChange={field.onChange}
                            error={errors.firstName}
                          />
                        );
                      }}
                    ></Controller>
                  </div>
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
                            className="form-control"
                            name={field.name}
                            value={field.value}
                            placeholder="Enter Your Last Name"
                            onChange={field.onChange}
                            error={errors.lastName}
                          />
                        );
                      }}
                    ></Controller>
                  </div>
                  <div className="col-md-12 col-sm-12 mt-4">
                    <label htmlFor="address" className="form-label">
                      Complete Address
                    </label>
                    <Controller
                      name="address"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: true,
                      }}
                      render={({ field }) => {
                        return (
                          <textarea
                            className="form-control"
                            name={field.name}
                            value={field.value}
                            placeholder="Enter Complete Address"
                            onChange={field.onChange}
                            error={errors.address}
                          />
                        );
                      }}
                    ></Controller>
                  </div>
                  <div className="col-md-6 col-sm-12 mt-4">
                    <label htmlFor="country" className="form-label">
                      Country
                    </label>
                    <Controller
                      name="country"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: true,
                      }}
                      render={({ field }) => {
                        return (
                          <select
                            className="form-control form-select form-select-lg mb-3"
                            aria-label=".form-select-lg example"
                            value={field.value}
                            name={field.name}
                            onChange={field.onChange}
                            error={errors.country}
                          >
                            <option selected value="1">
                              USA
                            </option>
                            <option value="2">Pakistan</option>
                            <option value="3">China</option>
                            <option value="4">Iran</option>
                          </select>
                        );
                      }}
                    ></Controller>
                  </div>
                  <div className="col-md-6 col-sm-12 mt-4">
                    <label htmlFor="city" className="form-label">
                      City
                    </label>
                    <Controller
                      name="city"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: true,
                      }}
                      render={({ field }) => {
                        return (
                          <input
                            className="form-control"
                            name={field.name}
                            value={field.value}
                            placeholder="Enter Your Phone"
                            onChange={field.onChange}
                            error={errors.city}
                          />
                        );
                      }}
                    ></Controller>
                  </div>
                  <div className="col-md-6 col-sm-12 mt-4">
                    <label htmlFor="state" className="form-label">
                      State/Province/Region
                    </label>
                    <Controller
                      name="state"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: true,
                      }}
                      render={({ field }) => {
                        return (
                          <input
                            className="form-control"
                            name={field.name}
                            value={field.value}
                            placeholder="Enter Your Phone"
                            onChange={field.onChange}
                            error={errors.state}
                          />
                        );
                      }}
                    ></Controller>
                  </div>
                  <div className="col-md-6 col-sm-12 mt-4">
                    <label htmlFor="zipcode" className="form-label">
                      State/Province/Region
                    </label>
                    <Controller
                      name="zipcode"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: true,
                      }}
                      render={({ field }) => {
                        return (
                          <input
                            type="number"
                            className="form-control"
                            name={field.name}
                            value={field.value}
                            placeholder="Enter Your Phone"
                            onChange={field.onChange}
                            error={errors.zipcode}
                          />
                        );
                      }}
                    ></Controller>
                  </div>
                  <div className="col-md-6 col-sm-12 mt-4">
                    <label htmlFor="email" className="form-label">
                      Email
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
                            className="form-control"
                            name={field.name}
                            value={field.value}
                            placeholder="Enter Your Last Name"
                            onChange={field.onChange}
                            error={errors.email}
                          />
                        );
                      }}
                    ></Controller>
                  </div>
                  <div className="col-md-6 col-sm-12 mt-4">
                    <label htmlFor="phone" className="form-label">
                      Phone
                    </label>
                    <Controller
                      name="phone"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: true,
                      }}
                      render={({ field }) => {
                        return (
                          <input
                            type="number"
                            className="form-control"
                            name={field.name}
                            value={field.value}
                            placeholder="Enter Your Phone"
                            onChange={field.onChange}
                            error={errors.phone}
                          />
                        );
                      }}
                    ></Controller>
                  </div>
                  <div className="col-md-12 col-sm-12 mt-4">
                    <label htmlFor="othernotes" className="form-label">
                      Complete Address
                    </label>
                    <Controller
                      name="othernotes"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: false,
                      }}
                      render={({ field }) => {
                        return (
                          <textarea
                            className="form-control"
                            name={field.name}
                            value={field.value}
                            placeholder="Notes about your order, e.g. about delivery"
                            onChange={field.onChange}
                            error={errors.othernotes}
                          />
                        );
                      }}
                    ></Controller>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-sm-12 p-2 mt-sm-4">
            <div className="checkout-summery-wrapper">
              <h3 className="fs-3 "> Summery</h3>
              <div className="cart-summery-wrapper_inner-wrapper">
                <p>items(4)</p>
                <h5 className="fs-5">usd.22</h5>
              </div>
              <div className="cart-summery-wrapper_inner-wrapper">
                <p>Delivery Charges</p>
                <h5 className="fs-5">usd.22</h5>
              </div>
              <div className="cart-summery-wrapper_inner-wrapper">
                <p>Total</p>
                <h5 className="fs-5">usd.22</h5>
              </div>

              {loading ? (
                <div
                  className="spinner-border"
                  style={{ width: "3rem", height: "3rem", marginTop: "2rem" }}
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                <Link
                  to="/payment"
                  className="btn btn-solid btn-solid-primary-rounded px-5 cart-summery-wrapper_button"
                >
                  {/* <button
                    className="btn btn-solid btn-solid-primary-rounded px-5 cart-summery-wrapper_button"
                    form="my-form"
                  > */}
                  Proceed to pay
                  {/* </button> */}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
