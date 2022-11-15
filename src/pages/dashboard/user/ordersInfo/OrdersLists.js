import React, { useEffect, useState } from "react";
import { TabContainer, Nav, NavItem, NavLink } from "react-bootstrap";
export default function OrdersLists({ setShowOrder, setType }) {
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    switch (activeTab) {
      case "all":
        setData(order);
        break;
      case "products":
        setData(
          order.filter(
            (item) => item.type.toLowerCase() === "product".toLowerCase()
          )
        );
        break;
      case "services":
        setData(order.filter((item) => item.type.toLowerCase() === "service"));
        break;
      default:
        setData(order);
    }
  }, [activeTab]); // eslint-disable-line react-hooks/exhaustive-deps

  const [data, setData] = useState([]);
  const [order] = useState([
    {
      orderNo: 3033,
      date: "February 17, 2022",
      products: [],
      services: [],
      type: "product",
      Amount: "$147.00",
      status: "Order Placed",
    },
    {
      orderNo: 3033,
      date: "February 17, 2022",
      type: "product",
      Amount: "$147.00",
      status: "Order Placed",
    },
    {
      orderNo: 3033,
      date: "February 17, 2022",
      type: "product",
      Amount: "$147.00",
      status: "Order Placed",
    },
    {
      orderNo: 3033,
      date: "February 17, 2022",
      type: "service",
      Amount: "$147.00",
      status: "Booked",
    },
    {
      orderNo: 3033,
      date: "February 17, 2022",
      type: "service",
      Amount: "$147.00",
      status: "Booked",
    },
    {
      orderNo: 3033,
      date: "February 17, 2022",
      type: "service",
      Amount: "$147.00",
      status: "Booked",
    },
    {
      orderNo: 3033,
      date: "February 17, 2022",
      type: "service",
      Amount: "$147.00",
      status: "Booked",
    },
    {
      orderNo: 3033,
      date: "February 17, 2022",
      type: "service",
      Amount: "$147.00",
      status: "Booked",
    },
  ]);

  return (
    <TabContainer id="left-tabs-example" defaultActiveKey="first">
      <div className="row orderInfo">
        <div className="col-sm-12 col-md-6 col-lg-6 ">
          <h2 className="fs-2 mb-5">Orders Information</h2>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 ">
          <Nav variant="pills" className="tabs-head" style={{ float: "right" }}>
            <NavItem>
              <NavLink eventKey="first" onClick={() => setActiveTab("all")}>
                ALL
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                eventKey="second"
                onClick={() => setActiveTab("products")}
              >
                Products
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                eventKey="Third"
                onClick={() => setActiveTab("services")}
              >
                Services
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <div className="col-12">
          <div className="table-content table-container">
            <table className="table table-container__table table-container__table--break-md">
              <thead>
                <tr>
                  <th
                    className="li-product-remove"
                    style={{ textAlign: "center" }}
                  >
                    Order No.
                  </th>
                  <th
                    className="li-product-thumbnail"
                    style={{ textAlign: "center" }}
                  >
                    Date
                  </th>
                  <th
                    className="cart-product-name"
                    style={{ textAlign: "center" }}
                  >
                    Category
                  </th>
                  <th
                    className="li-product-price"
                    style={{ textAlign: "center" }}
                  >
                    Amount Paid
                  </th>
                  <th
                    className="li-product-quantity"
                    style={{ textAlign: "center" }}
                  >
                    Status
                  </th>
                  <th
                    className="li-product-subtotal"
                    style={{ textAlign: "center" }}
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((order, index) => {
                  return (
                    <tr Key={index}>
                      <td
                        data-heading="Order No."
                        style={{ textAlign: "center" }}
                      >
                        {order.orderNo}
                      </td>
                      <td data-heading="Date" style={{ textAlign: "center" }}>
                        {order.date}
                      </td>
                      <td
                        data-heading="Category"
                        style={{ textAlign: "center" }}
                      >
                        {order.type}
                      </td>
                      <td
                        data-heading="Amount Paid"
                        style={{ textAlign: "center" }}
                      >
                        {order.Amount}
                      </td>
                      <td
                        data-heading="Status"
                        className={`${
                          order.status === "Booked" ? "success" : "warning"
                        }`}
                        style={{ textAlign: "center" }}
                      >
                        {order.status}
                      </td>
                      <td data-heading="Status" style={{ textAlign: "center" }}>
                        <button
                          className="btn-outline-table"
                          onClick={() => {
                            setShowOrder(true);
                            setType(order.type);
                          }}
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </TabContainer>
  );
}
