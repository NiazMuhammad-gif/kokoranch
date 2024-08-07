import { Paper } from "@mui/material";
import React, { useState } from "react";
import { ReactComponent as PlusIcon } from "../../../assets/images/icons/icons8-plus.svg";
import NavBar from "./NavBar";
import { useNavigate, useLocation } from "react-router-dom";
import Popup from "../../../components/popUp/popUp";
import { TiTick } from "react-icons/ti";
import { FaExclamation } from "react-icons/fa";

function EditServiceDetails({ sidebar, setSidebar }) {
  let navigate = useNavigate();
  const location = useLocation();
  const [popupOpen, setPopupOpen] = useState(false);
  const [successfulPopup, setSuccessfulPopup] = useState(false);
  const [orderStatus, setOrderStatus] = useState("completed");
  const [data, setData] = useState({
    location: "karta hisdfhjkh",
    shippingTo: "shdfkjhs",
    Delivery: "skjdhfkjsdhfkjhdsjkhf",
    Return: "skjdhfkjsdhf",
    ShippingAndHandling: "sjdhfjksh",
  });
  return (
    <>
      <Popup open={successfulPopup} setOpen={setSuccessfulPopup}>
        <div className="successful-popup">
          <div className="sp-icon">
            <TiTick size={30} fill="black" />
          </div>
          <h3>
            Service Details Updated
            <br />
            Successfully
          </h3>
          <button
            className="btn btn-solid btn-solid-primary soi-success-btn"
            onClick={() => setSuccessfulPopup(false)}
          >
            Close
          </button>
        </div>
      </Popup>
      <NavBar
        setSidebar={setSidebar}
        sidebar={sidebar}
        title={
          location?.state?.addProduct ? "Add Service" : "Edit Service Details"
        }
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

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div className="row">
            <div className="col-12 col-md-6 col-lg-5 mb-5 col-sm-12 col-xs-12">
              <label htmlFor="firstName" className="form-label">
                Service Name
              </label>

              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                placeholder="service name"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-3 col-md-3 col-lg-3 mb-5 col-sm-12 col-xs-12">
              <label htmlFor="firstName" className="form-label">
                Service Category
              </label>

              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                placeholder="Globally"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-5 mb-5 col-sm-12 col-xs-12">
              <label htmlFor="firstName" className="form-label">
                Price
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
            <div className="col-12 col-md-9 col-lg-9 mb-5 col-sm-12 col-xs-12">
              <label htmlFor="firstName" className="form-label">
                Pricing Details
              </label>
              <textarea
                rows={4}
                id="firstName"
                name="firstName"
                placeholder="30 days return, Buyers will pay return shipping fee "
                required
                className="form-control"
              ></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-9 col-lg-9 mb-5 col-sm-12 col-xs-12">
              <label htmlFor="firstName" className="form-label">
                Service Description
              </label>
              <textarea
                rows={4}
                id="firstName"
                name="firstName"
                placeholder="30 days return, Buyers will pay return shipping fee "
                required
                className="form-control"
              ></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-9 col-lg-9 mb-5 col-sm-12 col-xs-12">
              <label htmlFor="firstName" className="form-label">
                Service Area
              </label>
              <textarea
                rows={4}
                id="firstName"
                name="firstName"
                placeholder="30 days return, Buyers will pay return shipping fee "
                required
                className="form-control"
              ></textarea>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6 col-lg-5 mb-5 col-sm-12 col-xs-12">
              <label htmlFor="firstName" className="form-label">
                Upload Service Image
              </label>

              <input
                type="number"
                className="form-control"
                id="firstName"
                name="firstName"
                placeholder="Free Shipping"
                required
              />
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "row" }}>
            <button
              onClick={() => {
                setSuccessfulPopup(true);
              }}
              className="btn btn-solid btn-solid-primary-rounded table-btn"
              style={{
                marginRight: "20px",
                paddingLeft: "20px",
                paddingRight: "20PX",
                width: "200px",
                height: "40px",
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
              Update
            </button>
            <button
              onClick={() => {
                navigate(-1);
              }}
              className="btn btn-solid btn-outline-primary-rounded table-btn"
              style={{
                marginRight: "20px",
                paddingLeft: "20px",
                paddingRight: "20PX",
                width: "200px",
                height: "40px",
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
              Cancel
            </button>
          </div>
        </div>
      </Paper>
    </>
  );
}

export default EditServiceDetails;
