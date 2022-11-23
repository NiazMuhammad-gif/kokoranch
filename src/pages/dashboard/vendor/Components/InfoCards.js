import React, { useState } from "react";
import InfoCard from "./InfoCard";
import { ReactComponent as FilterIcon } from "../../../../assets/images/icons/filter-icon.svg";
import FilterProp from "./FilterProp";

const InfoCards = ({
  data,
  activeCard,
  setActiveCard,
  featured1,
  sortData,
  setSortData,
}) => {
  const [showFilterProp, setShowFilterProp] = useState(false);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div className="infocard-container">
          {data.map((data, index) => {
            return activeCard === data.topText ? (
              <InfoCard
                key={index}
                topText={data.topText}
                bottomText={data.bottomText}
                active
                setActiveCard={setActiveCard}
              />
            ) : (
              <InfoCard
                key={index}
                topText={data.topText}
                bottomText={data.bottomText}
                setActiveCard={setActiveCard}
              />
            );
          })}
        </div>
        <FilterIcon
          width={20}
          onClick={() => setShowFilterProp(!showFilterProp)}
        />
      </div>
      <div
        className="so-top-filtericon"
        onClick={() => setShowFilterProp(!showFilterProp)}
      ></div>
      {showFilterProp && (
        <FilterProp
          featured1={featured1}
          sortData={sortData}
          setSortData={setSortData}
        />
      )}
    </>
  );
};

export default InfoCards;
