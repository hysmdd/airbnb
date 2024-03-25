import React, { memo } from "react";
import { EntireWrapper } from "./style";
import EntireFilter from "./c-cpns/entire-filter";
import EntireRooms from "./c-cpns/entire-rooms";
import EntirePagination from "./c-cpns/entire-pagination";

const Entire = memo(() => {
  return (
    <EntireWrapper>
      <div className="filter">
        <EntireFilter />
      </div>
      <div className="rooms">
        <EntireRooms />
      </div>
      <div className="pagination">
        <EntirePagination />
      </div>
    </EntireWrapper>
  );
});

export default Entire;
