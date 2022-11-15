import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaBars, FaRegWindowClose } from 'react-icons/fa'
import { LOGOUT } from '../../redux/actions/authentication'
import { useDispatch, useSelector } from 'react-redux'

export default function UserSideMenu({ children }) {
  const [showSidebar, setShowSidebar] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // GETTING DATA FROM REDUX STORE
  const { user } = useSelector((state) => state.authReducer)
  return (
    <div className="container">
      <div className="user-side-menu-wrapper">
        <div
          className={`user-side-menu-wrapper_side-bar ${
            showSidebar ? 'side-bar-show' : null
          }`}
        >
          <FaRegWindowClose
            style={{ fontSize: '2rem', cursor: 'pointer', float: 'right' }}
            onClick={() => {
              setShowSidebar(false)
            }}
          />
          <div>
            <h3 className="fs-3">HELLO, {user.firstName}</h3>
            <h4 className="fs-4 title-color">(Buyer Dashboard)</h4>
          </div>
          <div>
            <h3 className="fs-3 title-color">Manage My Account</h3>
            <h4 className="fs-4">
              <NavLink to="/my-profile" className="user-link">
                My Profile
              </NavLink>
            </h4>
            <h4 className="fs-4">
              <NavLink to="/address-book" className="user-link">
                Address Book
              </NavLink>
            </h4>
            <h4 className="fs-4">
              <NavLink to="/inbox" className="user-link">
                Inbox
              </NavLink>
            </h4>
          </div>
          <div>
            <h3 className="fs-3  title-color">My Orders</h3>
            <h4 className="fs-4">
              <NavLink to="/orders-info" className="user-link">
                Orders Information
              </NavLink>
            </h4>
            <h4 className="fs-4">
              <NavLink to="/trade-request" className="user-link">
                Trade Request
              </NavLink>
            </h4>
            <h4 className="fs-4">
              <NavLink to="/cart" className="user-link">
                My Cart
              </NavLink>
            </h4>
          </div>
          <div>
            <h3 className="fs-3 title-color">My Wishlist</h3>
            <h4 className="fs-4">
              <NavLink to="/wishlist" className="user-link">
                Wishlist
              </NavLink>
            </h4>
          </div>
          <div>
            <h4 className="fs-4 text-bold">
              <Link
                to={'/'}
                onClick={(e) => {
                  e.preventDefault()
                  dispatch(LOGOUT(navigate))
                }}
              >
                Log Out
              </Link>
            </h4>
          </div>
          <div>
            <h4 className="fs-4 title-color">Switch To Vendor</h4>
            <h4 className="fs-4 title-color">Switch To Trader</h4>
          </div>
        </div>
        <FaBars
          className="bars-icon"
          style={{ fontSize: '2rem', cursor: 'pointer' }}
          onClick={() => {
            setShowSidebar(!showSidebar)
          }}
        />
        {children}
      </div>
    </div>
  )
}
