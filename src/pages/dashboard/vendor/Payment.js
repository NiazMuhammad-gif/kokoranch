import { Paper } from "@mui/material";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as PlusIcon } from "../../../assets/images/icons/icons8-plus.svg";

import { useNavigate, useLocation } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import Images from "../../../constants/images";
import NavBar from "./NavBar";

function Payment({ sidebar, setSidebar }) {
  let navigate = useNavigate();

  const [data, setData] = useState({
    location:
      "Your post will appear on featured post section for the number of weeks you will select below",
    shippingTo: "shdfkjhs",
    Delivery: "skjdhfkjsdhfkjhdsjkhf",
    Return: "skjdhfkjsdhf",
    ShippingAndHandling: "sjdhfjksh",
  });
  return (
    <>
      <NavBar
        setSidebar={setSidebar}
        sidebar={sidebar}
        title="Make It Featured"
      />
      <Paper
        sx={{
          backgroundColor: "#1e1e1e",
          color: "white",
          padding: "30px",
          boxShadow: "0rem 0rem 0px 0.1rem #00000047",
        }}
        elevation={20}
      >
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 mt-1 d-flex justify-content-end align-items-center">
            <h3
              className="mx-3"
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate(-1);
              }}
            >
              <span className="vtext-primary mx-2">&#10229;</span>Back
            </h3>
          </div>
        </div>
        <div style={{ marginBottom: "50px" }}>
          <p className="paragraph-text">{data.location}</p>
        </div>
        {/* <div style={{ marginBottom: "50px" }}>
          <h4>Select Your Package</h4>
          <div className="row d-flex justify-content-between mt-5">
            <div className="col-6">
              <div className="row">
                <div className="col-4">
                  <p className="paragraph-text">1 Week</p>
                </div>
                <div className="col-4 d-flex justify-content-center">
                  <p className="paragraph-text">$ 50</p>
                </div>
                <div className="col-4 d-flex justify-content-end">
                  <p
                    className="paragraph-text"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setCheckBox({
                        week1: checkbox.week1 ? false : true,
                        week2: false,
                        week3: false,
                        week4: false,
                      });
                    }}
                  >
                    <span className="checkbox-primary">
                      {checkbox.week1 && (
                        <>
                          <div>
                            <TiTick
                              style={{
                                marginTop: "-15px",
                                marginLeft: "-7px",
                              }}
                              size={40}
                              fill="#0f866c"
                            />
                          </div>
                        </>
                      )}
                    </span>
                  </p>
                </div>
              </div>
              <hr className="hr-rule1" />
              <div className="row">
                <div className="col-4">
                  <p className="paragraph-text">2 Week</p>
                </div>
                <div className="col-4 d-flex justify-content-center">
                  <p className="paragraph-text">$ 50</p>
                </div>
                <div className="col-4 d-flex justify-content-end">
                  <p
                    className="paragraph-text"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setCheckBox({
                        week1: false,
                        week2: checkbox.week2 ? false : true,
                        week3: false,
                        week4: false,
                      });
                    }}
                  >
                    <span className="checkbox-primary">
                      {checkbox.week2 && (
                        <div>
                          <TiTick
                            style={{ marginTop: "-15px", marginLeft: "-7px" }}
                            size={40}
                            fill="#0f866c"
                          />
                        </div>
                      )}
                    </span>
                  </p>
                </div>
              </div>
              <hr className="hr-rule1" />
              <div className="row">
                <div className="col-4">
                  <p className="paragraph-text">3 Week</p>
                </div>
                <div className="col-4 d-flex justify-content-center">
                  <p className="paragraph-text">$ 50</p>
                </div>
                <div className="col-4 d-flex justify-content-end">
                  <p
                    className="paragraph-text"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setCheckBox({
                        week1: false,
                        week2: false,
                        week3: checkbox.week3 ? false : true,
                        week4: false,
                      });
                    }}
                  >
                    <span className="checkbox-primary">
                      {checkbox.week3 && (
                        <div>
                          <TiTick
                            style={{ marginTop: "-15px", marginLeft: "-7px" }}
                            size={40}
                            fill="#0f866c"
                          />
                        </div>
                      )}
                    </span>
                  </p>
                </div>
              </div>
              <hr className="hr-rule1" />
              <div className="row">
                <div className="col-4">
                  <p className="paragraph-text">4 Week</p>
                </div>
                <div className="col-4 d-flex justify-content-center">
                  <p className="paragraph-text">$ 50</p>
                </div>
                <div className="col-4 d-flex justify-content-end">
                  <p
                    className="paragraph-text"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setCheckBox({
                        week1: false,
                        week2: false,
                        week3: false,
                        week4: checkbox.week4 ? false : true,
                      });
                    }}
                  >
                    <span className="checkbox-primary">
                      {checkbox.week4 && (
                        <div>
                          <TiTick
                            style={{ marginTop: "-15px", marginLeft: "-7px" }}
                            size={40}
                            fill="#0f866c"
                          />
                        </div>
                      )}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <ul className="payment-images">
          {Images.Pictures.payments.map((element, index) => {
            return (
              <li key={index} style={{ margin: "0 2.5px" }}>
                <Link to="/make-it-featured/payment">
                  <img
                    src={element}
                    className="img-fluid  lazyload"
                    alt="payment icon"
                    width={31}
                    height={30}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="my-5">
          <h5 style={{ fontWeight: "bold" }}>Enter Card Detail</h5>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-5 mb-5 col-sm-12 col-xs-12">
            <label htmlFor="firstName" className="form-label">
              CARD NUMBER
            </label>

            <input
              type="number"
              className="form-control"
              id="firstName"
              name="firstName"
              placeholder="1234-4567-654"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-5 mb-5 col-sm-12 col-xs-12">
            <label htmlFor="firstName" className="form-label">
              NAME OF CARD
            </label>

            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              placeholder="local 14 days and Global 30 days"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-5 mb-5 col-sm-12 col-xs-12">
            <label htmlFor="firstName" className="form-label">
              EXPIRY DATE
            </label>

            <input
              type="date"
              className="form-control"
              id="firstName"
              name="firstName"
              placeholder="local 14 days and Global 30 days"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-5 mb-5 col-sm-12 col-xs-12">
            <label htmlFor="firstName" className="form-label">
              CVV
            </label>

            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              placeholder="local 14 days and Global 30 days"
              required
            />
          </div>
        </div>
        <button
          onClick={() => {
            navigate("/featured-payment");
          }}
          className="btn btn-solid btn-solid-primary table-btn"
          style={{
            marginRight: "20px",
            paddingLeft: "20px",
            paddingRight: "20PX",
            width: "120px",
          }}
        >
          <div
            style={{
              // backgroundColor: "white",
              margin: "5px",
              display: "flex",
              justifyContent: "flex-start",
            }}
          ></div>
          Pay Now
        </button>
      </Paper>
    </>
  );
}

export default Payment;
