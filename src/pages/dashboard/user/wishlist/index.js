import React, { useState, useEffect } from 'react'
import UserSideMenu from '../../../../components/userSideMenu'
import { FaCartPlus, FaPlus, FaRegTrashAlt } from 'react-icons/fa'
import Images from '../../../../constants/images'
import { useDispatch, useSelector } from 'react-redux'
import {
  GET_USER_WISHLIST,
  WISHLIST_REMOVE_ITEM,
} from '../../../../redux/actions/wishlist'
import { addtoCart, alreadyInCart } from '../../../../redux/actions/cart'

export default function MyWishlist() {
  const dispatch = useDispatch()
  const userData = JSON.parse(localStorage.getItem('userData'))

  const [itemRemoved, setitemRemoved] = useState(false)
  const { wishlist, removeItemWishList } = useSelector(
    (state) => state.WishlistReducers,
  )
  const handleRemoveFromWishlist = (id) => {
    dispatch(
      WISHLIST_REMOVE_ITEM({ productId: id }, localStorage.getItem('token')),
    )
  }
  useEffect(() => {
    if (userData !== null) {
      dispatch(GET_USER_WISHLIST(localStorage.getItem('token')))
    }
  }, [removeItemWishList])

  return (
    <UserSideMenu>
      <div className=" wishist-wrapper">
        <div className="col-12" style={{ height: 'min-content' }}>
          <h2 className="fs-2 mb-3">My Wishlist</h2>
        </div>
        <div className="col-12 wishist-wrapper_inner-wrapper ">
          {wishlist.length != 0 ? (
            wishlist?.map((element, index) => {
              return (
                <div
                  className="row wishist-wrapper_inner-wrapper_item"
                  key={index}
                >
                  <div className="col-6 wishist-wrapper_inner-wrapper_item_inner-wrapper">
                    <img src={Images.Pictures.product[0]} alt="product"></img>
                    <div className="wishist-wrapper_inner-wrapper_item_inner-wrapper_item-title-desc-wrapper">
                      <h5 className="fs-5">{element?.product?.name}</h5>
                      <h6 className="fs-6">{element?.product?.description}</h6>
                    </div>
                  </div>

                  <div className="col-3">
                    <h3
                      className="fs-3"
                      style={{ fontWeight: 'bold', textAlign: 'center' }}
                    >
                      {element?.product?.price} USD
                    </h3>
                  </div>
                  <div className="col-3">
                    <div className="row">
                      <div
                        className="col-12"
                        style={{
                          display: 'flex',
                          justifyContent: 'flex-end',
                          marginBottom: '.5rem',
                        }}
                      >
                        <button
                          className="btn"
                          style={{ backgroundColor: '#CAEAE3' }}
                          onClick={() => {
                            let cart_item = element
                            element.quantity = 1
                            element.type = 'Product'
                            dispatch(addtoCart(cart_item))
                          }}
                        >
                          <FaPlus></FaPlus>
                          <FaCartPlus></FaCartPlus>
                        </button>
                      </div>
                      <div
                        className="col-12"
                        style={{
                          display: 'flex',
                          justifyContent: 'flex-end',
                        }}
                      >
                        {' '}
                        <button
                          onClick={() => {
                            handleRemoveFromWishlist(element.product?._id)
                            setitemRemoved(true)
                          }}
                          className="btn btn-solid-light"
                        >
                          <FaRegTrashAlt></FaRegTrashAlt>&nbsp;Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          ) : (
            <p className=""> No Items In Wishlist!</p>
          )}
        </div>
      </div>
    </UserSideMenu>
  )
}
