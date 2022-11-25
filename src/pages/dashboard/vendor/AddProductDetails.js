import { Paper } from "@mui/material";
import React, { useState } from "react";
import { ReactComponent as PlusIcon } from "../../../assets/images/icons/icons8-plus.svg";
import NavBar from "./NavBar";
import { useNavigate, useLocation } from "react-router-dom";
import Popup from "../../../components/popUp/popUp";
import { TiTick } from "react-icons/ti";
import { FaExclamation } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { ReactComponent as CameraInputIcon } from "../../../assets/images/icons/camera-input-icon.svg";
import { Grid } from "@mui/material";
import { toast } from "react-toastify";
function AddProductDetails({ sidebar, setSidebar }) {
  let navigate = useNavigate();
  const location = useLocation();
  const [popupOpen, setPopupOpen] = useState(false);
  const [successfulPopup, setSuccessfulPopup] = useState(false);
  const [orderStatus, setOrderStatus] = useState("completed");
  const [productImages, setProductImages] = useState([]);
  const [detailInputs, setDetailsInputs] = useState([1, 1]);
  const [data, setData] = useState({
    location: "karta hisdfhjkh",
    shippingTo: "shdfkjhs",
    Delivery: "skjdhfkjsdhfkjhdsjkhf",
    Return: "skjdhfkjsdhf",
    ShippingAndHandling: "sjdhfjksh",
  });
  const handleFile = (e) => {
    const files = [...e.target.files];
    let arr = [...productImages];
    if (files.length > 0) {
      files.map((item) => {
        arr.push(URL.createObjectURL(item));
      });
      if (arr.length > 12) {
        toast.error("only upload upto 12 images");
      } else {
        setProductImages([...arr]);
      }
    }
  };
  const handleProductDelete = (i) => {
    console.log("indexx>>>>>>>", i);
    let arr = [...productImages];
    arr.splice(i, 1);
    setProductImages(arr);
  };

  // Dynamic input
  const addDescriptionInput = () => {
    let arr = [...detailInputs];
    arr.push(1);
    setDetailsInputs(arr);
    toast.success("description added successfully");
  };

  return (
    <>
      <Popup open={successfulPopup} setOpen={setSuccessfulPopup}>
        <div className="successful-popup">
          <div className="sp-icon">
            <TiTick size={30} fill="black" />
          </div>
          <h3>
            Product Details Updated
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
      <NavBar setSidebar={setSidebar} sidebar={sidebar} title={"Add Product"} />
      <Paper
        sx={{
          backgroundColor: "#1e1e1e",
          color: "white",
          padding: "10px",
          boxShadow: "0rem 0rem 0px 0.1rem #00000047",
          height: "86vh",
          overflowY: "scroll",
        }}
        className="edit-product-container"
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
          className="productDetailEdit-main"
          //   style={{
          //     display: "flex",
          //     flexDirection: "column",
          //     justifyContent: "space-between",
          //     height:'100%',
          //     // backgroundColor:'aqua'
          //     overflowY:"scroll",
          //     overflowX:'none'
          //   }}
        >
          <div className="row">
            <div className="col-12 col-md-6 col-lg-5 mb-5 col-sm-12 col-xs-12">
              <label htmlFor="firstName" className="form-label">
                Product Name
              </label>

              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                placeholder="product name"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-3 col-md-3 col-lg-3 mb-5 col-sm-12 col-xs-12">
              <label htmlFor="firstName" className="form-label">
                Category 1
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
            <div className="col-3 col-md-3 col-lg-3 mb-5 col-sm-12 col-xs-12">
              <label htmlFor="firstName" className="form-label">
                Category 2
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
            <div className="col-3 col-md-3 col-lg-3 mb-5 col-sm-12 col-xs-12">
              <label htmlFor="firstName" className="form-label">
                Category 3
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  height: "60px",
                }}
              >
                <label htmlFor="firstName" className="form-label">
                  Description 1
                </label>
                <button
                  className="btn btn-solid btn-solid-primary soi-success-btn"
                  onClick={() => addDescriptionInput()}
                >
                  Add Another Description
                </button>
              </div>
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
          {detailInputs.map((item, i) => {
            return (
              <div className="row">
                <div className="col-12 col-md-9 col-lg-9 mb-5 col-sm-12 col-xs-12">
                  <label htmlFor="firstName" className="form-label">
                    Description {i + 2}
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
            );
          })}
          {/* <div className="row">
            <div className="col-12 col-md-9 col-lg-9 mb-5 col-sm-12 col-xs-12">
              <label htmlFor="firstName" className="form-label">
                Description 3
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
          </div> */}
          <div className="row">
            <div className="col-12 col-md-6 col-lg-5 mb-5 col-sm-12 col-xs-12">
              <label htmlFor="firstName" className="form-label">
                In Stock
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
          <div className="row">
            <div className="col-12 col-md-6 col-lg-5 mb-5 col-sm-12 col-xs-12">
              <label htmlFor="firstName" className="form-label">
                Upload Up to 12 Photos
              </label>
              <Grid container alignItems={"center"} spacing={2} gap="30px">
                <Grid item lg={3} md={4} sm={4} xs={12}>
                  <label
                    style={{
                      display: "inline-block",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        height: "100px",
                        width: "100px",
                        padding: "10px",
                        border: "0.5px solid #FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <input
                        type="file"
                        style={{ display: "none" }}
                        onChange={handleFile}
                        multiple
                      />
                      <CameraInputIcon
                        fill="#FFFFFF"
                        style={{ height: "30px", width: "30px" }}
                      />
                    </div>
                  </label>
                </Grid>
                {productImages.map((item, i) => {
                  return (
                    <Grid item lg={3} md={4} sm={4} xs={12}>
                      <div
                        style={{
                          height: "100px",
                          width: "100px",
                          position: "relative",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src={item}
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                          }}
                        />
                        <MdCancel
                          fill={"green"}
                          style={{
                            position: "absolute",
                            top: -8,
                            right: -8,
                            zIndex: 5,
                            cursor: "pointer",
                          }}
                          onClick={() => handleProductDelete(i)}
                        />
                      </div>
                    </Grid>
                  );
                })}
              </Grid>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-8 col-lg-8 mb-5 col-sm-12 col-xs-12 d-flex flex-row ">
              <label htmlFor="firstName" className="form-label">
                Enter Shipping Details:
              </label>
              <label style={{ display: "flex", alignItems: "center" }}>
                <input
                  style={{ marginLeft: "20px" }}
                  type="checkbox"
                  value="Male"
                  name="gender"
                />{" "}
                <span style={{ marginLeft: "10px" }}>
                  use saved shipping details
                </span>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-5 mb-5 col-sm-12 col-xs-12">
              <label htmlFor="firstName" className="form-label">
                Item location
              </label>

              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                placeholder="Wisconsin"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-5 mb-5 col-sm-12 col-xs-12">
              <label htmlFor="firstName" className="form-label">
                Shipping to
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
                Delivery
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
                Return
              </label>

              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                placeholder="30 days return, Buyers will pay return shipping fee "
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-5 mb-5 col-sm-12 col-xs-12">
              <label htmlFor="firstName" className="form-label">
                Shipping and Handling
              </label>

              <input
                type="text"
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

export default AddProductDetails;
