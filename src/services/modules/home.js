import dexRequest from "..";

export function getHomeGoodPriceData() {
  return dexRequest.get({
    url: "/home/goodprice",
  });
}

export function getHomeHighScoreData() {
  return dexRequest.get({
    url: "/home/highscore",
  });
}

export function getHomeDiscountData() {
  return dexRequest.get({
    url: "/home/discount",
  });
}
