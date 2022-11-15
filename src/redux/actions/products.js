import { GET, POST } from '../../apis/requests'
import ActionTypes from '../constant'
import { toast } from 'react-toastify'

const GET_All_PRODUCTS = (condition, token) => {
  return (dispatch) => {
    if (condition) {
      return POST('/products/get', token, condition)
        .then((response) => {
          if (response.success === false) {
            toast.error(response.message)
          } else {
            dispatch({
              type: ActionTypes.GET_PRODUCTS,
              payload: response,
            })
          }
        })
        .catch((error) => {
          toast.error(error.message)
        })
    } else {
      return POST('/products/get', token, {})
        .then((response) => {
          if (response.success === false) {
            toast.error(response.message)
          } else {
            dispatch({
              type: ActionTypes.GET_PRODUCTS,
              payload: response,
            })
          }
        })
        .catch((error) => {
          toast.error(error.message)
        })
    }
  }
}
const GET_SEARCH_PRODUCTS_ACTION = (condition, token) => {
  return (dispatch) => {
    if (condition) {
      return POST('/products/get-products-search', token, condition)
        .then((response) => {
          // debugger
          if (response.success === false) {
            toast.error(response.message)
          } else {
            dispatch({
              type: ActionTypes.GET_PRODUCTS_SEARCH,
              payload: response,
            })
          }
        })
        .catch((error) => {
          toast.error(error.message)
        })
    } else {
      return POST('/products/get', token, {})
        .then((response) => {
          if (response.success === false) {
            toast.error(response.message)
          } else {
            dispatch({
              type: ActionTypes.GET_PRODUCTS,
              payload: response,
            })
          }
        })
        .catch((error) => {
          toast.error(error.message)
        })
    }
  }
}
const GET_PRODUCT_INFO = (productId, token) => {
  return (dispatch) => {
    return GET('/products/get-product/', token, productId)
      .then((response) => {
        if (response.success === false) {
          toast.error(response.message)
        } else {
          dispatch({
            type: ActionTypes.GET_PRODUCT,
            payload: response,
          })
        }
      })
      .catch((error) => {
        toast.error(error.message)
      })
  }
}

export { GET_All_PRODUCTS, GET_PRODUCT_INFO, GET_SEARCH_PRODUCTS_ACTION }
