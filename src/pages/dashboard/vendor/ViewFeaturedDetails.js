import { Paper } from "@mui/material";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as PlusIcon } from "../../../assets/images/icons/icons8-plus.svg";
import NavBar from "./NavBar";
import { useNavigate, useLocation } from "react-router-dom";
function ViewFeaturedDetail({ sidebar, setSidebar }) {
  let navigate = useNavigate();
  let location = useLocation();
  const [data, setData] = useState({
    location: "karta hisdfhjkh",
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
        title="Featured Products & services"
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
          <label>Product Name</label>
          <h3
            style={{
              fontWeight: "lighter",
              color: "#979797",
              marginTop: "20px",
            }}
          >
            {data.location}
          </h3>
        </div>
        <div className="row d-flex justify-content-between">
          <div className="col-10">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6 col-sm-12">
                <div className="d-flex justify-content-start">
                  <label>Product Code:</label>

                  <label>12454</label>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6 col-sm-12 d-flex justify-content-end">
                <button
                  onClick={() => {
                    navigate("/my-products/details", {
                      state: { data: "row" },
                    });
                  }}
                  className="btn btn-solid btn-solid-primary table-btn "
                  style={{
                    width: "fit-content",
                  }}
                >
                  View product Info
                </button>
                <button
                  className="btn btn-solid btn-outline-primary table-btn"
                  style={{
                    marginLeft: "10px",
                    width: "fit-content",
                  }}
                >
                  View product Page
                </button>
              </div>
            </div>
            <hr className="hr-rule" />
          </div>
        </div>

        <div style={{ marginBottom: "50px" }}>
          <h2>Featured Details</h2>
        </div>
        <div style={{ marginBottom: "40px" }}>
          <label>Subscription Date</label>
          <p
            style={{
              fontWeight: "lighter",
              color: "#979797",
              marginTop: "10px",
            }}
          >
            24-05-22
          </p>
        </div>
        <div style={{ marginBottom: "40px" }}>
          <label>Featured Duration</label>
          <p
            style={{
              fontWeight: "lighter",
              color: "#979797",
              marginTop: "10px",
            }}
          >
            3 weeks
          </p>
        </div>
        <div style={{ marginBottom: "40px" }}>
          <label>Expiry Date:</label>
          <p
            style={{
              fontWeight: "lighter",
              color: "#979797",
              marginTop: "10px",
            }}
          >
            24-06-22
          </p>
        </div>
        <div className="row">
          <div className="col-12 col-md-3 col-lg-2 col-sm-6 mt-3 d-flex ">
            <button
              onClick={() => {
                navigate("/vendor-productshippingdetails/edit");
              }}
              className="btn btn-solid btn-outline-primary table-btn"
              style={{
                padding: "20px 20px",
                width: "fit-content",
              }}
            >
              Remove
            </button>
            <button
              onClick={() => {
                navigate("/vendor-productshippingdetails/edit");
              }}
              className="btn btn-solid btn-solid-primary table-btn"
              style={{
                marginLeft: "20px",
                padding: "20px 20px",
                width: "fit-content",
              }}
            >
              Extend
            </button>
          </div>
          {/* <div className="col-12 col-md-3 col-lg-2 col-sm-6 mt-3">
            <button
              onClick={() => {
                navigate("/vendor-productshippingdetails/edit");
              }}
              className="btn btn-solid btn-solid-primary table-btn"
              style={{
                padding: "20px 20px",
                width: "fit-content",
              }}
            >
              Extend
            </button>
          </div> */}
        </div>
      </Paper>
    </>
  );
}

export default ViewFeaturedDetail;
