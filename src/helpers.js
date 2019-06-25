function abbrNumber(actual, fixed) {
  const num = parseFloat(actual);
  if (num === null) {
    return null;
  } // terminate early
  if (num === 0) {
    return "0";
  } // terminate early
  fixed = !fixed || fixed < 0 ? 0 : fixed; // number of decimal places to show
  var b = num.toPrecision(2).split("e"), // get power
    k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3), // floor at decimals, ceiling at trillions
    c =
      k < 1
        ? num.toFixed(0 + fixed)
        : (num / Math.pow(10, k * 3)).toFixed(1 + fixed), // divide by power
    d = c < 0 ? c : Math.abs(c), // enforce -0 is 0
    e = d + ["", "K", "M", "B", "T"][k]; // append power
  return e;
}
/**
 * Function to process Assets
 * @param {Array} assets assets from the coincap API
 * @returns {Array} properly formatted asset data pushed into an array
 */
function processAssets(assets = []) {
  //variable to hold the formatted(processed) data
  let formattedAssets = [];
  let assetLen = assets.length;
  for (let i = 0; i < assetLen; i++) {
    let ithAsset = assets[i];
    let symbol = ithAsset.symbol.toLowerCase()
    formattedAssets.push({
      assetId: ithAsset.id,
      name: ithAsset.name,
      rank: ithAsset.rank,
      symbol: symbol,
      supply: abbrNumber(ithAsset.supply, 2),
      marketCap: abbrNumber(ithAsset.marketCapUsd, 2),
      volume: abbrNumber(ithAsset.volumeUsd24Hr, 2),
      price: parseFloat(ithAsset.priceUsd).toFixed(2),
      vwap24Hr: abbrNumber(ithAsset.vwap24Hr, 2),
      change: parseFloat(ithAsset.changePercent24Hr).toFixed(2),
      imageUrl: `https://static.coincap.io/assets/icons/${symbol}@2x.png`
    });
  }
  return {
    assets: formattedAssets
  };
}

function processExchanges(exchanges = []) {
  let formattedExchanges = [];
  let exchangeLen = exchanges.length;
  for (let i = 0; i < exchangeLen; i++) {
    let ithExchange = exchanges[i];
    formattedExchanges.push({
      name: ithExchange.name,
      rank: ithExchange.rank,
      tradingPairs: ithExchange.tradingPairs,
      volume: abbrNumber(ithExchange.volumeUsd, 2),
      totalPercent: parseFloat(ithExchange.percentTotalVolume).toFixed(2)
    });
  }
  return {
    exchanges: formattedExchanges
  };
}
export { processAssets, processExchanges };
