import { POST, GET } from '../../apis/requests'
import ActionTypes from '../constant'
import { toast } from 'react-toastify'

const GET_All_SERVICES = (condition, token) => {
  return (dispatch) => {
    if (condition) {
      return POST('/services/get', token, condition)
        .then((response) => {
          if (response.success === false) {
            toast.error(response.message)
          } else {
            dispatch({
              type: ActionTypes.GET_SERVICES,
              payload: response,
            })
          }
        })
        .catch((error) => {
          toast.error(error.message)
        })
    } else {
      return POST('/services/get', token, {})
        .then((response) => {
          if (response.success === false) {
            toast.error(response.message)
          } else {
            dispatch({
              type: ActionTypes.GET_SERVICES,
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
const GET_SERVICE = (serviceId, token) => {
  return (dispatch) => {
    return GET('/services/get-service/', token, serviceId)
      .then((response) => {
        if (response.success === false) {
          toast.error(response.message)
        } else {
          dispatch({
            type: ActionTypes.GET_SERVICE,
            payload: response,
          })
        }
      })
      .catch((error) => {
        toast.error(error.message)
      })
  }
}

export { GET_All_SERVICES, GET_SERVICE }
