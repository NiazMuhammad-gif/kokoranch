import Images from '../../../constants/images'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { GET_All_SERVICES } from '../../../redux/actions/services'
import { useSelector, useDispatch } from 'react-redux'

export default function Agricultural() {
  const { services } = useSelector((state) => state.ServicesReducers)
  const dispatch = useDispatch()

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str
  }
  useEffect(() => {
    dispatch(GET_All_SERVICES())
  }, [])
  return (
    <>
      <div className="agricultural-section container">
        <div className="col-12">
          <div className="row">
            <div className="col-8 text-left">
              <h2 className="fs-2">
                Agricultural <span className="border-title">Services</span>
              </h2>
            </div>
            <div className="col-4" style={{ textAlign: 'right' }}>
              {/* <h4 className="fs-4">
                <span className="border-title mt-2">See all</span>
              </h4> */}
            </div>
          </div>
          <div className="row mt-4 d-sm-flex justify-content-sm-center">
            {services?.map((element, index) => {
              return (
                <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                  <Link to={'/service/' + element?._id}>
                    <div className="dark-card mt-4">
                      <img
                        src={element?.image}
                        style={{ width: '15.4rem', height: '13rem' }}
                        alt=""
                      />
                      <h2 className=" fs-2 mt-5">{element?.title}</h2>
                      <p
                        className="mt-3 font-dark"
                        style={{
                          fontSize: '2rem',
                          letterSpacing: 1.5,
                          lineHeight: 1.3,
                        }}
                      >
                        {truncate(element?.description, 100)}
                      </p>
                    </div>
                  </Link>
                </div>
              )
            })}
            <div className="col-10 col-lg-4 col-md-6 col-sm-10 gradient-card mt-5  d-flex align-items-center text-center services-card">
              <h2 className=" fs-2 ">
                <Link to="/agricultural-services">
                  All Services <FaArrowRight />
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
