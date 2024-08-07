import React, { useState, useEffect } from "react";
import { ReactComponent as PlusIcon } from "../../../assets/images/icons/icons8-plus.svg";
import NavBar from "./NavBar";
import InfoCards from "./Components/InfoCards";
import FormControlAuth from "./Components/formControl";
import TableComponent from "./Components/Table";
import Popup from "../../../components/popUp/popUp";
import { TiTick } from "react-icons/ti";
import { FaExclamation } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

function VendorProducts({ setSidebar, sidebar }) {
  const navigate = useNavigate();
  const [tableHeadData, seTableHeadData] = useState([
    { id: "code", label: "code" },
    { id: "updateDate", label: "Update Date" },
    { id: "productName", label: "Product Name" },
    { id: "mainCategory", label: "Main Category" },
    { id: "price", label: "Price" },
    { id: "status", label: "Status" },
    { id: "action", label: "Action" },
  ]);

  const [tableRowData, setTableRowData] = useState([
    {
      code: "01",
      updateDate: "2022-01-22",
      productName: "product1",
      mainCategory: "Main Category",
      price: "21.00",
      status: "Active",
      action: "Action",
    },
    {
      code: "01",
      updateDate: "2022-01-23",
      productName: "product1",
      mainCategory: "Main Category",
      price: "31.00",
      status: "Active",
      action: "Action",
    },
    {
      code: "01",
      updateDate: "2022-01-24",
      productName: "product1",
      mainCategory: "Main Category",
      price: "41.00",
      status: "Featured",
      action: "Action",
    },
    {
      code: "01",
      updateDate: "2022-01-25",
      productName: "product1",
      mainCategory: "Main Category",
      price: "51.00",
      status: "Inactive",
      action: "Action",
    },
    {
      code: "01",
      updateDate: "2022-01-26",
      productName: "product1",
      mainCategory: "Main Category",
      price: "61.00",
      status: "Inactive",
      action: "Action",
    },
  ]);

  const [filterCard, setFilterCard] = useState([
    { topText: "All Products", bottomText: tableRowData.length },
    {
      topText: "Active Products",
      bottomText: tableRowData.filter((item) => item.status == "Active").length,
    },
    {
      topText: "Inactive Products",
      bottomText: tableRowData.filter((item) => item.status == "Inactive")
        .length,
    },
  ]);

  const [activeCard, setActiveCard] = useState(filterCard[0].topText);
  const [deletePopup, setDeletePopup] = useState(false);
  const [deleteSuccessfulPopup, setDeleteSuccessfulPopup] = useState(false);
  const [subCategory, setSubCategory] = useState("");
  const [subSubcategory, setSubSubCategory] = useState("");
  const [rowData, setRowData] = useState(tableRowData);
  const [sortData, setSortData] = useState("");
  const [category, setCategory] = useState("");
  const [options, setOptions] = useState([
    "All",
    "Landscaping",
    "lawn Mowing",
    "Tree Services",
    "tractor Repair",
  ]);

  useEffect(() => {
    let temp = [];
    if (activeCard == "All Products") {
      temp = tableRowData;
      console.log("all");
    } else if (activeCard == "Active Products") {
      console.log("active");
      temp = tableRowData.filter((item) => item.status == "Active");
    } else if (activeCard == "Inactive Products") {
      console.log("inactive");
      temp = tableRowData.filter((item) => item.status == "Inactive");
    }
    setRowData(temp);
  }, [activeCard]);
  useEffect(() => {
    if (sortData) {
      let temp = [];
      if (sortData == "asc") {
        temp = rowData.sort((a, b) => {
          return (
            Number(new Date(a.updateDate)) - Number(new Date(b.updateDate))
          );
        });
      } else if (sortData == "dec") {
        temp = rowData.sort((a, b) => {
          return (
            Number(new Date(b.updateDate)) - Number(new Date(a.updateDate))
          );
        });
      } else if (sortData == "low") {
        temp = rowData.sort((a, b) => {
          return Number(a.price) - Number(b.price);
        });
      } else if (sortData == "high") {
        temp = rowData.sort((a, b) => {
          return Number(b.price) - Number(a.price);
        });
      }

      setRowData(temp);
    }
  }, [sortData]);

  return (
    <>
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
              navigate("/vendor-my-products");
            }}
          >
            Continue
          </button>
        </div>
      </Popup>
      <NavBar setSidebar={setSidebar} sidebar={sidebar} title="My Products" />

      <article className="vendor-profile-main">
        <div className="vendor-profile-main_form">
          <InfoCards
            data={filterCard}
            activeCard={activeCard}
            setActiveCard={setActiveCard}
            sortData={sortData}
            setSortData={setSortData}
          />
        </div>
        <div
          className="row"
          style={{
            marginTop: "20px",
            border: "1px black",
            borderRadius: "10px",
            boxShadow: "0px 0px 30px -10px",
            width: "100%",
            color: "black",
          }}
        >
          <div className=" col-md-12">
            <div style={{ marginTop: "20px", color: "white" }}>
              <div style={{ marginLeft: "20px" }}>
                <h4>Filter By Your Categories</h4>
                <FormControlAuth setCategory={setCategory} />
                {category && (
                  <FormControlAuth
                    setSubCategory={setSubCategory}
                    isSubCategory
                  />
                )}
                {subCategory && (
                  <FormControlAuth
                    setSubSubCategory={setSubSubCategory}
                    isSubCategory
                  />
                )}
              </div>
              <div className="row">
                <div className="col-5">
                  <h4 style={{ marginLeft: "20px" }}>Product List:</h4>
                </div>
                <div className="col-7 d-flex justify-content-end">
                  <button
                    onClick={() => {
                      navigate("/vendor-my-products/add-product", {
                        state: { addProduct: true },
                      });
                    }}
                    className="btn btn-solid btn-solid-primary table-btn"
                    style={{
                      marginRight: "20px",
                      // paddingLeft: "20px",
                      // paddingRight: "20px",
                      width: "fit-content",
                    }}
                  >
                    <div
                      style={{
                        // backgroundColor: "white",
                        margin: "5px",
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                    >
                      <PlusIcon fill="white" width={17} />
                    </div>
                    Add Product
                  </button>
                </div>
              </div>
              <TableComponent
                tHeadData={tableHeadData}
                tRowData={rowData}
                edit={"products"}
                activeCard={"total"}
                open={deletePopup}
                setOpen={setDeletePopup}
              />
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default VendorProducts;
