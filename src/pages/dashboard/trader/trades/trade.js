import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaCamera, FaExclamation } from "react-icons/fa";
import Images from "../../../../constants/images";
import { useSelector, useDispatch } from "react-redux";
import {
  UPDATE_TRADE_TRADE_ACTION,
  CREATE_TRADE_ACTION,
  DELETE_TRADE_ACTION,
} from "../../../../redux/actions/trades";
import Popup from "../../../../components/popUp/popUp";
import { TiTick } from "react-icons/ti";
export default function Trade({
  editAble,
  setEditAble,
  setView,
  recordForEdit,
  singleTrade,
  setRecordForEdit,
  newRecord,
}) {
  const [popupOpen, setPopupOpen] = useState(false);
  const [successfulPopup, setSuccessfulPopup] = useState(false);
  const dispatch = useDispatch();
  const { editTradeInfo, updateTrade, deleteTrade, newTrade } = useSelector(
    (state) => state.TradesReducers
  );
  // const { _id } = JSON.parse(localStorage.getItem('userData'))
  const [trade, setTrade] = useState({
    inSearchOf: "",
    toExchangeWith: "",
    details: "",
    images: [],
    traderId: "",
    tradeType: "",
  });

  const handleChange = (e) => {
    setTrade({
      ...trade,
      [e.target.name]: e.target.value,
    });
  };
  const [selectedImages, setselectedImages] = useState([]);

  const handleEditTradeInfo = (e) => {
    console.log("first");
    if (editAble && newRecord == false) {
      setPopupOpen(true);
      // dispatch(
      //   UPDATE_TRADE_TRADE_ACTION(
      //     editTradeInfo._id,
      //     localStorage.getItem("token"),
      //     trade
      //   )
      // );
    } else if (newRecord) {
      console.log("first");
      setPopupOpen(true);
      // dispatch(CREATE_TRADE_ACTION(trade, localStorage.getItem("token")));
    }
  };
  // useEffect(() => {
  //   if (recordForEdit && setEditAble) {
  //     setTrade(recordForEdit);
  //   }
  // }, []);
  // useEffect(() => {
  //   if (editTradeInfo && newRecord == false) {
  //     setTrade({ ...editTradeInfo });
  //     setselectedImages(editTradeInfo.images);
  //   } else if (newRecord) {
  //     // setTrade({ ...trade, traderId: _id });
  //   }
  // }, [editTradeInfo]);

  // useEffect(() => {
  //   if (updateTrade || newTrade || deleteTrade) {
  //     setTimeout(() => {
  //       window.location.reload(false);
  //     }, 3000);
  //   }
  // }, [updateTrade, newTrade, deleteTrade]);

  // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
      <Popup open={popupOpen} setOpen={setPopupOpen}>
        <div className="soi-update-status">
          <div className="successful-popup">
            <div className="sp-icon">
              <FaExclamation size={30} fill="black" />
            </div>
            {editAble && newRecord == false ? (
              <h3>
                Are You Sure You Want
                <br />
                To Update Trade Details?
              </h3>
            ) : (
              <h3>
                Are You Sure You
                <br />
                Want To Upload?
              </h3>
            )}
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
                setPopupOpen(false);
                setSuccessfulPopup(true);
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
          {editAble && newRecord == false ? (
            <h3>
              Details Updated <br />
              Successfully
            </h3>
          ) : (
            <h3>
              Updated <br />
              Successfully
            </h3>
          )}
          <button
            className="btn btn-solid btn-solid-primary soi-success-btn"
            onClick={() => setSuccessfulPopup(false)}
          >
            Continue
          </button>
        </div>
      </Popup>
      <div className="single-trade">
        {!editAble && (
          <div className="single-trade_top">
            <button className="btn btn-solid btn-solid-primary">
              View Trade Post
            </button>
            <div
              className="back-button"
              onClick={() => {
                setEditAble(false);
                setView(null);
                setRecordForEdit(null);
              }}
            >
              <FaAngleLeft />
              &nbsp;Back
            </div>
          </div>
        )}
        <div className="single-trade_bottom">
          <div className="row px-5 my-3 d-flex flex-column">
            <div className="col-12 col-sm-10 col-md-10 col-lg-5 d-flex flex-column justify-content-center">
              <label htmlFor="firstName" className="form-label">
                In Search Of:
              </label>
              {editAble ? (
                <input
                  type="text"
                  className="form-control"
                  id="profileName"
                  name="inSearchOf"
                  value={trade?.inSearchOf}
                  onChange={handleChange}
                  placeholder="In Search Of"
                  required
                />
              ) : (
                <p className="preview">{trade?.inSearchOf}</p>
              )}
            </div>
            <div className="col-12 col-sm-10 col-md-10 col-lg-5 d-flex flex-column justify-content-center">
              <label htmlFor="firstName" className="form-label">
                Trade Type:
              </label>
              {editAble ? (
                <input
                  type="text"
                  className="form-control"
                  id="profileName"
                  name="tradeType"
                  value={trade?.tradeType}
                  onChange={handleChange}
                  placeholder="Trade Type"
                  required
                />
              ) : (
                <p className="preview">{trade?.tradeType}</p>
              )}
            </div>
            <div className="col-12  col-sm-10 col-md-10 col-lg-5 d-flex flex-column justify-content-center">
              <label htmlFor="firstName" className="form-label">
                To Exchange With:
              </label>
              {editAble ? (
                <input
                  type="text"
                  className="form-control"
                  id="profileName"
                  name="toExchangeWith"
                  value={trade?.toExchangeWith}
                  onChange={handleChange}
                  placeholder="To Exchange With"
                  required
                />
              ) : (
                <p className="preview">{trade?.toExchangeWith}</p>
              )}
            </div>
            <div className="col-12  col-sm-10 col-md-10 col-lg-5 d-flex flex-column justify-content-center">
              <label htmlFor="firstName" className="form-label">
                Add Description:
              </label>
              {editAble ? (
                <textarea
                  rows="4"
                  type="text"
                  className="form-control"
                  id="profileName"
                  name="details"
                  value={trade?.details}
                  onChange={handleChange}
                  placeholder="Enter Details"
                  required
                />
              ) : (
                <p className="preview">{trade?.details}</p>
              )}
            </div>
            <div className="col-12  col-sm-10 col-md-10 col-lg-7 d-flex flex-column justify-content-center">
              <label htmlFor="firstName" className="form-label">
                Upload Photos:
              </label>
              {editAble ? (
                <div className="uploaded-images-wrapper">
                  <div className="uploaded-image-container">
                    <input
                      type="file"
                      onChange={(e) => {
                        // console.log(e.target.files)
                        // return
                        let reader = new FileReader();
                        reader.onload = (e) => {
                          setselectedImages([
                            ...selectedImages,
                            e.target.result,
                          ]);
                        };
                        reader.readAsDataURL(e.target.files[0]);

                        setTrade({
                          ...trade,
                          images: [...trade?.images, e.target.files[0]],
                        });
                      }}
                    />
                    <FaCamera />
                    <p>Add Photos</p>
                  </div>
                  {selectedImages?.map((c, index) => {
                    return (
                      <img
                        key={index}
                        src={c}
                        style={{ width: "10rem", height: "10rem" }}
                        alt="product"
                      ></img>
                    );
                  })}
                </div>
              ) : newRecord == true && editAble == false ? (
                <div className="uploaded-images-wrapper">
                  {selectedImages.images.map((c, index) => {
                    return (
                      <img
                        key={index}
                        src={c}
                        style={{ width: "10rem", height: "10rem" }}
                        alt="product"
                      ></img>
                    );
                  })}
                </div>
              ) : (
                <div className="uploaded-images-wrapper">
                  {trade?.images.map((c, index) => {
                    return (
                      <img
                        key={index}
                        src={c}
                        style={{ width: "10rem", height: "10rem" }}
                        alt="product"
                      ></img>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="button-wrapper">
          {editAble ? (
            <>
              <button
                onClick={() => handleEditTradeInfo()}
                className="btn btn-solid btn-solid-primary"
              >
                {editAble && !newRecord ? "Save" : "Upload"}
              </button>
              <button
                className="btn btn-outline-primary"
                onClick={() => {
                  setView(false);
                  setEditAble(false);
                  setRecordForEdit(null);
                }}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                className="btn btn-solid btn-solid-primary"
                onClick={() => {
                  setEditAble(true);
                  setRecordForEdit(singleTrade);
                }}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  dispatch(
                    DELETE_TRADE_ACTION(
                      // editTradeInfo?._id,
                      localStorage.getItem("token")
                    )
                  );
                }}
                className="btn btn-outline-primary"
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
