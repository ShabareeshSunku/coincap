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
function processCoinList(coins = []) {
  //variable to hold the formatted(processed) data
  let formattedCoins = [];
  let coinsLen = coins.length;
  for (let i = 0; i < coinsLen; i++) {
    let ithCoin = coins[i];
    let processedIthCoin = processCoin(ithCoin)
    formattedCoins.push(processedIthCoin.coin);
  }
  return {
    coins: formattedCoins
  };
}

function processExchangesList(exchanges = []) {
  let formattedExchanges = [];
  let exchangeLen = exchanges.length;
  for (let i = 0; i < exchangeLen; i++) {
    let ithExchange = exchanges[i];
    formattedExchanges.push({
      name: ithExchange.name,
      rank: ithExchange.rank,
      tradingPairs: ithExchange.tradingPairs,
      volume: abbrNumber(ithExchange.volumeUsd, 2),
      totalPercent: parseFloat(ithExchange.percentTotalVolume).toFixed(2),
      exchangeId: ithExchange.exchangeId
    });
  }
  return {
    exchanges: formattedExchanges
  };
}

function processCoin(ithCoin) {
  let symbol = ithCoin.symbol.toLowerCase()
  let processedIthCoin = {
    assetId: ithCoin.id,
    name: ithCoin.name,
    rank: ithCoin.rank,
    symbol: symbol,
    supply: ithCoin.supply,
    marketCap: ithCoin.marketCapUsd,
    volume: ithCoin.volumeUsd24Hr,
    price: ithCoin.priceUsd,
    vwap24Hr: ithCoin.vwap24Hr,
    change: ithCoin.changePercent24Hr,
    imageUrl: `https://static.coincap.io/assets/icons/${symbol}@2x.png`
  }
  return {
    coin: processedIthCoin
  }
}

function processCoinHistory(response = []) {
  const respLen = response.length
  const data = []
  for (let i = 0; i < respLen; i++) {
    let ithResp = response[i]
    data.push([ithResp.time, ithResp.priceUsd])
  }
  return { data }
}
export { processCoinList, processCoin, processExchangesList, processCoinHistory, abbrNumber };
