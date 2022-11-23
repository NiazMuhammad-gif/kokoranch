import React, { useState } from "react";
import NavBar from "./NavBar";
import InfoCards from "./Components/InfoCards";
import TableComponent from "./Components/Table";
import SearchBar from "./Components/SearchBar";
import { ReactComponent as FilterIcon } from "../../../assets/images/icons/filter-icon.svg";
import FilterProp from "./Components/FilterProp";
function Featured({ setSidebar, sidebar }) {
  const [showFilterProp, setShowFilterProp] = useState(false);
  const [tableHeadData, seTableHeadData] = useState([
    { id: "orderNo", label: "Order No" },
    { id: "userId", label: "User Id" },
    { id: "date", label: "Date" },
    { id: "amountPaid", label: "Amount Paid" },
    { id: "status", label: "Status" },
    { id: "action", label: "Action" },
  ]);

  const [tableRowData, setTableRowData] = useState([
    {
      orderNo: "01",
      date: "24-01-22",
      userId: "001",
      amountPaid: "$21.00",
      status: "Pending",
      action: "Action",
    },
    {
      orderNo: "01",
      date: "24-01-22",
      userId: "001",
      amountPaid: "$21.00",
      status: "Pending",
      action: "Action",
    },
    {
      orderNo: "01",
      date: "24-01-22",
      userId: "001",
      amountPaid: "$21.00",
      status: "Completed",
      action: "Action",
    },
    {
      orderNo: "01",
      date: "24-01-22",
      userId: "001",
      amountPaid: "$21.00",
      status: "Pending",
      action: "Action",
    },
    {
      orderNo: "01",
      date: "24-01-22",
      userId: "001",
      amountPaid: "$21.00",
      status: "Booked",
      action: "Action",
    },
  ]);
  const [button, setButton] = useState({
    all: true,
    product: false,
    service: false,
  });
  return (
    <>
      <NavBar
        setSidebar={setSidebar}
        sidebar={sidebar}
        title="Product Orders"
      />

      <article className="vendor-profile-main" style={{ position: "relative" }}>
        <div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <FilterIcon
              width={20}
              onClick={() => setShowFilterProp(!showFilterProp)}
            />
          </div>
          <div style={{ marginTop: "20px", color: "white" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "95%",
              }}
            >
              <h3 style={{ marginLeft: "20px" }}>Featured List</h3>
              <div className="featured-button-container">
                <button
                  onClick={() => {
                    setButton({
                      all: true,
                      product: false,
                      service: false,
                    });
                  }}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: button?.all ? "#14A384" : "white",
                    fontWeight: button?.all && "bold",
                  }}
                >
                  <p>All</p>
                </button>
                <div className="d-flex featured-vertical-line">
                  <div className="vr"></div>
                </div>
                <button
                  onClick={() => {
                    setButton({
                      all: false,
                      product: true,
                      service: false,
                    });
                  }}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: button?.product ? "#14A384" : "white",
                    fontWeight: button?.product && "bold",
                  }}
                >
                  <p>Products</p>
                </button>
                <div className="d-flex featured-vertical-line">
                  <div className="vr"></div>
                </div>
                <button
                  onClick={() => {
                    setButton({
                      all: false,
                      product: false,
                      service: true,
                    });
                  }}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: button?.service ? "#14A384" : "white",
                    fontWeight: button?.service && "bold",
                  }}
                >
                  <p>Services</p>
                </button>
              </div>
            </div>
            <div
              style={{
                width: "95%",
                margin: "20px",
              }}
            >
              <TableComponent
                tHeadData={tableHeadData}
                tRowData={tableRowData}
                edit={"featured"}
                activeCard={"total"}
              />
            </div>
          </div>
        </div>
        <div
          className="so-top-filtericon"
          onClick={() => setShowFilterProp(!showFilterProp)}
        ></div>
        {showFilterProp && <FilterProp featured />}
      </article>
    </>
  );
}

export default Featured;
