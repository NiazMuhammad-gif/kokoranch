import ActionTypes from '../constant/index'

const initial_state = {
  wishlist: [],
}

const WishlistReducers = (state = initial_state, action) => {
  switch (action.type) {
    case ActionTypes.GET_WISHLIST:
      return {
        ...state,
        wishlist: action.payload.wishlist,
      }
    case ActionTypes.ADD_TO_WISHLIST:
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload.data],
      }

    case ActionTypes.REMOVE_FROM_WISHLIST:
      return {
        ...state,
        removeItemWishList: action.payload,
        // wishlist: action.payload.wishlist,
      }
    default:
      return state
  }
}

export default WishlistReducers
