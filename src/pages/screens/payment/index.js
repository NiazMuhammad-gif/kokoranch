import React, { useState } from "react";
import Popup from "../../../components/popUp/popUp";
import { Controller, useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import Images from "../../../constants/images";
import { TiTick } from "react-icons/ti";
import { FaExclamation } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function Payment() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
    // setValue,
    // getValues,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [successfulPopup, setSuccessfulPopup] = useState(false);
  const handleOrder = async (values) => {
    console.log(values);
    setLoading(true);
    // closeSnackbar();
    // try {
    //   setLoading(true);
    //   const { data } = await axios.post(
    //     `/api/orders`,
    //     {},
    //     {
    //       headers: {
    //         authorization: `Bearer `,
    //       },
    //     }
    //   );
    //   setLoading(false);
    //   navigate("/payment", {
    //     query: { orderID: data.orderId },
    //   });
    // } catch (err) {
    //   setLoading(false);
    // }
  };

  return (
    <>
      <Popup open={popupOpen} setOpen={setPopupOpen}>
        <div className="soi-update-status">
          <div className="successful-popup">
            <div className="sp-icon">
              <FaExclamation size={30} fill="black" />
            </div>
            <h3>
              Are You Sure You
              <br />
              Want To Pay?
            </h3>
          </div>
          <div className="soi-popup-btns d-flex">
            <button
              className="btn btn-solid btn-solid-cancel btn-outline-primary soi-popup-btn"
              onClick={() => {
                setPopupOpen(false);
              }}
            >
              Cancel
            </button>
            <button
              className="btn btn-solid btn-solid-primary  soi-popup-btn"
              onClick={() => {
                // setSuccessfulPopup(true);
                setPopupOpen(false);
                navigate("/order-placed");
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      </Popup>
      <Popup open={successfulPopup} setOpen={setSuccessfulPopup}>
        <div className="successful-popup">
          <div className="sp-icon">
            <TiTick size={30} fill="black" />
          </div>

          <h3>
            Payment Successful
            <br />
            Your Product Is Featured For 1 Week.
          </h3>

          <button
            className="btn btn-solid btn-solid-primary soi-success-btn"
            onClick={() => {
              setSuccessfulPopup(false);
              // navigate("/vendor-my-products");
            }}
          >
            Close
          </button>
        </div>
      </Popup>
      <div
        className="container mt-5 payment-wrapper"
        style={{
          position: "relative",
        }}
      >
        <img
          src={Images.Pictures.brownRightLeaf}
          style={{
            position: "absolute",
            top: "3rem",
            right: "0rem",
            width: "40rem",
            transform: "rotate(270deg)",
            zIndex: "-1",
          }}
          alt="signup"
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
          alt="signup"
        ></img>
        <label
          className=" mb-5"
          style={{ letterSpacing: "5px", fontSize: "25px" }}
        >
          Enter Card / Account Details
        </label>
        <div className="row">
          <div className="col-md-8 col-sm-12 payment-wrapper_tabs">
            <ul class="nav  nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="visa-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#visa"
                  type="button"
                  role="tab"
                  aria-controls="visa"
                  aria-selected="true"
                >
                  <img
                    width="80"
                    height="50"
                    src={Images.Pictures.tabPayments[0]}
                    alt="signup"
                  ></img>
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="master-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#master"
                  type="button"
                  role="tab"
                  aria-controls="master"
                  aria-selected="false"
                >
                  <img
                    width="80"
                    height="50"
                    src={Images.Pictures.tabPayments[1]}
                    alt="signup"
                  ></img>
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pay-pal-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#pay-pal"
                  type="button"
                  role="tab"
                  aria-controls="pay-pal"
                  aria-selected="false"
                >
                  <img
                    width="80"
                    height="50"
                    src={Images.Pictures.tabPayments[2]}
                    alt="signup"
                  ></img>
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="amex-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#amex"
                  type="button"
                  role="tab"
                  aria-controls="amex"
                  aria-selected="false"
                >
                  <img
                    width="80"
                    height="50"
                    src={Images.Pictures.tabPayments[3]}
                    alt="signup"
                  ></img>
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="discover-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#discover"
                  type="button"
                  role="tab"
                  aria-controls="discover"
                  aria-selected="false"
                >
                  <img
                    width="80"
                    height="50"
                    src={Images.Pictures.tabPayments[4]}
                    alt="signup"
                  ></img>
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="bit-pay-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#bit-pay"
                  type="button"
                  role="tab"
                  aria-controls="bit-pay"
                  aria-selected="false"
                >
                  <img
                    width="80"
                    height="50"
                    src={Images.Pictures.tabPayments[5]}
                    alt="signup"
                  ></img>
                </button>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              {/* visa tab start */}
              <div
                class="tab-pane fade show active"
                id="visa"
                role="tabpanel"
                aria-labelledby="visa-tab"
              >
                <div className="visa-card-wrapper">
                  <form
                    className="row px-5 my-3"
                    id="my-form"
                    onSubmit={handleSubmit(handleOrder)}
                  >
                    <div className="row mb-4">
                      <div className="col-md-6 col-sm-12 mt-4">
                        <label htmlFor="card-number" className="form-label">
                          CARD NUMBER
                        </label>
                        <Controller
                          name="card-number"
                          control={control}
                          defaultValue=""
                          rules={{
                            required: true,
                          }}
                          render={({ field }) => {
                            return (
                              <input
                                className="form-control card-number"
                                name={field.name}
                                value={field.value}
                                placeholder="0000 0000 0000 0000"
                                onChange={field.onChange}
                                error={errors.firstName}
                              />
                            );
                          }}
                        ></Controller>
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col-md-6 col-sm-12 mt-4">
                        <label htmlFor="card-name" className="form-label">
                          CARDHOLDER NAME
                        </label>
                        <Controller
                          name="card-name"
                          control={control}
                          defaultValue=""
                          rules={{
                            required: true,
                          }}
                          render={({ field }) => {
                            return (
                              <input
                                className="form-control card-name"
                                name={field.name}
                                value={field.value}
                                placeholder="Jhon"
                                onChange={field.onChange}
                                error={errors.firstName}
                              />
                            );
                          }}
                        ></Controller>
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col-md-6 col-sm-12 mt-4">
                        <label htmlFor="card-expiry" className="form-label">
                          EXPIRE DATE
                        </label>
                        <Controller
                          name="card-expiry"
                          control={control}
                          defaultValue=""
                          rules={{
                            required: true,
                          }}
                          render={({ field }) => {
                            return (
                              <input
                                className="form-control card-expiry"
                                name={field.name}
                                value={field.value}
                                placeholder="05/21"
                                onChange={field.onChange}
                                error={errors.firstName}
                              />
                            );
                          }}
                        ></Controller>
                      </div>
                      {/* <div className="col-12 mt-5">
                        {loading && (
                          <div
                            className="spinner-border"
                            style={{
                              width: "3rem",
                              height: "3rem",
                              marginTop: "2rem",
                            }}
                            role="status"
                          >
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        )}
                      </div> */}
                    </div>
                    <div className="row mb-4">
                      <div className="col-md-6 col-sm-12 mt-4">
                        <label htmlFor="card-cvv" className="form-label">
                          CVV
                        </label>
                        <Controller
                          name="card-cvv"
                          control={control}
                          defaultValue=""
                          rules={{
                            required: true,
                          }}
                          render={({ field }) => {
                            return (
                              <input
                                className="form-control card-cvv"
                                name={field.name}
                                value={field.value}
                                placeholder="123"
                                onChange={field.onChange}
                                error={errors.firstName}
                              />
                            );
                          }}
                        ></Controller>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* visa tab end */}
              {/* master tab start */}
              <div
                class="tab-pane fade"
                id="master"
                role="tabpanel"
                aria-labelledby="master-tab"
              ></div>
              {/* master tab end */}
              {/* pay-pal tab start */}
              <div
                class="tab-pane fade"
                id="pay-pal"
                role="tabpanel"
                aria-labelledby="master-tab"
              ></div>
              {/*  pay-pal tab end */}
              {/* amex-pay tab start */}
              <div
                class="tab-pane fade"
                id="amex-pay"
                role="tabpanel"
                aria-labelledby="master-tab"
              ></div>
              {/*  amex-pay tab end */}
              {/* discover tab start */}
              <div
                class="tab-pane fade"
                id="discover"
                role="tabpanel"
                aria-labelledby="master-tab"
              ></div>
              {/*  discover tab end */}
              {/* bit-pay tab start */}
              <div
                class="tab-pane fade"
                id="bit-pay"
                role="tabpanel"
                aria-labelledby="master-tab"
              ></div>
              {/*  bit-pay tab end */}
            </div>
          </div>
          <div className="col-md-4 col-sm-12 p-2 mt-sm-4">
            <div className="checkout-summery-wrapper">
              <h3 className="fs-3 "> Summery</h3>
              <div className="cart-summery-wrapper_inner-wrapper">
                <p>Price (3 items)</p>
                <h5 className="fs-5">usd.22</h5>
              </div>
              <div className="cart-summery-wrapper_inner-wrapper">
                <p>Shipping Charges</p>
                <h5 className="fs-5">usd.22</h5>
              </div>
              <div className="cart-summery-wrapper_inner-wrapper">
                <p>Total Amount</p>
                <h5 className="fs-5">usd.22</h5>
              </div>
              {/* <Link
                to="/payment"
                className="btn btn-solid btn-solid-primary-rounded px-5 cart-summery-wrapper_button"
              > */}
              <button
                onClick={() => {
                  setPopupOpen(true);
                }}
                className="btn btn-solid btn-solid-primary-rounded px-5 cart-summery-wrapper_button"
                form="my-form"
              >
                Pay Now
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
