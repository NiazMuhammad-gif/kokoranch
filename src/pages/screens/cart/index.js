import React, { useState, useEffect } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import ProductCard from '../../../components/productCard/index'
import Images from '../../../constants/images'
import { Link, useNavigate } from 'react-router-dom'
import { TabContainer } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import {
  getCartTotalAction,
  getDeliveryCharges,
  getCartItemsTotal,
} from '../../../redux/actions/cart'
import CartItem from '../../../components/cartItem/CartItem'
export default function Cart() {
  const {
    cartData,
    cartTotal,
    deliveryTotalCharges,
    cartItemsTotal,
  } = useSelector((state) => state.CartReducers)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [activeTab] = useState('all')
  const [data, setData] = useState([])
  useEffect(() => {
    switch (activeTab) {
      case 'products':
        setData(products)
        break
      case 'services':
        setData(services)
        break
      default:
        setData(products)
    }
  }, [activeTab]) // eslint-disable-line react-hooks/exhaustive-deps
  const [services] = useState([
    {
      service_id: 3033,
      Name: 'Koko Ranch service',
      type: 'service',
      Amount: 'USD.$22',
      qty: 1,
    },
    {
      service_id: 3033,
      Name: 'Koko Ranch service',
      type: 'service',
      Amount: 'USD.$22',
      qty: 1,
    },
    {
      service_id: 3033,
      Name: 'Koko Ranch service',
      type: 'service',
      Amount: 'USD.$22',
      qty: 1,
    },
    {
      service_id: 3033,
      Name: 'Koko Ranch service',
      type: 'service',
      Amount: 'USD.$22',
      qty: 1,
    },
  ])
  const [products] = useState([
    {
      product_id: 3033,
      Name: 'Koko Ranch Product',
      type: 'product',
      Amount: 'USD.$22',
      qty: 1,
    },
    {
      product_id: 3033,
      Name: 'Koko Ranch Product',
      type: 'product',
      Amount: 'USD.$22',
      qty: 1,
    },
    {
      product_id: 3033,
      Name: 'Koko Ranch Product',
      type: 'product',
      Amount: 'USD.$22',
      qty: 1,
    },
    {
      product_id: 3033,
      Name: 'Koko Ranch Product',
      type: 'product',
      Amount: 'USD.$22',
      qty: 1,
    },
  ])
  useEffect(() => {
    dispatch(getCartTotalAction())
    dispatch(getDeliveryCharges())
    dispatch(getCartItemsTotal())
  }, [cartData])

  return (
    <>
      <TabContainer id="left-tabs-example" defaultActiveKey="second">
        <div
          className="container orderInfo mt-5"
          style={{
            textAlign: 'left',
            position: 'relative',
          }}
        >
          <img
            src={Images.Pictures.brownLeftLeaf}
            style={{
              position: 'absolute',
              top: '0',
              right: '-9rem',
              width: '60rem',
              transform: 'rotate(180deg)',
              zIndex: '-1',
            }}
            alt="leaf"
          />
          <div className="row">
            <div className="col-6">
              <h2 className=" fs-2 mb-4">My Cart</h2>
            </div>
            <div className="col-3">
              <h3
                className="fs-3 mb-4"
                onClick={() => navigate('/my-profile')}
                style={{
                  textAlign: 'right',
                  width: 'fit-content',
                  float: 'right',
                  cursor: 'pointer',
                }}
              >
                <FaArrowLeft style={{ color: '#14a384' }}></FaArrowLeft>{' '}
                &nbsp;Back To Dashboard
              </h3>
            </div>
          </div>

          <div className="row">
            {/* <div className="col-sm-12 col-md-6 col-lg-6 ">
          <Nav variant="pills" className="tabs-head" style={{ float: "right" }}>
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
        </div> */}
            <div className="col-md-7 col-sm-12">
              {cartData?.map((item, index) => {
                return (
                  <CartItem props={item} />
                  // <div className="cart-item" key={index}>
                  //   <img
                  //     className="cart-item_image"
                  //     width="80"
                  //     src={item.images[0]}
                  //     alt="Products"
                  //   />
                  //   <div className="cart-item_content">
                  //     <h3 className="fs-3 "> {item.name}</h3>
                  //     <div className="cart-item_content_wrapper">
                  //       <h5 className="fs-5 cart-item_content_wrapper_price">
                  //         USD{item.price}
                  //       </h5>{' '}
                  //       <button
                  //         onClick={() => {
                  //           dispatch(removeFromCart(item._id))
                  //         }}
                  //         className="btn btn-solid-light cart-item_content_wrapper_button"
                  //       >
                  //         <FaTrash />
                  //         &nbsp;Remove
                  //       </button>
                  //     </div>
                  //     <div>
                  //       <div className="cart-item_content_qty-wrapper">
                  //         <button className="icon-btn btn-solid btn-solid-primary-rounded px-4">
                  //           -
                  //         </button>
                  //         <span className="cart-item_content_qty-wrapper_quantity-value">
                  //           {item.quantity}
                  //         </span>
                  //         <button className="icon-btn btn-solid btn-solid-primary-rounded px-4">
                  //           +
                  //         </button>
                  //       </div>
                  //     </div>
                  //   </div>
                  // </div>
                )
              })}
            </div>
            <div className="col-md-5 col-sm-12 p-2 mt-sm-4">
              <div className="cart-summery-wrapper">
                <h3 className="fs-3 ">Summary</h3>
                <div className="cart-summery-wrapper_inner-wrapper">
                  <p>
                    Price{' '}
                    {cartData.length != 0
                      ? '( ' + cartData.length + ' ) Item'
                      : ''}
                  </p>
                  <h5 className="fs-5">usd.{cartItemsTotal}</h5>
                </div>
                <div className="cart-summery-wrapper_inner-wrapper">
                  <p>Delivery Charges</p>
                  <h5 className="fs-5">usd{deliveryTotalCharges}</h5>
                </div>
                <div className="cart-summery-wrapper_inner-wrapper">
                  <p>Total Price</p>
                  <h5 className="fs-5">usd {cartTotal}</h5>
                </div>
                <Link
                  to="/checkout"
                  className="btn btn-solid btn-solid-primary-rounded px-5 cart-summery-wrapper_button"
                >
                  Proceed
                </Link>
              </div>
            </div>
          </div>
        </div>
        <section
          className="product-carosual-section"
          style={{
            position: 'relative',
          }}
        >
          <img
            src={Images.Pictures.brownLeftLeaf}
            style={{
              position: 'absolute',
              top: '5rem',
              left: '5rem',
              width: '60rem',
              // transform: "rotate(270deg)",
              zIndex: '-1',
            }}
            alt="leaf"
          ></img>
          <div className="container">
            <div className="row">
              <div className="col-12 text-left">
                <h2 className="fs-2">
                  Similar <span className="border-title">Items</span>
                </h2>
              </div>
            </div>
            <div className="d-flex justify-content-center justify-content-sm-left justify-content-md-left justify-content-lg-left flex-wrap">
              {[1, 2, 3, 4, 5].map((element, index) => {
                return (
                  <div className="me-4" key={index}>
                    <ProductCard image={Images.Pictures.product[0]} />
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </TabContainer>
    </>
  )
}
