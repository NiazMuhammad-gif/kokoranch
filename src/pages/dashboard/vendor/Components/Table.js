import React from "react";
import { vendorServiceOrders } from "../../../../DummyData/vendorData";

const Table = ({ tHeadData, activeCard }) => {
  console.log("activeCard", activeCard);
  return (
    <div>
      <div className="ven-tab-container">
        <table className="ven-tab">
          <thead>
            <tr>
              {tHeadData.map((th) => (
                <th>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* {vendorServiceOrders.map((order) => {
              return (
                <tr>
                  <td>{order.orderNo}</td>
                  <td>{order.userId}</td>
                  <td>{order.dateCreated}</td>
                  <td>{order.amountPaid}</td>
                  <td
                    className={`${
                      order.status.toLowerCase() === "pending" && "vso-pending"
                    } ${
                      order.status.toLowerCase() === "booked" && "vso-booked"
                    } ${
                      order.status.toLowerCase() === "completed" &&
                      "vso-completed"
                    }`}
                  >
                    {order.status}
                  </td>
                  <td>
                    <button className="btn btn-solid btn-solid-primary  table-btn">
                      View
                    </button>
                  </td>
                </tr>
              );
            })} */}
            {vendorServiceOrders
              .filter((order) =>
                activeCard === "total"
                  ? order
                  : // : activeCard === order.status.toLowerCase()
                    order.status.toLowerCase() === activeCard
              )
              .map((order) => {
                return (
                  <tr>
                    <td>{order.orderNo}</td>
                    <td>{order.userId}</td>
                    <td>{order.dateCreated}</td>
                    <td>{order.amountPaid}</td>
                    <td
                      className={`${
                        order.status.toLowerCase() === "pending" &&
                        "vso-pending"
                      } ${
                        order.status.toLowerCase() === "booked" && "vso-booked"
                      } ${
                        order.status.toLowerCase() === "completed" &&
                        "vso-completed"
                      }
                      ${
                        order.status.toLowerCase() === "cancelled" &&
                        "vso-cancelled"
                      }`}
                    >
                      {order.status}
                    </td>
                    <td>
                      <button className="btn btn-solid btn-solid-primary table-btn">
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
  );
};

export default Table;
