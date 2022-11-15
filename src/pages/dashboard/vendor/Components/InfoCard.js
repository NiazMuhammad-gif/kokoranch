import React from "react";

const InfoCard = ({
  topText = "Top Text",
  bottomText = "22",
  active,
  onClickFunction = () => null,
}) => {
  return (
    <div
      className={`vendor-infocard ${active && "border-primary"}`}
      onClick={() => onClickFunction()}
    >
      <h5>{topText}</h5>
      <div className="infocard-divider"></div>
      <h3>{bottomText}</h3>
    </div>
  );
};

export default InfoCard;
