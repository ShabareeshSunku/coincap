import constants from "../constants";
import { processCoinList, processExchangesList, processCoin, processCoinHistory } from "../helpers";
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

function fetchCoinHistory(coinId, timespan) {
  let start, end, interval, multiplier = 1;
  if (timespan === '1D') {
    multiplier = 1
    interval = 'h1'
  } else if (timespan === '1W') {
    multiplier = 7
    interval = 'h12'
  } else if (timespan === '1M') {
    multiplier = 30
    interval = 'd1'
  }
  end = (new Date()).valueOf()
  start = end - (24 * 3600 * 1000 * multiplier)
  return {
    type: constants.FETCH_COIN_HISTORY,
    async: true,
    reqUrl: `https://api.coincap.io/v2/assets/${coinId}/history?interval=${interval}&start=${start}&end=${end}`,
    timespan: timespan,
    start,
    end,
    interval,
    transform: processCoinHistory
  }
}

function updatePrice(payload) {
  return {
    type: constants.UPDATE_PRICE,
    payload
  }
}
export { fetchCoinList, fetchExchangesList, fetchCoin, fetchCoinHistory, updatePrice };
