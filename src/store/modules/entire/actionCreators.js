import { getEntireRoomList } from "@/services/modules/entire";
import * as actionTypes from "./constants";

export const changeCurrentPageAction = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage,
});

export const changeRoomListAction = (roomList) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList,
});

export const changeIsLoadingAction = (isLoading) => ({
  type: actionTypes.CHANGE_IS_LOADING,
  isLoading,
});

export const changeTotalCountAction = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount,
});

export const fetchRoomListAction = (page = 0) => {
  return async (dispatch) => {
    dispatch(changeCurrentPageAction(page));
    // const currentPage = getState().entire.currentPage;

    dispatch(changeIsLoadingAction(true));
    const res = await getEntireRoomList(20 * page);
    dispatch(changeIsLoadingAction(false));

    const totalCount = res.totalCount;
    const roomList = res.list;

    dispatch(changeRoomListAction(roomList));
    dispatch(changeTotalCountAction(totalCount));
  };
};
