import ActionTypes from '../constant/index'
import { toast } from 'react-toastify'

// const initial_state = {
//   cart: [],
// };
const cartDataV = localStorage.getItem('cartData')

const initState = {
  loading: false,
  cartData: cartDataV !== '' ? JSON.parse(cartDataV) : [],
  cartErrors: [],
  token: '',
  user: '',
}

// const CartReducers = (state = initial_state, action) => {
//   switch (action.type) {
//     case ActionTypes.ADD_TO_CART:
//       return {
//         ...state,
//         cart: [...state.cart, action.payload],
//       };

//     case ActionTypes.REMOVE_FROM_CART:
//       return {
//         ...state,
//         cart: state.cart.filter((item) => item._id !== action.payload._id),
//       };
//     case ActionTypes.GET_CART:
//       return {
//         ...state,
//         cart: action.payload.cart,
//       };

//     default:
//       return state;
//   }
// };
const deliveryCharges = (deliveryRates, cartData) => {
  let dCharges = 0

  cartData.map((item) => {
    if (item.type == 'Product') {
      dCharges += deliveryRates * parseFloat(item.quantity)
    } else {
      dCharges += deliveryRates * cartData.length
    }
  })
  return dCharges
}
const getCartTotal = (cartData) => {
  let total = 0
  const deliveryCharge = deliveryCharges(3, cartData)

  if (cartData.length != '') {
    cartData.map((item) => {
      if (item.type == 'Product') {
        total +=
          parseFloat(item.price) * parseFloat(item.quantity) + deliveryCharge
      } else {
        total += parseFloat(item.cost) + deliveryCharge
      }
    })
  } else {
    total += 0
  }
  return total
}
const getCartItemsTotal = (cartData) => {
  let total = 0

  if (cartData.length != '') {
    cartData.map((item) => {
      if (item.type == 'Product') {
        total += parseFloat(item.price) * parseFloat(item.quantity)
      }
      // setCartTotal(total.toFixed(2))
      else {
        total += parseFloat(item.cost)
      }
    })
  } else {
    total += 0
  }
  return total
}

const checkCartListType = (cartData) => {
  let cartListType = ''

  if (cartData.length != '') {
    cartData.map((item) => {
      if (item.type == 'Product') {
        cartListType = 'Product'
      } else {
        cartListType = 'Service'
      }
    })
  }
  return cartListType
}
const CartReducers = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      const cartType = checkCartListType(state.cartData)
      const isValidItem = cartType == action.payload.type ? true : false
      if (!isValidItem && cartType != '') {
        toast.error('Can Only Add Either Product or Service!')

        return { ...state, cartData: state.cartData }
      } else {
        const isExisting = state.cartData.some(
          (obj) => obj._id === action.payload._id,
        )
        if (isExisting) {
          toast.error('Already Existing in Cart!')
          return
        } else {
          localStorage.setItem(
            'cartData',
            JSON.stringify([...state.cartData, action.payload]),
          )
        }
        return { ...state, cartData: [...state.cartData, action.payload] }
      }

    case ActionTypes.ALREADY_IN_CART:
      const isExistCart = state.cartData.some(
        (obj) => obj._id === action.payload,
      )

      return { ...state, alreadyPresentCart: isExistCart }

    case ActionTypes.REMOVE_FROM_CART:
      const index = state.cartData.findIndex(
        (cartItem) => cartItem._id === action.payload,
      )
      let newCart = [...state.cartData]

      if (index >= 0) {
        newCart.splice(index, 1)
      } else {
        console.warn(
          `Can't Remove item (id:${action.payload} as its nott in cart!)`,
        )
      }

      localStorage.setItem('cartData', JSON.stringify(newCart))
      return { ...state, cartData: newCart }

    case ActionTypes.GET_CART:
      return { ...state, allCartItems: JSON.parse(action.payload) }

    case ActionTypes.CHANGE_CART_ITEM_QUANTITY:
      const newCart1 = state.cartData.map((obj) => {
        if (obj.id === action.payload.item_id) {
          return { ...obj, quantity: action.payload.itemQuantity }
        }

        return obj
      })

      localStorage.setItem('cartData', JSON.stringify(newCart1))

      return { ...state, cartData: newCart1 }

    case ActionTypes.GET_CART_TOTAL:
      const get_cart_total = getCartTotal(state.cartData)
      return { ...state, cartTotal: get_cart_total }
    case ActionTypes.DELIVERY_CHARGES:
      const delvCharge = deliveryCharges(3, state.cartData)

      return {
        ...state,
        deliveryTotalCharges: delvCharge,
      }
    case ActionTypes.CART_ITEMS_TOTAL:
      const get_item_total = getCartItemsTotal(state.cartData)
      return {
        ...state,
        cartItemsTotal: get_item_total,
      }
    case ActionTypes.EMPTY_CART:
      return { ...state, emptyCart: action.payload }

    case ActionTypes.ERROR_CART:
      return { ...state, errors: action.payload }

    default:
      return state
  }
}

export default CartReducers
