import React from "react";

const FilterProp = (props) => {
  return (
    <div>
      <div className="filter-prop">
        <p>New To Old</p>
        <p>Old To New</p>
        {!props.featured && (
          <>
            <p>Price Low To High</p>
            <p>Price High To Low</p>
          </>
        )}
      </div>
    </div>
  );
};

export default FilterProp;
