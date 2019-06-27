import constants from "../constants";
import { processAssets } from "../helpers";
import { processExchanges } from "../helpers";
function fetchAssets() {
  return {
    type: constants.FETCH_COINLIST,
    async: true,
    reqUrl: "https://api.coincap.io/v2/assets?limit=25",
    transform: processAssets
  };
}
function fetchExchanges() {
  return {
    type: constants.FETCH_EXCHANGESLIST,
    async: true,
    reqUrl: "https://api.coincap.io/v2/exchanges?limit=25",
    transform: processExchanges
  };
}

export { fetchAssets, fetchExchanges };
