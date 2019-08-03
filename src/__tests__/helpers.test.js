import { processCoinList, processCoin, processExchangesList, processCoinHistory, abbrNumber } from '../helpers'

const coinListMock = [{ "id": "bitcoin", "rank": "1", "symbol": "BTC", "name": "Bitcoin", "supply": "17833575.0000000000000000", "maxSupply": "21000000.0000000000000000", "marketCapUsd": "178726775535.4699808212764900", "volumeUsd24Hr": "6576536582.9421380379100058", "priceUsd": "10021.9263684073429372", "changePercent24Hr": "-2.3446939690666684", "vwap24Hr": "10135.9248452182911382" }, { "id": "ethereum", "rank": "2", "symbol": "ETH", "name": "Ethereum", "supply": "107019652.1240000000000000", "maxSupply": null, "marketCapUsd": "22704921743.3568432983256706", "volumeUsd24Hr": "2142946644.6911915809063679", "priceUsd": "212.1565646377679240", "changePercent24Hr": "-1.4760358265832596", "vwap24Hr": "214.2330964435728628" }, { "id": "ripple", "rank": "3", "symbol": "XRP", "name": "XRP", "supply": "42832704971.0000000000000000", "maxSupply": "100000000000.0000000000000000", "marketCapUsd": "13273148414.3178526807508153", "volumeUsd24Hr": "328601262.6322863506211281", "priceUsd": "0.3098834972786443", "changePercent24Hr": "-2.4818117654853840", "vwap24Hr": "0.3159417798877903" }]
const historyMock = [{ "priceUsd": "9596.1458322208468691", "time": 1563321600000, "date": "2019-07-17T00:00:00.000Z" }, { "priceUsd": "10067.8049747830851174", "time": 1563408000000, "date": "2019-07-18T00:00:00.000Z" }, { "priceUsd": "10487.4592613145577358", "time": 1563494400000, "date": "2019-07-19T00:00:00.000Z" }, { "priceUsd": "10689.0656592893457750", "time": 1563580800000, "date": "2019-07-20T00:00:00.000Z" }, { "priceUsd": "10587.5608352864257851", "time": 1563667200000, "date": "2019-07-21T00:00:00.000Z" }, { "priceUsd": "10468.2066641144659385", "time": 1563753600000, "date": "2019-07-22T00:00:00.000Z" }]
describe('helpers testing', () => {
    it('should return formatted coinList', () => {
        const coins = processCoinList(coinListMock)
        expect(coins).toMatchSnapshot()
    })

    it('should return formatted history', () => {
        const history = processCoinHistory(historyMock)
        expect(history).toMatchSnapshot()
    })

    it('should return abbreviated Number', () => {
        const abbrNo = abbrNumber('1000', 2)
        expect(abbrNo).toBe('1K')
    })
})