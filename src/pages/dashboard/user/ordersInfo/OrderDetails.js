import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { GET } from "../../../../apis/requests";

export default function OrderDetails(props) {
  const [order, setOrder] = useState({}); //eslint-disable-line

  useEffect(() => {
    GET(`/orders`, props.order);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div
      className="row orderDetails-wrapper "
      style={{ height: "min-content" }}
    >
      <div className="row">
        <div className="col-6">
          <h2 className="fs-2 mb-5">Order Details</h2>
        </div>
        <div className="col-6">
          <h3
            className="fs-3 mb-5"
            style={{
              textAlign: "right",
              width: "fit-content",
              float: "right",
              cursor: "pointer",
            }}
            onClick={() => props.setShowOrder(false)}
          >
            <FaArrowLeft color="#14a384"></FaArrowLeft>&nbsp;Back
          </h3>
        </div>
      </div>
      {props.type === "product" ? (
        <div className="col-12 orderDetails-wrapper_inner-wrapper">
          <div className="row">
            <div className="col-6 ">
              <h3 className="title-color">Order No. {order.order_id}</h3>
            </div>
            <div className="col-6  ">
              <h3 className="title-color" style={{ textAlign: "right" }}>
                Order Date: {order.createdAt}
              </h3>
            </div>
            <div className="col-12">
              <div className="row orderDetails-wrapper_inner-wrapper_product-wrapper">
                <div className="col-6">
                  <h3 className="title-color">Products</h3>
                </div>
                <div className="col-3">
                  <h3 className="title-color" style={{ textAlign: "center" }}>
                    Qty
                  </h3>
                </div>
                <div className="col-3"></div>
                {order.products &&
                  order.products.map((product, index) => {
                    return (
                      <div key={product._id + " - " + index}>
                        <div className="col-6">
                          <h5 className="h5">{product.name}</h5>
                        </div>
                        <div className="col-3">
                          <h5 className="h5" style={{ textAlign: "center" }}>
                            2
                          </h5>
                        </div>
                        <div className="col-3">
                          <h5
                            className="h5"
                            style={{
                              textAlign: "right",
                              paddingRight: "1.5rem",
                            }}
                          >
                            $67
                          </h5>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="row">
              <div className="col-6 ">
                <h5 className="fs-5">Shipping Charges:</h5>
              </div>
              <div className="col-6 ">
                <h5 className="fs-5" style={{ textAlign: "right" }}>
                  $5.40
                </h5>
              </div>
            </div>
            <div className="row">
              <div className="col-6 ">
                <h5 className="fs-5">Card Used:</h5>
              </div>
              <div className="col-6 ">
                <h5 className="fs-5" style={{ textAlign: "right" }}>
                  **** **** **** 1234
                </h5>
              </div>
            </div>
            <div className="row">
              <div className="col-6 ">
                <h5 className="fs-5">Total Amount Paid</h5>
              </div>
              <div className="col-6 ">
                <h4
                  className="fs-4"
                  style={{ textAlign: "right", fontWeight: "bold" }}
                >
                  $153.40
                </h4>
              </div>
            </div>

            <div className="row">
              <div className="col-6 ">
                <h5 className="fs-5">Order Status</h5>
              </div>
              <div className="col-6 ">
                <h5 className="fs-5 process" style={{ textAlign: "right" }}>
                  On the way
                </h5>
              </div>
            </div>
            <div className="col-12 ">
              <h3 className="fs-3 title-color">Shipping Details</h3>
            </div>
            <div className="row">
              <div className="col-6 ">
                <h5 className="fs-5">Street</h5>
              </div>
              <div className="col-6 ">
                <h5 className="fs-5" style={{ textAlign: "right" }}>
                  {order?.orderAddress || "Not Available"}
                </h5>
              </div>
            </div>
            <div className="row">
              <div className="col-6 ">
                <h5 className="fs-5">City</h5>
              </div>
              <div className="col-6 ">
                <h5 className="fs-5" style={{ textAlign: "right" }}>
                  {order?.user?.city || "Not Available"}
                </h5>
              </div>
            </div>
            <div className="row">
              <div className="col-6 ">
                <h5 className="fs-5">State</h5>
              </div>
              <div className="col-6 ">
                <h5 className="fs-5" style={{ textAlign: "right" }}>
                  {order?.user?.state || "Not Available"}
                </h5>
              </div>
            </div>
            <div className="row">
              <div className="col-6 ">
                <h5 className="fs-5">Zip Code</h5>
              </div>
              <div className="col-6 ">
                <h5 className="fs-5" style={{ textAlign: "right" }}>
                  {order?.user?.zipCode || "Not Available"}
                </h5>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="col-12 orderDetails-wrapper_inner-wrapper">
          <div className="row">
            <div className="col-6 ">
              <h3 className="title-color">Order No. {order?.order_id}</h3>
            </div>
            <div className="col-6  ">
              <h3 className="title-color" style={{ textAlign: "right" }}>
                Order Date: {order?.createdAt}
              </h3>
            </div>
            <div className="col-12">
              <div className="row orderDetails-wrapper_inner-wrapper_product-wrapper">
                <div className="col-12">
                  <h3 className="title-color">Services</h3>
                </div>
                {order.services &&
                  order.services.map((service, index) => {
                    return (
                      <div key={service._id + " - " + index}>
                        <div className="col-6">
                          <h5 className="h5">service.name</h5>
                        </div>

                        <div className="col-6">
                          <h5 className="h5" style={{ textAlign: "right" }}>
                            ${service.cost}
                          </h5>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

            <div className="row">
              <div className="col-6 ">
                <h5 className="fs-5">Card Used:</h5>
              </div>
              <div className="col-6 ">
                <h5 className="fs-5" style={{ textAlign: "right" }}>
                  **** **** **** 1234
                </h5>
              </div>
            </div>
            <div className="row">
              <div className="col-6 ">
                <h5 className="fs-5">Total Amount Paid</h5>
              </div>
              <div className="col-6 ">
                <h4
                  className="fs-4"
                  style={{ textAlign: "right", fontWeight: "bold" }}
                >
                  $153.40
                </h4>
              </div>
            </div>

            <div className="row">
              <div className="col-6 ">
                <h5 className="fs-5">Order Status</h5>
              </div>
              <div className="col-6 ">
                <h5 className="fs-5 process" style={{ textAlign: "right" }}>
                  {order?.stats}
                </h5>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
