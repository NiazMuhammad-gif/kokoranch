import Images from '../../../constants/images'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ProductCard from '../../../components/productCard'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { css } from '@emotion/react'
import ClipLoader from 'react-spinners/ClipLoader'
import {
  GET_CATEGORIES_PRODUCTS,
  GET_All_CATEGORIES,
} from '../../../redux/actions/categories'
export default function Categories() {
  const dispatch = useDispatch()
  const { categoriesProducts, categories } = useSelector(
    (state) => state.CategoriesReducers,
  )
  // console.log('categoriesProducts', categoriesProducts)

  const slicedCategoryList = categories?.slice(0, 4)

  const plant = [
    {
      image: Images.Pictures.product[0],
      name: 'Palnt',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 1,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Palnt',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 1,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Palnt',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 1,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Palnt',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 1,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Plant Nutrients',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 2,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Plant Nutrients',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 2,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Plant Nutrients',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 2,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Plant Nutrients',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 2,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Plants Media',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 3,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Plants Media',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 3,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Plants Media',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 3,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Plants Media',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 3,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Plants Containers',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 4,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Plants Containers',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 4,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Plants Containers',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 4,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Plants Containers',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 4,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Floral Supplies',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 5,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Floral Supplies',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 5,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Floral Supplies',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 5,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Floral Supplies',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 5,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Palnt',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 1,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Palnt',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 1,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Palnt',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 1,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Palnt',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 1,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Plant Nutrients',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 2,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Plant Nutrients',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 2,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Plant Nutrients',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 2,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Plant Nutrients',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 2,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Plants Media',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 3,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Plants Media',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 3,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Plants Media',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 3,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Plants Media',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 3,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Plants Containers',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 4,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Plants Containers',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 4,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Plants Containers',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 4,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Plants Containers',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 4,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Floral Supplies',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 5,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Floral Supplies',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 5,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Floral Supplies',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 5,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Floral Supplies',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 5,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Palnt',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 1,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Palnt',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 1,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Palnt',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 1,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Palnt',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 1,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Plant Nutrients',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 2,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Plant Nutrients',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 2,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Plant Nutrients',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 2,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Plant Nutrients',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 2,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Plants Media',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 3,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Plants Media',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 3,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Plants Media',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 3,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Plants Media',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 3,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Plants Containers',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 4,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Plants Containers',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 4,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Plants Containers',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 4,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Plants Containers',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 4,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Floral Supplies',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 5,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Floral Supplies',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 5,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Floral Supplies',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 5,
    },
    {
      image: Images.Pictures.product[0],
      name: 'Floral Supplies',
      price: 12,
      rating: 3,
      stock: 12,
      categoryId: 5,
    },
  ]
  // const categories = [
  //   {
  //     image: Images.Pictures.category[0],
  //     name: 'Plants',
  //     categoryId: 1,
  //   },
  //   {
  //     image: Images.Pictures.category[1],
  //     name: 'Plant Nutrients',
  //     categoryId: 2,
  //   },
  //   {
  //     image: Images.Pictures.category[2],
  //     name: 'Plants Media',
  //     categoryId: 3,
  //   },
  //   {
  //     image: Images.Pictures.category[3],
  //     name: 'Plants Containers',
  //     categoryId: 4,
  //   },
  //   {
  //     image: Images.Pictures.category[4],
  //     name: 'Floral Supplies',
  //     categoryId: 5,
  //   },
  // ]
  const [activeCate, setActiveCate] = useState(
    categoriesProducts ? categoriesProducts[0]._id : '',
  )
  let [loading, setLoading] = useState(false)
  let [color, setColor] = useState('#14A384')

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: #14a384;
  `
  const [categoryName, setCategoryName] = useState('Plants')
  const [productsList, setproductsList] = useState([])
  const activeClassToggle = (e, cat) => {
    setLoading(true)
    setActiveCate(cat._id)
    setCategoryName(cat.category)
    dispatch(GET_CATEGORIES_PRODUCTS(cat.category))
    const elems = document.querySelectorAll('.category-card')
    elems.forEach((elem) => {
      elem.classList.remove('category-card-active')
    })
    e.target.tagName === 'IMG'
      ? e.target.parentElement.classList.add('category-card-active')
      : e.target.classList.add('category-card-active')
  }
  useEffect(() => {
    dispatch(GET_All_CATEGORIES())
  }, [])
  useEffect(() => {
    dispatch(GET_CATEGORIES_PRODUCTS(categoryName))
  }, [categoryName])
  useEffect(() => {
    if (categoriesProducts) {
      setLoading(false)
      categoriesProducts?.map((item) => {
        setproductsList(item.products)
      })
    }
  }, [categoriesProducts])

  return (
    <>
      <section className="ratio_asos category-style-3">
        <div className="container">
          <div className="row">
            <div className="col-8 text-left">
              <h2 className="fs-2">
                All Prod<span className="border-title-gradient">ucts</span>
                <p style={{ fontSize: '.9rem', fontWeight: 'normal' }}>
                  Top Categories
                </p>
              </h2>
            </div>
            <div className="col-4 " style={{ textAlign: 'right' }}>
              {/* <h4 className="fs-4">
                <span className="border-title mt-2">See all</span>
              </h4> */}
            </div>
          </div>
          <div
            className="row  mx-auto px-5 d-flex  justify-content-evenly  "
            style={{ marginTop: '2rem', marginBottom: '5rem' }}
          >
            {slicedCategoryList.map((cat, index) => {
              return (
                <div
                  key={index}
                  className="card  d-flex align-items-center mx-2 justify-content-between border-0 "
                  style={{ width: 'fit-content' }}
                >
                  <div
                    onClick={(e) => activeClassToggle(e, cat)}
                    className={`category-card mt-5`}
                  >
                    <img src={cat.image} alt="category" />
                  </div>
                  <h4 className="fs-4 mt-3">{cat.category}</h4>
                </div>
              )
            })}
            <div
              className="card  d-flex align-items-center mx-2 justify-content-between border-0 "
              style={{ width: 'fit-content' }}
            >
              <Link to="/categories">
                <div className="category-card d-flex  flex-column justify-content-center align-items-center  mx-4 mt-5">
                  <h5 style={{ fontSize: '1.4rem', color: '#000' }}>
                    All Categories
                  </h5>
                  <FaArrowRight style={{ fontSize: '1.5rem', color: '#000' }} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="featrured-dynamic-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-6 text-left">
              <h2 className="fs-2">
                <span className="border-title">
                  {categories.map((cat, index) => {
                    return activeCate === cat._id && cat.category
                  })}
                </span>
              </h2>
            </div>
            <div className="col-6" style={{ textAlign: 'right' }}>
              <h4 className="fs-4">
                <span className="border-title mt-2">See all</span>
              </h4>
            </div>
          </div>
          <div
            style={{ display: loading ? 'none' : 'flex' }}
            className="d-flex justify-content-center flex-wrap"
          >
            <ClipLoader
              color={color}
              loading={loading}
              css={override}
              size={150}
            />

            {productsList.length !== 0 ? (
              productsList?.map((element, index) => {
                if (element.category === activeCate) {
                  return (
                    <div
                      style={{ display: loading ? 'none' : 'block' }}
                      className="me-4 mb-5"
                      key={index}
                    >
                      <ProductCard product={element} />
                    </div>
                  )
                }
              })
            ) : (
              <span
                style={{
                  display:
                    loading && productsList.length === 0 ? 'none' : 'block',
                }}
                className="fs-4  mt-2"
              >
                No Products Available!
              </span>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
