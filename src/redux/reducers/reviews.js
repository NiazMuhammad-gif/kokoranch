import ActionTypes from '../constant/index'
const initial_state = {
  reviews: [],
}

const ReviewsReducers = (state = initial_state, action) => {
  switch (action.type) {
    case ActionTypes.RATE_PRODUCT:
      return {
        ...state,
        review: action.payload.review,
      }
    case ActionTypes.RATE_SERVICE:
      return {
        ...state,
        review: action.payload.review,
      }
    case ActionTypes.RATE_TRADE:
      return {
        ...state,
        review: action.payload.review,
      }
    case ActionTypes.ERROR_RATE:
      return {
        ...state,
        errorReview: action.payload.response,
      }

    default:
      return state
  }
}

export default ReviewsReducers
