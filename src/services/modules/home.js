import dexRequest from "..";

export function getHomeGoodPriceData() {
  return dexRequest.get({
    url: "/home/goodprice",
  });
}
