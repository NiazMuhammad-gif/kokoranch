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
import Images from "../../constants/images";
import { LOGOUT } from "../../redux/actions/authentication";
export default function TraderSideBar({ children }) {
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
    <div className="trader-board-wrapper">
      <div id="trader-board-container">
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

          <h4 className="fs-4 title-color">(Trader Dashboard)</h4>
          <h4 className="fs-4">
            <NavLink to="/trader-profile" className="trader-link">
              <div>
                <FaRegUser />
                &nbsp; My Profile
              </div>
            </NavLink>
          </h4>
          <h4 className="fs-4">
            <NavLink to="/trader-trades" className="trader-link">
              <div>
                <FaTradeFederation />
                &nbsp; My Trades
              </div>
            </NavLink>
          </h4>
          <h4 className="fs-4">
            <NavLink to="/trader-trade-request" className="trader-link">
              <div>
                <FaRegFile />
                &nbsp; Trade Request(Comments)
              </div>
            </NavLink>
          </h4>
          <h4 className="fs-4">
            <NavLink to="/trader-inbox" className="trader-link">
              <div className="trader-inbox-link">
                <FaRegCommentAlt />
                &nbsp; inbox
                <span className="count">3</span>
              </div>
            </NavLink>
          </h4>

          <h4>
            <NavLink to="/trader-settings" className="trader-link">
              <div>
                <FaRegSun />
                &nbsp; Settings
              </div>
            </NavLink>
          </h4>
          <div style={{ marginTop: "7rem" }}>
            <h4 className="fs-4 text-bold">
              <Link
                to={"/"}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(LOGOUT(navigate));
                }}
              >
                <FaSignOutAlt />
                &nbsp;Logout
              </Link>
            </h4>
          </div>

          <h4 className="fs-4 ">
            Switch To <span className="title-color">Vendor</span>
          </h4>
          <h4 className="fs-4 ">
            Switch To <span className="title-color">Buyer</span>
          </h4>
        </aside>
        <main>{childrenWithProps}</main>
      </div>
    </div>
  );
}
