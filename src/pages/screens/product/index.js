import { useState, useEffect } from 'react'
import { FaRegHeart, FaHeart, FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { GET_PRODUCT_INFO } from '../../../redux/actions/products'
import { RATE_PRODUCT_ACTION } from '../../../redux/actions/reviews'
import moment from 'moment'

import ProductCarosual from '../../../components/ProductCarosual'
// import ReactImageMagnify from "react-image-magnify";
import Popup from '../../../components/popUp/popUp'
import Images from '../../../constants/images'
import Rating from 'react-rating'
import Pagination from '../../../components/pagination'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { WISHLIST_ADD_ITEM } from '../../../redux/actions/wishlist'
import { addtoCart, alreadyInCart } from '../../../redux/actions/cart'
export default function Product({ isFavorite }) {
  const [popupOpenLogin, setPopupOpenLogin] = useState(false)

  const dispatch = useDispatch()
  const { product } = useSelector((state) => state.ProductsReducers)
  const { user } = useSelector((state) => state.UsersReducers)
  const { alreadyPresentCart, cartData } = useSelector(
    (state) => state.CartReducers,
  )
  const { review } = useSelector((state) => state.ReviewsReducers)
  const { id } = useParams()
  const [previewImage, setPeviewImage] = useState(
    product ? product?.images[0] : '',
  )
  const userData = JSON.parse(localStorage.getItem('userData'))
  const [reviewSummary, setReviewsSummary] = useState({
    Excellent: 0,
    Good: 0,
    Average: 0,
    Poor: 0,
  })
  const [newReview, setnewReview] = useState({
    rating: 0,
    user: userData?._id,
    reviewText: '',
    productId: id,
    type: 'Product',
  })
  const handleSetRatingSummary = () => {
    product?.reviews?.map((item, index) => {
      if (item?.rating === 5) {
        setReviewsSummary((prevState) => ({
          ...prevState,
          Excellent: prevState.Excellent + 1,
        }))
      } else if (item?.rating === 4) {
        setReviewsSummary((prevState) => ({
          ...prevState,
          Good: prevState.Good + 1,
        }))
      } else if (item?.rating === 3) {
        setReviewsSummary((prevState) => ({
          ...prevState,
          Average: prevState.Average + 1,
        }))
      } else if (item?.rating === 2) {
        setReviewsSummary((prevState) => ({
          ...prevState,
          Poor: prevState.Poor + 1,
        }))
      } else if (item?.rating === 1) {
        setReviewsSummary((prevState) => ({
          ...prevState,
          Poor: prevState.Poor + 1,
        }))
      }
    })
  }
  const calculateAverageRating = () => {
    let sum = 0
    product?.reviews?.map((item, index) => {
      sum = sum + item?.rating
    })
    return sum / product?.reviews?.length
  }
  const totalAvgRating = calculateAverageRating()
  const handleAddReview = () => {
    if (userData == null) {
      setPopupOpenLogin(true)
      setCommented(false)

      return
    }
    if (newReview.reviewText.length > 0) {
      dispatch(RATE_PRODUCT_ACTION(newReview, localStorage.getItem('token')))
    } else {
      setCommented(false)

      toast.error('Review Text Is Required')
    }

    if (newReview.rating === 0) {
      setCommented(false)

      toast.error('Review Rating Is Required')
    }
  }
  // handle image change
  const handleImageChange = (e, image) => {
    setPeviewImage(image)
    const elems = document.querySelectorAll(
      '.product-wrapper_image-desc-wrapper_product-image-wrapper_product-thumbs_product-thumb-image',
    )

    elems.forEach((elem) => {
      elem.classList.remove('image-thumb-active')
    })
    e.target.classList.add('image-thumb-active')
  }

  // handle add to wishlist
  const handleAddToWishlist = () => {
    if (userData == null) {
      setPopupOpenLogin(true)

      return
    }
    dispatch(WISHLIST_ADD_ITEM(id, localStorage.getItem('token')))
  }
  // const avgRating = calculateAverageRating()
  const [popupOpen, setPopupOpen] = useState(false)
  const [successPopupOpen, setSuccessPopupOpen] = useState(false)
  const [commented, setCommented] = useState(false)
  const [itemQuantity, setitemQuantity] = useState(1)
  const [avgRating, setAvgRating] = useState(0)
  const [cart, setCart] = useState(false)

  useEffect(() => {
    product?.reviews?.map((item, index) => {
      if (item?.rating === 5) {
        setReviewsSummary((prevState) => ({
          ...prevState,
          Excellent: prevState.Excellent + 1,
        }))
      } else if (item?.rating === 4) {
        setReviewsSummary((prevState) => ({
          ...prevState,
          Good: prevState.Good + 1,
        }))
      } else if (item?.rating === 3) {
        setReviewsSummary((prevState) => ({
          ...prevState,
          Average: prevState.Average + 1,
        }))
      } else if (item?.rating === 2) {
        setReviewsSummary((prevState) => ({
          ...prevState,
          Poor: prevState.Poor + 1,
        }))
      } else if (item?.rating === 1) {
        setReviewsSummary((prevState) => ({
          ...prevState,
          Poor: prevState.Poor + 1,
        }))
      }
    })
  }, [review])

  useEffect(() => {
    dispatch(GET_PRODUCT_INFO(id))

    if (product?.reviews.length != 0) {
      setAvgRating(calculateAverageRating())
    }

    if (review) {
      setCommented(false)
      setnewReview({
        rating: 0,
        user: userData?._id,
        reviewText: '',
        productId: id,
        type: 'Product',
      })
    }
  }, [review])
  useEffect(() => {
    if (product) {
      dispatch(alreadyInCart(product?._id))
    }
    if (alreadyPresentCart) {
      setCart(alreadyPresentCart)
    }
  }, [cartData])

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
            onClick={() => setPopupOpen(false)}
            className="btn btn-solid btn-solid-primary-rounded model-wrapper_button "
          >
            Sign In
          </Link>
        </div>
      </Popup>
      <div className="product-outer-wrapper">
        <img src={Images.Pictures.brownLeftLeaf} alt="left-leaf"></img>
        <div className="product-wrapper container mt-5">
          <div
            className="product-wrapper_image-desc-wrapper"
            style={{
              textAlign: 'left',
              position: 'relative',
            }}
          >
            <img
              src={Images.Pictures.brownRightLeaf}
              style={{
                position: 'absolute',
                top: '-5rem',
                right: '1rem',
                zIndex: '-1',
                transform: 'rotate(265deg)',
                width: '55rem',
                opacity: '0.4',
              }}
              alt="right-leaf"
            ></img>
            <div className="product-wrapper_image-desc-wrapper_product-image-wrapper">
              <div className="product-wrapper_image-desc-wrapper_product-image-wrapper_product-image">
                <img src={previewImage} alt="product"></img>
              </div>
              <div className="product-wrapper_image-desc-wrapper_product-image-wrapper_product-thumbs">
                {product?.images.map((image, index) => {
                  return (
                    <img
                      key={index}
                      className="product-wrapper_image-desc-wrapper_product-image-wrapper_product-thumbs_product-thumb-image"
                      src={image}
                      onClick={(e) => {
                        handleImageChange(e, image)
                      }}
                      alt="product"
                    />
                  )
                })}
              </div>
            </div>
            <div className="product-wrapper_image-desc-wrapper_product-description">
              <div className="product-wrapper_image-desc-wrapper_product-description_top">
                <h2 className="fs-2">{product?.name}</h2>
                <h2 className="fs-2">USD.${product?.price}</h2>
              </div>
              <div className="product-wrapper_image-desc-wrapper_product-description_middle">
                <ul>
                  <li>{product?.description}</li>
                </ul>
                <div className="product-wrapper_image-desc-wrapper_product-description_middle_last-wrapper">
                  <h5 className="fs-5 quantity-label">Quantity:</h5>
                  <div>
                    <div className="product-wrapper_image-desc-wrapper_product-description_middle_last-wrapper_qty-wrapper">
                      <button
                        onClick={() => {
                          if (itemQuantity > 0) {
                            setitemQuantity(itemQuantity - 1)
                          }
                        }}
                        className="icon-btn btn-solid btn-solid-primary-rounded  product-wrapper_image-desc-wrapper_product-description_middle_last-wrapper_qty-wrapper_button"
                      >
                        -
                      </button>
                      <span className="product-wrapper_image-desc-wrapper_product-description_middle_last-wrapper_qty-wrapper_quantity-value">
                        {itemQuantity}
                      </span>
                      <button
                        onClick={() => {
                          setitemQuantity(itemQuantity + 1)
                        }}
                        className="icon-btn btn-solid btn-solid-primary-rounded product-wrapper_image-desc-wrapper_product-description_middle_last-wrapper_qty-wrapper_button"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="product-wrapper_image-desc-wrapper_product-description_middle_last-wrapper_wishlist">
                    <div className="icon-btn btn-solid-dark-rounded  btn-circle product-wrapper_image-desc-wrapper_product-description_middle_last-wrapper_wishlist_button">
                      {isFavorite ? (
                        <FaRegHeart
                          onClick={() => {
                            handleAddToWishlist()
                          }}
                          size="1.6rem"
                        />
                      ) : (
                        <FaHeart
                          onClick={() => {
                            handleAddToWishlist()
                          }}
                          size="1.6rem"
                        />
                      )}
                    </div>
                    <h5 className="fs-5">
                      {isFavorite ? 'Remove From Wishlist' : 'Add to Wishlist'}
                    </h5>
                  </div>
                  <div className="instock fs-5">
                    <label>In Stock:</label>
                    <span>&nbsp;{product?.quantity}</span>
                  </div>
                  <button
                    disabled={alreadyPresentCart}
                    className="btn btn-solid btn-solid-primary-rounded py-3 px-5 "
                    style={{ width: '15rem' }}
                    onClick={() => {
                      let cart_item = product
                      product.quantity = itemQuantity
                      product.type = 'Product'
                      dispatch(addtoCart(cart_item))
                    }}
                  >
                    {alreadyPresentCart ? 'Added' : 'Add to Cart'}
                  </button>
                </div>
              </div>
              <div className="product-wrapper_image-desc-wrapper_product-description_bottom">
                <div className="product-wrapper_image-desc-wrapper_product-description_bottom_rating-wrapper">
                  <h4 className="fs-4product-wrapper_image-desc-wrapper_product-description_bottom_rating-wrapper_heading">
                    Ratings: {totalAvgRating ? Math.round(totalAvgRating) : 0}
                  </h4>
                  <div className="product-wrapper_image-desc-wrapper_product-description_bottom_rating-wrapper_rating-inner-wrapper">
                    {' '}
                    {/* {Array.apply(null, Array(totalAvgRating)).map(
                    (rnum, index) => {
                      return (
                        <img
                          key={index}
                          className="product-wrapper_image-desc-wrapper_product-description_bottom_rating-wrapper_rating-inner-wrapper_rating"
                          src={Images.Pictures.plant}
                          alt="ratings"
                        ></img>
                      )
                    },
                  )} */}
                  </div>
                </div>
                <div className="product-wrapper_image-desc-wrapper_product-description_bottom_seller-details-wrapper">
                  <span className="product-wrapper_image-desc-wrapper_product-description_bottom_seller-details-wrapper_title">
                    Seller:
                  </span>
                  <h6 className="fs-6">
                    {product?.seller.firstName + '' + product?.seller.lastName}
                    &nbsp;
                    <img
                      src={product?.seller.image}
                      width="20"
                      height="10"
                      alt="flag"
                    ></img>
                  </h6>
                  <button
                    onClick={() => setPopupOpen(true)}
                    className="product-wrapper_image-desc-wrapper_product-description_bottom_seller-details-wrapper_vendor-btn"
                  >
                    Contact Vendor
                    <FaAngleRight />
                  </button>
                  <div>
                    <Link
                      to="/seller-products"
                      className="product-wrapper_image-desc-wrapper_product-description_bottom_seller-details-wrapper_vendor-btn"
                    >
                      View all items of vendor
                      <FaAngleRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* shipping , ratings and reviews start */}
          <div className="row product-wrapper_tabs">
            <div className="col-12">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="shipping-details-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#shipping-details"
                    type="button"
                    role="tab"
                    aria-controls="shipping-details"
                    aria-selected="true"
                  >
                    Shopping Details
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="ratings-reviews-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#ratings-reviews"
                    type="button"
                    role="tab"
                    aria-controls="ratings-reviews"
                    aria-selected="false"
                  >
                    Rate & Reviews
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                {/* shipping tab start */}
                <div
                  className="tab-pane fade show active"
                  id="shipping-details"
                  role="tabpanel"
                  aria-labelledby="shipping-details-tab"
                >
                  <div className="tab-content_shipping-details">
                    <div className="row">
                      <div className="col-6">
                        <h4 className="fs-4">Shipping and handling</h4>
                      </div>
                      <div className="col-6 text-end">
                        <p>Item Number:</p>
                        {product?._id}
                      </div>
                      <div className="col-12">
                        <div className="row">
                          <div className="col-4">Item Location:</div>
                          <div className="col-8">{product?.seller.country}</div>
                        </div>
                        <div className="row">
                          <div className="col-4">Shipping:</div>
                          <div className="col-8">{product?.shippingRegion}</div>
                        </div>
                        <div className="row">
                          <div className="col-4">Delivery:</div>
                          <div className="col-8">
                            <p>{product?.shippingDetails}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-4">Return:</div>
                          <div className="col-8">{product?.returnPolicy}</div>
                        </div>
                        <div className="row">
                          <div className="col-4">Shipping and handling:</div>
                          <div className="col-8">
                            {product?.shippingCharge == 0
                              ? 'Free shipping'
                              : '$' + product?.shippingCharge}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* shipping tab end */}
                {/* rating and reviews tab start */}
                <div
                  className="tab-pane fade"
                  id="ratings-reviews"
                  role="tabpanel"
                  aria-labelledby="ratings-reviews-tab"
                >
                  <div className="tab-content_ratings-reviews">
                    <div className="tab-content_ratings-reviews_inner-wrapper">
                      <div className="tab-content_ratings-reviews_inner-wrapper_average">
                        <h2 className="fs-2">
                          Total Reviews {product?.reviews.length}
                        </h2>
                        <div className="tab-content_ratings-reviews_inner-wrapper_average_rating">
                          <div className="tab-content_ratings-reviews_inner-wrapper_average_rating_label">
                            Excellent
                          </div>
                          <div className=" tab-content_ratings-reviews_inner-wrapper_average_rating_rating-wrapper">
                            {[1, 2, 3, 4, 5].map((rnum, index) => {
                              return (
                                <img
                                  key={index}
                                  className="tab-content_ratings-reviews_inner-wrapper_average_rating_rating-wrapper_rating"
                                  src={Images.Pictures.plant}
                                  alt="ratings"
                                ></img>
                              )
                            })}
                          </div>
                          <div className="tab-content_ratings-reviews_inner-wrapper_average_rating_rating-number">
                            {reviewSummary.Excellent}
                          </div>
                        </div>
                        <div className="tab-content_ratings-reviews_inner-wrapper_average_rating">
                          <div className="tab-content_ratings-reviews_inner-wrapper_average_rating_label">
                            Good
                          </div>
                          <div className=" tab-content_ratings-reviews_inner-wrapper_average_rating_rating-wrapper">
                            {[1, 2, 3, 4].map((rnum, index) => {
                              return (
                                <img
                                  key={index}
                                  className="tab-content_ratings-reviews_inner-wrapper_average_rating_rating-wrapper_rating"
                                  src={Images.Pictures.plant}
                                  alt="ratings"
                                ></img>
                              )
                            })}
                          </div>
                          <div className="tab-content_ratings-reviews_inner-wrapper_average_rating_rating-number">
                            {reviewSummary.Good}
                          </div>
                        </div>
                        <div className="tab-content_ratings-reviews_inner-wrapper_average_rating">
                          <div className="tab-content_ratings-reviews_inner-wrapper_average_rating_label">
                            Average
                          </div>
                          <div className=" tab-content_ratings-reviews_inner-wrapper_average_rating_rating-wrapper">
                            {[1, 2, 3].map((rnum, index) => {
                              return (
                                <img
                                  key={index}
                                  className="tab-content_ratings-reviews_inner-wrapper_average_rating_rating-wrapper_rating"
                                  src={Images.Pictures.plant}
                                  alt="ratings"
                                ></img>
                              )
                            })}
                          </div>
                          <div className="tab-content_ratings-reviews_inner-wrapper_average_rating_rating-number">
                            {reviewSummary.Average}
                          </div>
                        </div>
                        <div className="tab-content_ratings-reviews_inner-wrapper_average_rating">
                          <div className="tab-content_ratings-reviews_inner-wrapper_average_rating_label">
                            Poor
                          </div>
                          <div className=" tab-content_ratings-reviews_inner-wrapper_average_rating_rating-wrapper">
                            {[1, 2].map((rnum, index) => {
                              return (
                                <img
                                  key={index}
                                  className="tab-content_ratings-reviews_inner-wrapper_average_rating_rating-wrapper_rating"
                                  src={Images.Pictures.plant}
                                  alt="ratings"
                                ></img>
                              )
                            })}
                          </div>
                          <div className="tab-content_ratings-reviews_inner-wrapper_average_rating_rating-number">
                            {reviewSummary.Poor}
                          </div>
                        </div>
                        <div className="tab-content_ratings-reviews_inner-wrapper_average_rating">
                          <div className="tab-content_ratings-reviews_inner-wrapper_average_rating_label">
                            Poor
                          </div>
                          <div className=" tab-content_ratings-reviews_inner-wrapper_average_rating_rating-wrapper">
                            {[1].map((rnum, index) => {
                              return (
                                <img
                                  key={index}
                                  className="tab-content_ratings-reviews_inner-wrapper_average_rating_rating-wrapper_rating"
                                  src={Images.Pictures.plant}
                                  alt="ratings"
                                ></img>
                              )
                            })}
                          </div>
                          <div className="tab-content_ratings-reviews_inner-wrapper_average_rating_rating-number">
                            {reviewSummary.Poor}
                          </div>
                        </div>
                      </div>

                      <div className="tab-content_ratings-reviews_inner-wrapper_review">
                        <div className="row">
                          <div className="col-8">
                            <h2 className="fs-2">Give your review</h2>
                          </div>
                          <div className="col-4 text-end">
                            <p>Item Number:</p>
                            {product?._id}
                          </div>
                        </div>
                        <textarea
                          value={newReview.reviewText}
                          onChange={(e) => {
                            setnewReview({
                              ...newReview,
                              reviewText: e.target.value,
                            })
                          }}
                          className="tab-content_ratings-reviews_inner-wrapper_review_input"
                        ></textarea>
                        <div className="tab-content_ratings-reviews_inner-wrapper_review_customer-review-and-button-wrapper">
                          <div className="tab-content_ratings-reviews_inner-wrapper_review_customer-review-and-button-wrapper_customer-review">
                            <h3 className="fs-3 tab-content_ratings-reviews_inner-wrapper_review_customer-review-and-button-wrapper_customer-review_label">
                              Rate Product
                            </h3>
                            <Rating
                              onClick={(e) => {
                                setnewReview({
                                  ...newReview,
                                  rating: e,
                                })
                              }}
                              start={0}
                              // stop={5}
                              readonly={newReview.rating > 0 ? true : false}
                              // placeholderRating={newReview.rating}
                              emptySymbol={[
                                <img
                                  width="30"
                                  src={Images.Pictures.emptyPlant}
                                  alt="empty"
                                ></img>,
                              ]}
                              fullSymbol={[
                                <img
                                  width="30"
                                  src={Images.Pictures.plant}
                                  alt="full"
                                ></img>,
                              ]}
                            />
                          </div>
                          <div className="tab-content_ratings-reviews_inner-wrapper_review_customer-review-and-button-wrapper_button-wrapper">
                            <h4 className="h4 tab-content_ratings-reviews_inner-wrapper_review_customer-review-and-button-wrapper_button-wrapper_title">
                              {commented ? 'Your Comment Submitted' : ''}
                            </h4>{' '}
                            <button
                              onSubmit={() => {
                                handleAddReview()
                              }}
                              onClick={() => {
                                handleAddReview()
                              }}
                              className="btn btn-solid btn-solid-primary-rounded px-5 tab-content_ratings-reviews_inner-wrapper_review_customer-review-and-button-wrapper_button-wrapper_button"
                              disabled={commented ? true : false}
                            >
                              {commented ? 'Submitted' : 'Submit'}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-content_ratings-reviews_customer-reviews-wrapper">
                      <h3 className="fs-3 tab-content_ratings-reviews_customer-reviews-wrapper_title">
                        Customer
                        <span>Reviews</span>
                      </h3>
                      {product?.reviews.map((item, index) => {
                        return (
                          <div
                            className="tab-content_ratings-reviews_customer-reviews-wrapper_review"
                            key={index}
                          >
                            <div className="tab-content_ratings-reviews_customer-reviews-wrapper_review_inner-wrapper">
                              <h4 className="fs-4tab-content_ratings-reviews_customer-reviews-wrapper_review_inner-wrapper_name">
                                {item?.user.firstName}
                              </h4>
                              <div className=" tab-content_ratings-reviews_customer-reviews-wrapper_review_inner-wrapperrating-wrapper">
                                {Array.apply(null, Array(item?.rating)).map(
                                  (item, index) => {
                                    return (
                                      <>
                                        <img
                                          width="20"
                                          height="20"
                                          className="tab-content_ratings-reviews_customer-reviews-wrapper_review_inner-wrapperrating-wrapper_rating"
                                          src={Images.Pictures.plant}
                                          alt="ratings"
                                          key={index}
                                        />
                                      </>
                                    )
                                  },
                                )}
                              </div>
                              <div className="tab-content_ratings-reviews_customer-reviews-wrapper_review_inner-wrapper_date">
                                {moment(item?.createdAt).format(
                                  'MMM DD YYYY h:mm A',
                                )}{' '}
                              </div>
                            </div>
                            <p className="tab-content_ratings-reviews_customer-reviews-wrapper_review_content">
                              {item?.reviewText}
                            </p>
                          </div>
                        )
                      })}
                      <Popup open={popupOpen} setOpen={setPopupOpen}>
                        <div className="model-contact-wrapper">
                          <h2 className=" fs-2 model-contact-wrapper_popup-title text-center">
                            Contact
                          </h2>
                          <form
                            className="model-contact-wrapper_popup-body"
                            onSubmit={(e) => {
                              e.preventDefault()
                              setPopupOpen(false)
                              setSuccessPopupOpen(true)
                            }}
                          >
                            <div className="model-contact-wrapper_popup-body_input-wrapper">
                              <label for="firstName" className="form-label">
                                Message
                              </label>
                              <textarea
                                type="text"
                                className="form-control"
                                id="firstName"
                                // value={user.firstName}
                                // onChange={onchange}
                                rows={8}
                                name="firstName"
                                placeholder="Type Message Here.."
                                // required
                              ></textarea>
                            </div>
                            <button
                              className="btn btn-solid btn-solid-primary-rounded model-contact-wrapper_popup-body_button mx-auto"
                              type="submit"
                            >
                              Send
                            </button>
                          </form>
                        </div>
                      </Popup>
                      <Popup
                        open={successPopupOpen}
                        setOpen={setSuccessPopupOpen}
                      >
                        <div className="model-wrapper">
                          <img
                            src={Images.Pictures.successCheck}
                            className="model-wrapper_image"
                            alt="success"
                          ></img>
                          <p className="model-wrapper_text">
                            Your Message sent
                          </p>
                          <button
                            className="btn btn-solid btn-solid-primary-rounded model-wrapper_button "
                            onClick={() => setSuccessPopupOpen(false)}
                          >
                            Close
                          </button>
                        </div>
                      </Popup>
                      <div>
                        <Pagination />
                      </div>
                    </div>
                  </div>
                </div>
                {/* rating and reviews tab end */}
              </div>
            </div>
          </div>
          {/* shipping , ratings and reviews end */}
        </div>
        <section
          className="product-carosual-section"
          style={{ marginTop: '10rem' }}
        >
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 text-left">
                <h2 className="fs-2">
                  Similar <span className="border-title-gradient">Items</span>
                </h2>
              </div>
            </div>

            <ProductCarosual showTitle={false} marginTop="0" />
          </div>
        </section>
      </div>
    </>
  )
}
