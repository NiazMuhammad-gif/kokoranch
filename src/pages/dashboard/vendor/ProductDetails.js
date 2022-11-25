import React, { useState } from "react";
import NavBar from "./NavBar";
import Popup from "../../../components/popUp/popUp";
import { TiTick } from "react-icons/ti";
import { FaExclamation } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
const ProductDetails = ({ setSidebar, sidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);
  const [popupOpen, setPopupOpen] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false);
  const [successfulPopup, setSuccessfulPopup] = useState(false);
  const [deleteSuccessfulPopup, setDeleteSuccessfulPopup] = useState(false);
  const [orderStatus, setOrderStatus] = useState("completed");
  return (
    <div>
      <Popup open={popupOpen} setOpen={setPopupOpen}>
        <div className="soi-update-status">
          <h3 className="mb-4">Update Status</h3>
          <div>
            <div className="soi-checkbox my-4">
              {orderStatus === "active" ? (
                <input
                  type="radio"
                  id="active"
                  name="order-status"
                  checked
                  onClick={() => setOrderStatus("active")}
                />
              ) : (
                <input
                  type="radio"
                  id="active"
                  name="order-status"
                  onClick={() => setOrderStatus("active")}
                />
              )}
              <label for="active" onClick={() => setOrderStatus("active")}>
                Active
              </label>
            </div>
            <div className="soi-checkbox my-4">
              {orderStatus === "inactive" ? (
                <input
                  type="radio"
                  id="inactive"
                  name="order-status"
                  checked
                  onClick={() => setOrderStatus("inactive")}
                />
              ) : (
                <input
                  type="radio"
                  id="inactive"
                  name="order-status"
                  onClick={() => setOrderStatus("inactive")}
                />
              )}
              <label for="inactive" onClick={() => setOrderStatus("inactive")}>
                Inactive
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
      <Popup open={deletePopup} setOpen={setDeletePopup}>
        <div className="soi-update-status">
          <div className="successful-popup">
            <div className="sp-icon">
              <FaExclamation size={30} fill="black" />
            </div>
            <h3>
              Are You Sure You Want To
              <br />
              Delete This Product?
            </h3>
          </div>
          <div className="soi-popup-btns d-flex">
            <button
              className="btn btn-solid btn-solid-cancel btn-outline-primary soi-popup-btn"
              onClick={() => {
                setDeletePopup(false);
              }}
            >
              Cancel
            </button>
            <button
              className="btn btn-solid btn-solid-primary  soi-popup-btn"
              onClick={() => {
                setDeletePopup(false);
                setDeleteSuccessfulPopup(true);
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
            Status Updated <br />
            Successfully
          </h3>

          <button
            className="btn btn-solid btn-solid-primary soi-success-btn"
            onClick={() => {
              setSuccessfulPopup(false);
            }}
          >
            Continue
          </button>
        </div>
      </Popup>
      <Popup open={deleteSuccessfulPopup} setOpen={setDeleteSuccessfulPopup}>
        <div className="successful-popup">
          <div className="sp-icon">
            <TiTick size={30} fill="black" />
          </div>

          <h3>
            Product Deleted <br />
            Successfully
          </h3>

          <button
            className="btn btn-solid btn-solid-primary soi-success-btn"
            onClick={() => {
              setDeleteSuccessfulPopup(false);
              navigate(-1);
            }}
          >
            Continue
          </button>
        </div>
      </Popup>
      <NavBar
        setSidebar={setSidebar}
        sidebar={sidebar}
        title="Product Details"
      />
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 mt-5 d-flex justify-content-end align-items-center">
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
      <div className="bg-black-pad my-5 " style={{ height: "82vh" }}>
        <div className="soi-top ">
          <div className="row">
            <div className="col-4 col-sm-12 col-md-4 col-lg-4 soi-orderNo">
              <h2>Product Code. 21385</h2>
            </div>
            <div className="col-2 col-sm-12 col-md-2 col-lg-2 soi-orderNo"></div>
            <div className="col-6 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-end align-items-center">
              <button
                onClick={() => {
                  navigate("/vendor-my-products/details/edit");
                }}
                className="btn btn-solid btn-solid-primary soi-btn mx-2"
                style={{ width: "fit-content" }}
              >
                Edit
              </button>
              <button
                className="btn btn-solid btn-solid-danger soi-btn mx-3"
                onClick={() => setDeletePopup(true)}
                style={{ width: "fit-content" }}
              >
                Delete
              </button>
              <button
                className="btn btn-solid btn-solid-process soi-btn "
                onClick={() => navigate("/vendor-make-it-featured")}
                style={{ width: "fit-content" }}
              >
                Make it Featured
              </button>
            </div>
          </div>
        </div>
        <div className="soi-main">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h5
                style={{
                  letterSpacing: "1px",
                  textAlign: "end",
                }}
              >
                Status:<span className="active-color">Active</span>
              </h5>
            </div>
            <button
              onClick={() => {
                setPopupOpen(true);
              }}
              className="btn btn-solid btn-solid-primary soi-btn mx-2"
              style={{ width: "fit-content" }}
            >
              Update Status
            </button>
          </div>
          <hr className="hr-rule" />
          <div className="row ">
            <div className="col-4 ">
              <h3 className="mb-4">Product Name:</h3>
            </div>
            <div className="col-8 d-flex justify-content-end">
              <h5 className="mb-4 ">Product Name</h5>
            </div>
            <hr className="hr-rule" />
            <div className="col-4 ">
              <h3 className="mb-4">Category:</h3>
            </div>
            <div className="col-8 d-flex justify-content-end">
              <h5 className="mb-4 ">Plant</h5>
            </div>
            <hr className="hr-rule" />
            <div className="col-4 ">
              <h3 className="mb-4">Sub Category:</h3>
            </div>
            <div className="col-8 d-flex justify-content-end">
              <h5 className="mb-4 ">flowering plant</h5>
            </div>
            <hr className="hr-rule" />
            <div className="col-4 ">
              <h3 className="mb-4">Sub Sub Category:</h3>
            </div>
            <div className="col-8 d-flex justify-content-end">
              <h5 className="mb-4 ">hoya</h5>
            </div>
            <hr className="hr-rule" />
            <div className="col-4 ">
              <h3 className="mb-4">Price:</h3>
            </div>
            <div className="col-8 d-flex justify-content-end">
              <h5 className="mb-4 ">$122</h5>
            </div>
            <hr className="hr-rule" />
            <div className="col-2 ">
              <h3 className="mb-4">Description 1:</h3>
            </div>
            <div className="col-10 d-flex justify-content-end">
              <p className="mb-4 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                porttitor lacinia ex, sit amet eleifend enim ultrices non.
                Praesent tincidunt leo enim, et eleifend metus efficitur id.
                Praesent mollis risus elit, nec sagittis sem cursus in. Cras in
                augue ut augue suscipit interdum. Ut gravida odio sagittis arcu
                dictum tincidunt nec eu mauris. Maecenas dolor augue, consequat
                ut risus lacinia, blandit congue velit. Vivamus sit amet viverra
                est. Nullam a semper est. Fusce ac arcu sodales, molestie lectus
                in, gravida dolor. Morbi ut augue faucibus, blandit dui quis,
                congue mauris. Etiam mattis urna sagittis, blandit est a,
                elementum purus. Sed in arcu sed est sollicitudin suscipit.
                Donec scelerisque mi blandit lacus condimentum interdum
              </p>
            </div>
            <hr className="hr-rule" />
            <div className="col-2 ">
              <h3 className="mb-4">Description 2:</h3>
            </div>
            <div className="col-10 d-flex justify-content-end">
              <p className="mb-4 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                porttitor lacinia ex, sit amet eleifend enim ultrices non.
                Praesent tincidunt leo enim, et eleifend metus efficitur id.
                Praesent mollis risus elit, nec sagittis sem cursus in. Cras in
                augue ut augue suscipit interdum. Ut gravida odio sagittis arcu
                dictum tincidunt nec eu mauris. Maecenas dolor augue, consequat
                ut risus lacinia, blandit congue velit. Vivamus sit amet viverra
                est. Nullam a semper est. Fusce ac arcu sodales, molestie lectus
                in, gravida dolor. Morbi ut augue faucibus, blandit dui quis,
                congue mauris. Etiam mattis urna sagittis, blandit est a,
                elementum purus. Sed in arcu sed est sollicitudin suscipit.
                Donec scelerisque mi blandit lacus condimentum interdum
              </p>
            </div>
            <hr className="hr-rule" />
            <div className="col-2 ">
              <h3 className="mb-4">Description 3:</h3>
            </div>
            <div className="col-10 d-flex justify-content-end">
              <p className="mb-4 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                porttitor lacinia ex, sit amet eleifend enim ultrices non.
                Praesent tincidunt leo enim, et eleifend metus efficitur id.
                Praesent mollis risus elit, nec sagittis sem cursus in. Cras in
                augue ut augue suscipit interdum. Ut gravida odio sagittis arcu
                dictum tincidunt nec eu mauris. Maecenas dolor augue, consequat
                ut risus lacinia, blandit congue velit. Vivamus sit amet viverra
                est. Nullam a semper est. Fusce ac arcu sodales, molestie lectus
                in, gravida dolor. Morbi ut augue faucibus, blandit dui quis,
                congue mauris. Etiam mattis urna sagittis, blandit est a,
                elementum purus. Sed in arcu sed est sollicitudin suscipit.
                Donec scelerisque mi blandit lacus condimentum interdum
              </p>
            </div>
            <hr className="hr-rule" />
            <div className="col-4 ">
              <h3 className="mb-4">In Stock:</h3>
            </div>
            <div className="col-8 d-flex justify-content-end">
              <h5 className="mb-4 active-color">$500</h5>
            </div>
            <hr className="hr-rule" />
            <div className="col-4 ">
              <h3 className="mb-4">Upload Image:</h3>
            </div>
            <div className="col-8 d-flex justify-content-end">
              <h5 className="mb-4 ">Qty</h5>
            </div>
            <hr className="hr-rule" />
            <div className="col-4 ">
              <h3 className="mb-4">New Location:</h3>
            </div>
            <div className="col-8 d-flex justify-content-end">
              <h5 className="mb-4 ">Wisconsin</h5>
            </div>
            <hr className="hr-rule" />

            <div className="col-4 ">
              <h3 className="mb-4">Shipping To:</h3>
            </div>
            <div className="col-8 d-flex justify-content-end">
              <h5 className="mb-4 ">Globally</h5>
            </div>
            <hr className="hr-rule" />
            <div className="col-4 ">
              <h3 className="mb-4">Delivery:</h3>
            </div>
            <div className="col-8 d-flex justify-content-end">
              <h5 className="mb-4 ">locally 123 sdjkhfkjh</h5>
            </div>
            <hr className="hr-rule" />
            <div className="col-4 ">
              <h3 className="mb-4">Return :</h3>
            </div>
            <div className="col-8 d-flex justify-content-end">
              <h5 className="mb-4 ">30 days return poslicy</h5>
            </div>
            <hr className="hr-rule" />
            <div className="col-4 ">
              <h3 className="mb-4">Shipping And Handling:</h3>
            </div>
            <div className="col-8 d-flex justify-content-end">
              <h5 className="mb-4 ">Free shipping</h5>
            </div>
            <hr className="hr-rule" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
