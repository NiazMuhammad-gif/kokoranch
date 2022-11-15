import React, { useState } from "react";
import NavBar from "./NavBar";
import InfoCard from "./Components/InfoCard";
import InfoCards from "./Components/InfoCards";
import {
  vendorServiceOrders,
  infoCardData,
} from "../../../DummyData/vendorData";

import SearchInput from "./Components/SearchInput";
import Table from "./Components/Table";

const ServiceOrders = ({ setSidebar, sidebar }) => {
  const [activeCard, setActiveCard] = useState(infoCardData[0].topText);
  const [activeStatus, setActiveStatus] = useState(
    infoCardData[0].topText.split(" ")[0].toLowerCase()
  );
  const tableTHead = [
    "Order No.",
    "User ID",
    "Date",
    "Amount Paid",
    "Status",
    "Action",
  ];
  return (
    <div className="">
      <NavBar
        setSidebar={setSidebar}
        sidebar={sidebar}
        title="Service Orders"
      />
      <div className="so-top">
        <div class="infocard-container">
          {infoCardData.map((data) => {
            return activeCard === data.topText ? (
              <InfoCard
                topText={data.topText}
                bottomText={data.bottomText}
                active
                onClickFunction={() => {
                  setActiveCard(data.topText);
                  console.log("data", data.topText.split(" ")[0]);
                }}
              />
            ) : (
              <InfoCard
                topText={data.topText}
                bottomText={data.bottomText}
                onClickFunction={() => {
                  setActiveCard(data.topText);
                  setActiveStatus(data.topText.split(" ")[0].toLowerCase());
                }}
              />
            );
          })}
        </div>
      </div>
      <div className="bg-black-pad my-5">
        <div className="headsear-container">
          <h3 className="ven-h-to mb-5">{activeCard}</h3>
          <div className="ven-so-sandi">
            <SearchInput />
          </div>
        </div>
        <Table tHeadData={tableTHead} activeCard={activeStatus} />
      </div>
    </div>
  );
};

export default ServiceOrders;
