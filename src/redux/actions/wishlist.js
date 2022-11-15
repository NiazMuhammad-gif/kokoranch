import { POST, GET } from "../../apis/requests";
import ActionTypes from "../constant";
import { toast } from "react-toastify";
const WISHLIST_ADD_ITEM = (id, token) => {
  return (dispatch) => {
    return POST("/wishlist/add-to-wishlist", token, id)
      .then((response) => {
        // debugger
        if (response.success === false) {
          toast.error(response.message);
        } else {
          dispatch({
            type: ActionTypes.ADD_TO_WISHLIST,
            payload: response,
          });

          toast.success("Item added to wishlist");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
};
const WISHLIST_REMOVE_ITEM = (id, token) => {
  return (dispatch) => {
    return POST("/wishlist/remove", token, id)
      .then((response) => {
        if (response.success === false) {
          toast.error(response.message);
        } else {
          // debugger
          dispatch({
            type: ActionTypes.REMOVE_FROM_WISHLIST,
            payload: response,
          });
          toast.success("Item Removed From wishlist");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
};

const GET_USER_WISHLIST = (token) => {
  return (dispatch) => {
    return GET("/wishlist/get", token, "")
      .then((response) => {
        if (response.success === false) {
          toast.error(response.message);
        } else {
          dispatch({
            type: ActionTypes.GET_WISHLIST,
            payload: response,
          });
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
};
export { WISHLIST_ADD_ITEM, GET_USER_WISHLIST, WISHLIST_REMOVE_ITEM };
