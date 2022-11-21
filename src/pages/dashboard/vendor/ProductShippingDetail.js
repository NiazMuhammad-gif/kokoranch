import { Paper } from "@mui/material";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as PlusIcon } from "../../../assets/images/icons/icons8-plus.svg";
import NavBar from "./NavBar";

function ProductShippingDetail({ sidebar, setSidebar }) {
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
        title="Product Shipping Details"
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
        <div style={{ marginBottom: "50px" }}>
          <h4>Item location</h4>
          <p
            style={{
              fontWeight: "lighter",
              color: "#979797",
              marginTop: "20px",
            }}
          >
            {data.location}
          </p>
        </div>
        <div style={{ marginBottom: "50px" }}>
          <h4>Shipping to</h4>
          <p
            style={{
              fontWeight: "lighter",
              color: "#979797",
              marginTop: "20px",
            }}
          >
            {data.shippingTo}
          </p>
        </div>
        <div style={{ marginBottom: "50px" }}>
          <h4>Delivery</h4>
          <p
            style={{
              fontWeight: "lighter",
              color: "#979797",
              marginTop: "20px",
            }}
          >
            {data.Delivery}
          </p>
        </div>
        <div style={{ marginBottom: "50px" }}>
          <h4>Return</h4>
          <p
            style={{
              fontWeight: "lighter",
              color: "#979797",
              marginTop: "20px",
            }}
          >
            {data.Return}
          </p>
        </div>
        <div style={{ marginBottom: "50px" }}>
          <h4>shipping And Handling</h4>
          <p
            style={{
              fontWeight: "lighter",
              color: "#979797",
              marginTop: "20px",
            }}
          >
            {data.ShippingAndHandling}
          </p>
        </div>
        <NavLink to="/vendor-productshippingdetails/edit">
          <button
            className="btn btn-solid btn-solid-primary table-btn"
            style={{
              marginRight: "20px",
              paddingLeft: "20px",
              paddingRight: "20PX",
              width: "120px",
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
            Edit
          </button>
        </NavLink>
      </Paper>
    </>
  );
}

export default ProductShippingDetail;
