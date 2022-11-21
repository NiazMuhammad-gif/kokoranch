import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FaRegUser,
  FaTradeFederation,
  FaRegFile,
  FaRegCommentAlt,
  FaRegSun,
  FaSignOutAlt,
} from "react-icons/fa";
import { ReactComponent as WineBottle } from "../../../assets/images/icons/wine-bottle.svg";
import { ReactComponent as AgriService } from "../../../assets/images/icons/agri-service.svg";
import { ReactComponent as FeatherList } from "../../../assets/images/icons/feather-list.svg";
import { ReactComponent as Inbox } from "../../../assets/images/icons/inbox.svg";
import { ReactComponent as Marijuana } from "../../../assets/images/icons/marijuana.svg";
import { ReactComponent as Medal } from "../../../assets/images/icons/medal.svg";
import { ReactComponent as Ratings } from "../../../assets/images/icons/ratings.svg";
import { ReactComponent as Settings } from "../../../assets/images/icons/settings.svg";
import { ReactComponent as Shipping } from "../../../assets/images/icons/shipping.svg";
import { ReactComponent as Logout } from "../../../assets/images/icons/logout.svg";
import Images from "../../../constants/images";
import { LOGOUT } from "../../../redux/actions/authentication";

export default function VendorSideBar({ children }) {
  const [sidebar, setSidebar] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const childrenWithProps = React.Children.map(children, (child) => {
    // Checking isValidElement is the safe way and avoids a typescript
    // error too.
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { setSidebar, sidebar });
    }
    return child;
  });
  return (
    <div className="vendor-board-wrapper">
      <div id="vendor-board-container">
        <aside className={`side-navbar ${sidebar && "active-nav"}`}>
          <div className="logo-div">
            <img
              src={Images.Pictures.logo}
              style={{ margin: "0 auto", width: "7rem" }}
              alt="sunset"
            />
            <span style={{ fontSize: "2rem", marginLeft: "1rem" }}>
              KOKO Ranch
            </span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <h4 className="fs-4 title-color">Vendor Dashboard</h4>
            <div>
              <h4 className="fs-5 text-bold">
                {/* <Link
                to={"/"}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(LOGOUT(navigate));
                }} */}
                {/* > */}
                <FaSignOutAlt />
                {/* <Logout width={15} fill="white" /> */}
                &nbsp;Logout
                {/* </Link> */}
              </h4>
            </div>
          </div>
          <h4 className="fs-5">
            <NavLink to="/" className="vendor-link" end>
              <div className="vendor-inbox-link">
                <FaRegUser />
                &nbsp; My Profile
              </div>
            </NavLink>
          </h4>
          <h4 className="fs-5">
            <NavLink to="/my-products" className="vendor-link">
              <div className="vendor-inbox-link">
                <WineBottle width={15} />
                &nbsp; My Products
              </div>
            </NavLink>
          </h4>
          <h4 className="fs-5">
            <NavLink to="/agricultural-services" className="vendor-link">
              <div className="vendor-inbox-link">
                <AgriService width={15} />
                &nbsp; My Agricultural Services
              </div>
            </NavLink>
          </h4>
          <h4 className="fs-5">
            <NavLink
              to="/vendor-productshippingdetails"
              className="vendor-link"
            >
              <div className="vendor-inbox-link">
                {/* <img src={shipping} style={{ width: "8%", marginRight: "5px" }} /> */}
                <Shipping width={15} />
                &nbsp; Product Shipping Details
              </div>
            </NavLink>
          </h4>
          <h4 className="fs-5">
            <NavLink to="/featured-products-services" className="vendor-link">
              <div className="vendor-inbox-link">
                <Medal width={15} />
                &nbsp; Featured Products And Services
              </div>
            </NavLink>
          </h4>
          <h4 className="fs-5">
            <NavLink to="/vendor-productorders" className="vendor-link">
              <div className="vendor-inbox-link">
                <FeatherList width={15} />
                &nbsp; Product Orders
              </div>
            </NavLink>
          </h4>
          <h4 className="fs-5">
            <NavLink to="/vendor-serviceorders" className="vendor-link">
              <div className="vendor-inbox-link">
                <FeatherList width={15} />
                &nbsp; Service Orders
              </div>
            </NavLink>
          </h4>
          <h4 className="fs-5">
            {/* <NavLink to="/vendor-profile" className="vendor-link"> */}
            <div className="vendor-inbox-link">
              {/* <img src={inbox} style={{ width: "8%", marginRight: "5px" }} /> */}
              <Inbox width={15} />
              &nbsp; Inbox
              <span className="count">3</span>
            </div>
            {/* </NavLink> */}
          </h4>
          <h4 className="fs-5">
            {/* <NavLink to="/vendor-profile" className="vendor-link"> */}
            <div className="vendor-inbox-link">
              {/* <img src={ratings} style={{ width: "8%", marginRight: "5px" }} /> */}
              <Ratings width={15} />
              &nbsp; Ratings & Reviews
              <span className="count">2</span>
            </div>
            {/* </NavLink> */}
          </h4>
          <h4 className="fs-5">
            {/* <NavLink to="/vendor-profile" className="vendor-link"> */}
            <div className="vendor-inbox-link">
              {/* <img
                src={marijuana}
                style={{ width: "8%", marginRight: "5px" }}
              /> */}
              <Marijuana width={15} />
              &nbsp; Medical Marijuana
            </div>
            {/* </NavLink> */}
          </h4>
          <h4 className="fs-5">
            {/* <NavLink to="/vendor-profile" className="vendor-link"> */}
            <div className="vendor-inbox-link">
              {/* <img
                src={settings}
                style={{
                  width: "8%",
                  marginRight: "5px",
                  fill: "red",
                }}
              /> */}
              <Settings width={15} />
              &nbsp; Settings
            </div>
            {/* </NavLink> */}
          </h4>

          {/* <h4>
            <NavLink to="/vendor-settings" className="vendor-link">
              <div>
                <FaRegSun />
                &nbsp; Settings
              </div>
            </NavLink>
          </h4> */}
          {/* <div style={{ marginTop: "4rem" }}>
            <h4 className="fs-5 text-bold"> */}
          {/* <Link
                to={"/"}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(LOGOUT(navigate));
                }} */}
          {/* > */}
          {/* <FaSignOutAlt />
              &nbsp;Logout
              {/* </Link> */}
          {/* </h4>
          </div> */}

          <h4 className="fs-5 ">
            Switch To <span className="title-color">Trader</span>
          </h4>
          {/* <h4 className="fs-5 ">
            Switch To <span className="title-color">Buyer</span>
          </h4> */}
        </aside>
        <main>{childrenWithProps}</main>
      </div>
    </div>
  );
}
