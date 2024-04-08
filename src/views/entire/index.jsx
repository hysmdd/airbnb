import React, { memo, useEffect } from "react";
import { EntireWrapper } from "./style";
import EntireFilter from "./c-cpns/entire-filter";
import EntireRooms from "./c-cpns/entire-rooms";
import EntirePagination from "./c-cpns/entire-pagination";
import { useDispatch } from "react-redux";
import { changeHeaderConfigAction } from "@/store/modules/main";

const Entire = memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: true }));
  }, [dispatch]);

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
