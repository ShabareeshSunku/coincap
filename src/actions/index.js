import constants from "../constants";
import { processCoinList, processExchangesList, processCoin } from "../helpers";
function fetchCoinList() {
  return {
    type: constants.FETCH_COINLIST,
    async: true,
    reqUrl: "https://api.coincap.io/v2/assets?limit=25",
    transform: processCoinList
  };
}
function fetchExchangesList() {
  return {
    type: constants.FETCH_EXCHANGESLIST,
    async: true,
    reqUrl: "https://api.coincap.io/v2/exchanges?limit=25",
    transform: processExchangesList
  };
}

function fetchCoin(coinId) {
  return {
    type: constants.FETCH_COIN,
    async: true,
    reqUrl: `https://api.coincap.io/v2/assets/${coinId}`,
    transform: processCoin
  }
}

function fetchCoinHistory(coinId, interval = "d1") {
  return {
    type: constants.FETCH_COIN_HISTORY,
    async: true,
    reqUrl: `https://api.coincap.io/v2/assets/${coinId}/history?interval=${interval}`,
    interval: interval
  }
}
export { fetchCoinList, fetchExchangesList, fetchCoin };
