import React, { memo } from "react";
import Pagination from "@mui/material/Pagination";
import { PaginationWrapper } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentPageAction, fetchRoomListAction } from "@/store/modules/entire/actionCreators";

const EntirePagination = memo(() => {
  const dispatch = useDispatch();
  const { totalCount, currentPage, roomList } = useSelector((state) => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
    roomList: state.entire.roomList,
  }));
  // 分页算法
  const totalPage = Math.ceil(totalCount / 20);
  const startCount = currentPage * 20 + 1;
  const endCount = (currentPage + 1) * 20;
  //事件处理的逻辑
  function pageChangeHandle(event, pageCount) {
    // dispatch(changeCurrentPageAction(pageCount - 1));
    dispatch(fetchRoomListAction(pageCount - 1))
  }
  return (
    <PaginationWrapper>
      {!!roomList.length && (
        <div className="info">
          <Pagination count={totalPage} onChange={pageChangeHandle} />
          <div className="desc">
            第 {startCount} - {endCount} 个房源，共超过 {totalCount} 个
          </div>
        </div>
      )}
    </PaginationWrapper>
  );
});

export default EntirePagination;
