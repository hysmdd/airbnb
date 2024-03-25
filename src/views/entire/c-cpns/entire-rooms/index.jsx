import React, { memo } from "react";
import { RoomsWrapper } from "./style";
import { useSelector } from "react-redux";
import RoomItem from "@/components/room-item";

const EntireRooms = memo(() => {
  const { roomList, totalCount } = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
  }));
  return (
    <RoomsWrapper>
      <h2 className="title">{totalCount}多处住所</h2>
      <div className="list">
        {roomList.map((item, index) => {
          return <RoomItem key={item.id} itemData={item} itemWidth="20%" />;
        })}
      </div>
    </RoomsWrapper>
  );
});

export default EntireRooms;
