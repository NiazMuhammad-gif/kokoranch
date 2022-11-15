import { GET } from '../../apis/requests'
import ActionTypes from '../constant'
import { toast } from 'react-toastify'

const GET_All_CATEGORIES = (item, token) => {
  return (dispatch) => {
    return GET('/categories/get_all', null, '')
      .then((response) => {
        if (response.success === false) {
          toast.error(response.message)
        } else {
          dispatch({
            type: ActionTypes.GET_ALL_CATEGOEIES,
            payload: response,
          })
        }
      })
      .catch((error) => {
        toast.error(error.message)
      })
  }
}
const GET_All_CATEGORIES_SERVICES = (categoryType) => {
  return (dispatch) => {
    return GET('/categories/get/' + categoryType, null, '')
      .then((response) => {
        if (response.success === false) {
          toast.error(response.message)
        } else {
          dispatch({
            type: ActionTypes.GET_CATEGORIES_SERVICES,
            payload: response,
          })
        }
      })
      .catch((error) => {
        toast.error(error.message)
      })
  }
}

const GET_CATEGORIES_PRODUCTS = (categoryName, token) => {
  return (dispatch) => {
    return GET(`/categories/get-category-products/${categoryName}`, null, '')
      .then((response) => {
        if (response.success === false) {
          toast.error(response.message)
        } else {
          dispatch({
            type: ActionTypes.GET_CATEGORIES_PRODUCTS,
            payload: response,
          })
        }
      })
      .catch((error) => {
        toast.error(error.message)
      })
  }
}

export {
  GET_All_CATEGORIES,
  GET_CATEGORIES_PRODUCTS,
  GET_All_CATEGORIES_SERVICES,
}
