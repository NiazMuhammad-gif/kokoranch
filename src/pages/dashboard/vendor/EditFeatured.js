import { Paper } from "@mui/material";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as PlusIcon } from "../../../assets/images/icons/icons8-plus.svg";
import NavBar from "./NavBar";
import { useNavigate, useLocation } from "react-router-dom";
import { TiTick } from "react-icons/ti";

function EditFeatured({ sidebar, setSidebar }) {
  let navigate = useNavigate();
  let location = useLocation();
  const [checkbox, setCheckBox] = useState({
    week1: false,
    week2: false,
    week3: false,
    week4: false,
  });
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
        <div style={{ marginBottom: "50px" }}>
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
        </div>

        <button
          onClick={() => {
            navigate("/make-it-featured/payment", {
              state: { service: location?.state?.service },
            });
          }}
          className="btn btn-solid btn-solid-primary table-btn"
          style={{
            marginRight: "20px",
            paddingLeft: "20px",
            paddingRight: "20PX",
            width: "150px",
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
          Proceed to Pay
        </button>
      </Paper>
    </>
  );
}

export default EditFeatured;
