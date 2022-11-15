import Images from "../../../constants/images";
import { Link } from "react-router-dom";
import TradeCard from "../../../components/TradeCard";
import { useEffect, useState } from "react";
import { GET_All_TRADES } from "../../../redux/actions/trades";
import { useSelector, useDispatch } from "react-redux";
export default function Trade() {
  const dispatch = useDispatch();
  const { trades } = useSelector((state) => state.TradesReducers);

  useEffect(() => {
    dispatch(GET_All_TRADES());
  }, []);
  return (
    <>
      <section
        className="trade-section trade-background "
        style={{ background: `url(${Images.Pictures.trade})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 text-left">
              <h2 className=" fs-2 fs-2">
                Trade <span className="border-title"> Products Or Plants</span>
              </h2>
              <p className="mt-3 fs-4">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea.
              </p>
              <Link
                to="/vendor-register"
                className="btn btn-solid btn-solid-primary-rounded px-5  fs-5"
                style={{
                  width: "20rem",
                }}
              >
                Become a Trader
              </Link>
            </div>
          </div>
          <div className="row mt-5">
            {trades?.slice(0, 4).map((element, index) => {
              return (
                <div className="col-lg-6 col-md-6  col-sm-12" key={index}>
                  <TradeCard props={element} image={element?.images[0]} />
                </div>
              );
            })}
            <div className="col-12  text-center my-3">
              <Link
                to="/trades"
                className="btn btn-solid btn-solid-primary-rounded px-5 py-3 mx-auto fs-5"
              >
                View All
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
