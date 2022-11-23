import React, { useState } from "react";
import {
  FaRegUser,
  FaTradeFederation,
  FaRegFile,
  FaRegCommentAlt,
  FaRegSun,
  FaSignOutAlt,
} from "react-icons/fa";
import { ReactComponent as PlusIcon } from "../../../assets/images/icons/icons8-plus.svg";
import NavBar from "./NavBar";
import InfoCards from "./Components/InfoCards";
import Table from "./Components/Table";
import FormControlAuth from "./Components/formControl";
import TableComponent from "./Components/Table";
import SearchBar from "./Components/SearchBar";

function VendorServiceOrders({ setSidebar, sidebar }) {
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

  const [filterCard, setFilterCard] = useState([
    { topText: "Total Orders", bottomText: tableRowData.length },
    {
      topText: "Pending Orders",
      bottomText: tableRowData.filter((item) => item.status == "Pending")
        .length,
    },
    {
      topText: "Orders On The Way",
      bottomText: tableRowData.filter((item) => item.status == "Booked").length,
    },
    {
      topText: "Delevered Orders",
      bottomText: tableRowData.filter((item) => item.status == "Completed")
        .length,
    },
    {
      topText: "Cancelled Orders",
      bottomText: tableRowData.filter((item) => item.status == "Cancelled")
        .length,
    },
    {
      topText: "Total Amount",
      bottomText: "$400k",
    },
  ]);

  const [activeCard, setActiveCard] = useState(filterCard[0].topText);
  return (
    <>
      <NavBar
        setSidebar={setSidebar}
        sidebar={sidebar}
        title="Service Orders"
      />

      <article className="vendor-profile-main">
        <div className="vendor-profile-main_form">
          <InfoCards
            data={filterCard}
            activeCard={activeCard}
            setActiveCard={setActiveCard}
            featured1={true}
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "95%",
                }}
              >
                <h4 style={{ marginLeft: "20px" }}>Total Orders</h4>
                <div style={{ width: "50%" }}>
                  <SearchBar />
                </div>
              </div>
              {/* <div
                style={{
                  width: "95%",
                  margin: "20px",
                }}
              > */}
              <TableComponent
                tHeadData={tableHeadData}
                tRowData={tableRowData}
                edit={"serviceOrder"}
                activeCard={"total"}
              />
              {/* </div> */}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default VendorServiceOrders;
