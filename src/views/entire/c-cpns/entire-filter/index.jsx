import React, { memo, useEffect, useState } from "react";
import { FilterWrapper } from "./style";
import filterData from "@/assets/data/filter_data.json";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { fetchRoomListAction } from "@/store/modules/entire/actionCreators";

const EntireFilter = memo((props) => {
  const dispatch = useDispatch();
  const [selectItems, setSelectItems] = useState([]);

  useEffect(() => {
    dispatch(fetchRoomListAction());
  }, [dispatch]);

  function itemClickHandle(item) {
    const newItems = [...selectItems];
    if (newItems.includes(item)) {
      newItems.splice(newItems.indexOf(item), 1);
    } else {
      newItems.push(item);
    }
    setSelectItems(newItems);
  }
  return (
    <FilterWrapper>
      <div className="filter">
        {filterData.map((item, index) => {
          return (
            <div
              className={classNames("item", {
                active: selectItems.includes(item),
              })}
              key={item}
              onClick={(e) => itemClickHandle(item)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </FilterWrapper>
  );
});

export default EntireFilter;
