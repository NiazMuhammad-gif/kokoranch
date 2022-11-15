import ActionTypes from '../constant/index'

const initial_state = {
  categories: [],
  subCategories: [],
  subSubCategories: [],
}

const CategoriesReducers = (state = initial_state, action) => {
  switch (action.type) {
    // CATEGORIES
    case ActionTypes.GET_ALL_CATEGOEIES:
      return {
        ...state,
        categories: action.payload.categories,
        subCategories: action.payload.subCategories,
        subSubCategories: action.payload.subSubCategories,
      }
    case ActionTypes.GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      }
    case ActionTypes.GET_CATEGORIES_SERVICES:
      return {
        ...state,
        servicesCategories: action.payload.category,
      }
    case ActionTypes.CREATE_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload],
      }

    case ActionTypes.GET_CATEGORIES_PRODUCTS:
      return {
        ...state,
        categoriesProducts: action.payload.categoryProducts,
      }
    case ActionTypes.UPDATE_CATEGORIES:
      return {
        ...state,
        categories: state.categories.map((category) => {
          if (category._id === action.payload._id) {
            return action.payload
          }
          return category
        }),
      }
    case ActionTypes.DELETE_CATEGORIES:
      return {
        ...state,
        categories: state.categories.filter(
          (category) => category._id !== action.payload._id,
        ),
      }

    // SUB CATEGORIES
    case ActionTypes.GET_SUB_CATEGORIES:
      return {
        ...state,
        subCategories: action.payload,
      }
    case ActionTypes.CREATE_SUB_CATEGORY:
      return {
        ...state,
        subCategories: [...state.subCategories, action.payload],
      }
    case ActionTypes.UPDATE_SUB_CATEGORIES:
      return {
        ...state,
        subCategories: state.subCategories.map((sub_category) => {
          if (sub_category._id === action.payload._id) {
            return action.payload
          }
          return sub_category
        }),
      }
    case ActionTypes.DELETE_SUB_CATEGORIES:
      return {
        ...state,
        subCategories: state.subCategories.filter(
          (sub_category) => sub_category._id !== action.payload._id,
        ),
      }

    // SUB SUB CATEGORIES
    case ActionTypes.GET_SUB_SUB_CATEGORIES:
      return {
        ...state,
        subSubCategories: action.payload,
      }
    case ActionTypes.CREATE_SUB_SUB_CATEGORY:
      return {
        ...state,
        subSubCategories: [...state.subSubCategories, action.payload],
      }
    case ActionTypes.UPDATE_SUB_SUB_CATEGORIES:
      return {
        ...state,
        subSubCategories: state.subSubCategories.map((sub_sub_categories) => {
          if (sub_sub_categories._id === action.payload._id) {
            return action.payload
          }
          return sub_sub_categories
        }),
      }
    case ActionTypes.DELETE_SUB_SUB_CATEGORIES:
      return {
        ...state,
        subSubCategories: state.subSubCategories.filter(
          (sub_sub_categories) => sub_sub_categories._id !== action.payload._id,
        ),
      }
    default:
      return state
  }
}

export default CategoriesReducers
