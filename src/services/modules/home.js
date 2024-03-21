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

export function getHomeHotRecommendData() {
  return dexRequest.get({
    url: "/home/hotrecommenddest",
  });
}

export function getHomeLongForData() {
  return dexRequest.get({
    url: "/home/longfor",
  });
}

export function getHomePlusData() {
  return dexRequest.get({
    url: "/home/plus",
  });
}
