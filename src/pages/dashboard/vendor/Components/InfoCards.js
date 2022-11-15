import React, { useState } from "react";
import InfoCard from "./InfoCard";
import { ReactComponent as FilterIcon } from "../../../../assets/images/icons/filter-icon.svg";
import FilterProp from "./FilterProp";

const InfoCards = ({ data, activeCard, setActiveCard }) => {
  const [showFilterProp, setShowFilterProp] = useState(false);

  return (
    <>
      <div className="infocard-container">
        {data.map((data) => {
          return activeCard === data.topText ? (
            <InfoCard
              topText={data.topText}
              bottomText={data.bottomText}
              active
            />
          ) : (
            <InfoCard topText={data.topText} bottomText={data.bottomText} />
          );
        })}
      </div>
      <div
        className="so-top-filtericon"
        onClick={() => setShowFilterProp(!showFilterProp)}
      >
        <FilterIcon width={20} />
      </div>
      {showFilterProp && <FilterProp />}
    </>
  );
};

export default InfoCards;
