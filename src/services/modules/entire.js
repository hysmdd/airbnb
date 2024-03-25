import dexRequest from "..";

export function getEntireRoomList(offset = 0, size = 20) {
  return dexRequest.get({
    url: "/entire/list",
    params: {
      offset,
      size,
    },
  });
}
