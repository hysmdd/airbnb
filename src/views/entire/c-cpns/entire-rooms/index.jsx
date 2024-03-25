import React, { memo } from "react";
import { RoomsWrapper } from "./style";
import { shallowEqual, useSelector } from "react-redux";
import RoomItem from "@/components/room-item";

const EntireRooms = memo(() => {
  const { roomList, totalCount, isLoading } = useSelector(
    (state) => ({
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      isLoading: state.entire.isLoading,
    }),
    shallowEqual
  );
  return (
    <RoomsWrapper>
      <h2 className="title">{totalCount}多处住所</h2>
      <div className="list">
        {roomList.map((item) => {
          return <RoomItem key={item._id} itemData={item} itemWidth="20%" />;
        })}
      </div>
      {isLoading && <div className="modal"></div>}
    </RoomsWrapper>
  );
});

export default EntireRooms;
