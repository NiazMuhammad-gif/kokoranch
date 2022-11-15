import { Link } from 'react-router-dom'
import Images from '../../constants/images'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import {
  GET_USER_WISHLIST,
  WISHLIST_ADD_ITEM,
  WISHLIST_REMOVE_ITEM,
} from '../../redux/actions/wishlist'
import Popup from '../../components/popUp/popUp'

export default function ProductCard({ product }) {
  const { wishlist, addWishlist, removeItemWishList } = useSelector(
    (state) => state.WishlistReducers,
  )
  const { Allproducts } = useSelector((state) => state.ProductsReducers)
  const [popupOpenLogin, setPopupOpenLogin] = useState(false)
  const userData = JSON.parse(localStorage.getItem('userData'))
  const [isPresentWishlist, setisPresentWishlist] = useState(false)
  const plant = [1, 2, 3, 4, 5]
  const dispatch = useDispatch()
  const handleAddToWishlist = () => {
    if (userData == null) {
      setPopupOpenLogin(true)
      return
    } else {
      dispatch(
        WISHLIST_ADD_ITEM(
          { product: product?._id },
          localStorage.getItem('token'),
        ),
      )
    }
  }
  const handleRemoveFromWishlist = () => {
    dispatch(
      WISHLIST_REMOVE_ITEM(
        { productId: product?._id },
        localStorage.getItem('token'),
      ),
    )
  }

  useEffect(() => {
    if (userData !== null) {
      dispatch(GET_USER_WISHLIST(localStorage.getItem('token')))
    }
  }, [])

  useEffect(() => {
    wishlist?.map((item) => {
      if (item.product._id === product?._id) {
        setisPresentWishlist(true)
        console.log(' ')
      } else {
        setisPresentWishlist(false)
      }
    })
  }, [])

  return (
    <>
      <Popup open={popupOpenLogin} setOpen={setPopupOpenLogin}>
        <div className="model-wrapper">
          <img
            src={Images.Pictures.userIcon}
            className="model-wrapper_image"
            alt="user-icon"
          />
          <p className="model-wrapper_text">Please Login to Leave Review!</p>
          <Link
            to="/login"
            onClick={() => setPopupOpenLogin(false)}
            className="btn btn-solid btn-solid-primary-rounded model-wrapper_button "
          >
            Sign In
          </Link>
        </div>
      </Popup>
      <div className="card-flyer card-flyer_product">
        <div className="icon-btn card-flyer_wishlist-icon-wrapper">
          {isPresentWishlist ? (
            <FaHeart
              onClick={() => {
                console.log('remov e')
                setisPresentWishlist(false)

                handleRemoveFromWishlist()
              }}
            />
          ) : (
            <FaRegHeart
              onClick={() => {
                setisPresentWishlist(true)

                handleAddToWishlist()
              }}
            />
          )}
        </div>
        <Link to={'/product/' + product?._id}>
          <div className="text-box">
            <div className="image-box">
              <img
                src={
                  product?.images
                    ? product?.images[0]
                    : Images.Pictures.product[0]
                }
                alt=""
              />
            </div>
            <div className="text-container">
              <h4 className="fs-4 ellipsis">
                {product?.name
                  ? product?.name
                  : 'Koko Ranch Products Name Here Koko Ranch Products Name Here KokoRanch Products Name Here'}
              </h4>
              <h6 className="fs-6">
                $ {product?.price ? product?.price : 123}
                <span
                  className="font-dark mx-2"
                  style={{ textDecoration: 'line-through', fontSize: '1.5rem' }}
                >
                  ${product?.price ? product?.price : 77}
                </span>
              </h6>
              <div className="row mt-3">
                <div className="col-5">
                  {plant.map((element, index) => {
                    return (
                      <img
                        key={index}
                        src={Images.Pictures.plant}
                        alt="Plant Icon"
                        width={11}
                        height={11}
                      />
                    )
                  })}
                </div>
                <div className="col-7" style={{ textAlign: 'right' }}>
                  <p>
                    <strong>In Stock : </strong>{' '}
                    {product?.quantity ? product?.quantity : 0}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}
