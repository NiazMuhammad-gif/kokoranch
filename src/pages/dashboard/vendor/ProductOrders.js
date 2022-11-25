import React, { useState, useEffect } from "react";
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
import { Paper } from "@mui/material";
import FormControlAuth from "./Components/formControl";
import TableComponent from "./Components/Table";
import SearchBar from "./Components/SearchBar";

function VendorProductOrders({ setSidebar, sidebar }) {
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
      date: "2022-01-10",
      userId: "001",
      amountPaid: "21.00",
      status: "Pending",
      action: "Action",
    },
    {
      orderNo: "01",
      date: "2022-01-11",
      userId: "001",
      amountPaid: "31.00",
      status: "Pending",
      action: "Action",
    },
    {
      orderNo: "01",
      date: "2022-01-12",
      userId: "001",
      amountPaid: "41.00",
      status: "Completed",
      action: "Action",
    },
    {
      orderNo: "01",
      date: "2022-01-13",
      userId: "001",
      amountPaid: "51.00",
      status: "Pending",
      action: "Action",
    },
    {
      orderNo: "01",
      date: "2022-01-14",
      userId: "001",
      amountPaid: "61.00",
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

  const [rowData, setRowData] = useState(tableRowData);
  const [sortData, setSortData] = useState("");

  useEffect(() => {
    let temp = [];
    if (activeCard == "Total Orders") {
      temp = tableRowData;
      console.log("all");
    } else if (activeCard == "Pending Orders") {
      temp = tableRowData.filter((item) => item.status == "Pending");
    } else if (activeCard == "Orders On The Way") {
      temp = tableRowData.filter((item) => item.status == "Booked");
    } else if (activeCard == "Delevered Orders") {
      temp = tableRowData.filter((item) => item.status == "Completed");
    } else if (activeCard == "Cancelled Orders") {
      temp = tableRowData.filter((item) => item.status == "Cancelled");
    }
    setRowData(temp);
  }, [activeCard]);
  useEffect(() => {
    if (sortData) {
      let temp = [];
      if (sortData == "asc") {
        temp = rowData.sort((a, b) => {
          return Number(new Date(a.date)) - Number(new Date(b.date));
        });
      } else if (sortData == "dec") {
        temp = rowData.sort((a, b) => {
          return Number(new Date(b.date)) - Number(new Date(a.date));
        });
      } else if (sortData == "low") {
        temp = rowData.sort((a, b) => {
          return Number(a.amountPaid) - Number(b.amountPaid);
        });
      } else if (sortData == "high") {
        temp = rowData.sort((a, b) => {
          return Number(b.amountPaid) - Number(a.amountPaid);
        });
      }

      setRowData(temp);
    }
  }, [sortData]);
  return (
    <>
      <NavBar
        setSidebar={setSidebar}
        sidebar={sidebar}
        title="Product Orders"
      />

      <article className="vendor-profile-main">
        <div className="vendor-profile-main_form">
          <InfoCards
            data={filterCard}
            activeCard={activeCard}
            setActiveCard={setActiveCard}
            sortData={sortData}
            setSortData={setSortData}
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
          <div className="col-12 col-md-12">
            <div style={{ marginTop: "20px", color: "white" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "95%",
                  height: "100%",
                }}
              >
                <h4 style={{ marginLeft: "20px" }}>Total Orders</h4>
                <div style={{ width: "50%" }}>
                  <SearchBar />
                </div>
              </div>
              <TableComponent
                tHeadData={tableHeadData}
                tRowData={rowData}
                edit={"productOrderDetails"}
                activeCard={"total"}
              />
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default VendorProductOrders;
