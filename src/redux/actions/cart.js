import ActionTypes from '../constant'
import { toast } from 'react-toastify'

export const addtoCart = (state) => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.ADD_TO_CART, payload: state })
    try {
    } catch (error) {
      console.log(error)
      dispatch({ type: ActionTypes.ERROR_CART, payload: error.response })
    }
  }
}

export const alreadyInCart = (id) => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.ALREADY_IN_CART, payload: id })
    try {
    } catch (error) {
      console.log(error)
      dispatch({ type: ActionTypes.ERROR_CART, payload: error.response })
    }
  }
}
export const removeFromCart = (id) => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.REMOVE_FROM_CART, payload: id })
  }
}

export const changeCartItemQuantity = (item_id, itemQuantity) => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.CHANGE_CART_ITEM_QUANTITY,
      payload: { item_id, itemQuantity },
    })
  }
}
export const getCartTotalAction = () => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.GET_CART_TOTAL,
    })
  }
}
export const getDeliveryCharges = () => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.DELIVERY_CHARGES,
    })
  }
}
export const getCartItemsTotal = () => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.CART_ITEMS_TOTAL,
    })
  }
}

export const getAllCartItems = () => {
  return async (dispatch) => {
    try {
      //   get All Cart Items
      const cartDataV = localStorage.getItem('cartData')

      dispatch({ type: ActionTypes.GET_CART, payload: cartDataV })
    } catch (error) {
      console.log(error)
      dispatch({ type: ActionTypes.ERROR_CART, payload: error.response })
    }
  }
}

export const emptyCart = () => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.EMPTY_CART,
      payload: { message: 'Cart is Empty!' },
    })
  }
}
