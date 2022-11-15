import Images from "../../../constants/images";

export default function Delevery() {
  return (
    <>
      <div
        className="container delivery-section "
        style={{ margin: "9rem auto" }}
      >
        <div
          className="col-12"
          style={{
            textAlign: "left",
            position: "relative",
          }}
        >
          <img
            src={Images.Pictures.greenRightUpLeaf}
            style={{
              position: "absolute",
              top: "3rem",
              right: "-9rem",
              width: "15rem",
              zIndex: "-1",
            }}
            alt="greenRightUpLeaf"
          ></img>
          <img
            src={Images.Pictures.greenRightUpLeaf}
            style={{
              position: "absolute",
              bottom: "-6rem",
              left: "-9rem",
              width: "15rem",
              zIndex: "-1",
            }}
            alt="greenRightUpLeaf"
          ></img>
          <div className="row">
            <div className="col-8 text-left">
              <h2 className="fs-2">
                Delivery <span className="border-title">Services</span>
              </h2>
            </div>
            <div className="col-4" style={{ textAlign: "right" }}>
              {/* <h4 className="fs-4">
                <span className="border-title mt-2">See all</span>
              </h4> */}
            </div>
          </div>
          <div
            className="row mt-4 delivery-card-container"
            style={{
              textAlign: "left",
            }}
          >
            {Images.Pictures.delevery.map((element, index) => {
              return (
                <div
                  className="col-lg-3 col-md-6 col-sm-12 delivery-card"
                  key={index}
                >
                  <div className="dark-card mt-4">
                    <img
                      src={element}
                      style={{ width: "10.7rem", height: "11.4rem" }}
                      alt=""
                    />
                    <p
                      className="mt-2 font-dark"
                      style={{
                        letterSpacing: 1.5,
                        lineHeight: 1.5,
                      }}
                    >
                      Lorem ipsum dolor sit amet, consetetur sadipscing fgsed
                      diam umy.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
