import React, { useState } from "react";
import NavBar from "./NavBar";
import Popup from "../../../components/popUp/popUp";
import { TiTick } from "react-icons/ti";
import { Paper } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
const ServiceOrderDetails = ({ setSidebar, sidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);
  const [popupOpen, setPopupOpen] = useState(false);
  const [successfulPopup, setSuccessfulPopup] = useState(false);
  const [orderStatus, setOrderStatus] = useState("completed");
  return (
    <div>
      <Popup open={popupOpen} setOpen={setPopupOpen}>
        <div className="soi-update-status">
          <h3 className="mb-4">Update Status</h3>
          <div>
            <div className="soi-checkbox my-4">
              {orderStatus === "cancelled" ? (
                <input
                  type="radio"
                  id="cancelled"
                  name="order-status"
                  checked
                  onClick={() => setOrderStatus("cancelled")}
                />
              ) : (
                <input
                  type="radio"
                  id="cancelled"
                  name="order-status"
                  onClick={() => setOrderStatus("cancelled")}
                />
              )}
              <label
                for="cancelled"
                onClick={() => setOrderStatus("cancelled")}
              >
                Cancelled
              </label>
            </div>
            <div className="soi-checkbox my-4">
              {orderStatus === "pending" ? (
                <input
                  type="radio"
                  id="pending"
                  name="order-status"
                  checked
                  onClick={() => setOrderStatus("pending")}
                />
              ) : (
                <input
                  type="radio"
                  id="pending"
                  name="order-status"
                  onClick={() => setOrderStatus("pending")}
                />
              )}
              <label for="pending" onClick={() => setOrderStatus("pending")}>
                Pending
              </label>
            </div>
            <div className="soi-checkbox my-4">
              {orderStatus === "completed" ? (
                <input
                  type="radio"
                  id="completed"
                  name="order-status"
                  checked
                  onClick={() => setOrderStatus("completed")}
                />
              ) : (
                <input
                  type="radio"
                  id="completed"
                  name="order-status"
                  onClick={() => setOrderStatus("completed")}
                />
              )}
              <label
                for="completed"
                onClick={() => setOrderStatus("completed")}
              >
                Completed
              </label>
            </div>
          </div>
          <div className="soi-popup-btns d-flex">
            <button
              className="btn btn-solid btn-solid-cancel btn-outline-primary soi-popup-btn"
              onClick={() => setPopupOpen(false)}
            >
              Cancel
            </button>
            <button
              className="btn btn-solid btn-solid-primary  soi-popup-btn"
              onClick={() => {
                setPopupOpen(false);
                setSuccessfulPopup(true);
              }}
            >
              Update
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
            Status Updated <br />
            Successfully
          </h3>
          <button
            className="btn btn-solid btn-solid-primary soi-success-btn"
            onClick={() => setSuccessfulPopup(false)}
          >
            Continue
          </button>
        </div>
      </Popup>
      <NavBar
        setSidebar={setSidebar}
        sidebar={sidebar}
        title="Service Order Details"
      />
      <Paper
        sx={{
          backgroundColor: "#1e1e1e",
          color: "white",
          padding: "30px",
          borderRadius: "20px",
          height: "85vh",
          boxShadow: "0rem 0rem 0px 0.1rem #00000047",
        }}
        elevation={20}
        className={"my-5"}
      >
        <div>
          <div className="soi-top ">
            <div className="row">
              <div className="col-4 col-sm-12 col-md-4 col-lg-4 soi-orderNo">
                <h2>Order No. 21388</h2>
              </div>
              <div className="col-2 col-sm-12 col-md-2 col-lg-2 soi-orderNo"></div>
              <div className="col-6 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-end align-items-center">
                <button
                  className="btn btn-solid btn-solid-secondary soi-btn mx-5"
                  style={{ width: "fit-content" }}
                >
                  Send Message to Client
                </button>
                <button
                  className="btn btn-solid btn-solid-primary soi-btn "
                  onClick={() => setPopupOpen(true)}
                  style={{ width: "fit-content" }}
                >
                  Update Status
                </button>
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
          </div>
          <div className="soi-main bg-black-pad">
            <div className="soi-main-sd">
              <p>Service Date: 02-22-2022</p>
            </div>
            <hr className="hr-rule" />
            <div className="soi-main-services">
              <h3 className="mb-4">Services</h3>
              <div className="d-flex justify-content-between my-5">
                <p>Landscaping</p>
                <p>$67</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Tree Services</p>
                <p>$80</p>
              </div>
            </div>
            <hr className="hr-rule" />
            <div className="soi-row d-flex justify-content-between">
              <h4>Card Used : </h4>
              <p>**** **** **** 1234</p>
            </div>
            <hr className="hr-rule" />
            <div className="soi-row d-flex justify-content-between">
              <h4>Total Amount Paid </h4>
              <p>$153.40</p>
            </div>
            <hr className="hr-rule" />
            <div className="soi-row d-flex justify-content-between">
              <h4>Service Status </h4>
              <p className="vtext-primary ">Booked</p>
            </div>
            <hr className="hr-rule" />
            <div className="soi-main-services">
              <h3 className="mb-4">Service Location</h3>
            </div>
            <hr className="hr-rule" />
            <div className="soi-row d-flex justify-content-between">
              <h4>Address </h4>
              <p>7033 Hand Crescent Suite 382</p>
            </div>
            <hr className="hr-rule" />
            <div className="soi-row d-flex justify-content-between">
              <h4>City </h4>
              <p>Ziemmblahblah</p>
            </div>
            <hr className="hr-rule" />
            <div className="soi-row d-flex justify-content-between">
              <h4>State</h4>
              <p>Bilzen</p>
            </div>
            <hr className="hr-rule" />
            <div className="soi-row d-flex justify-content-between">
              <h4>Contact Number</h4>
              <p>+1234-6546-456</p>
            </div>
            <hr className="hr-rule" />
            <div className="soi-row d-flex justify-content-between">
              <h4>Zip Code</h4>
              <p>1234</p>
            </div>
            <hr className="hr-rule" />
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default ServiceOrderDetails;
