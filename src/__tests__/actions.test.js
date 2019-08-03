import {
    fetchCoinList,
    fetchExchangesList,
    fetchCoin,
    fetchCoinHistory
} from '../actions'
import constants from "../constants"
describe('Action creator testing', () => {
    it('should return fetchCoinList Action', () => {
        const action = fetchCoinList()
        expect(action.type).toBe(constants.FETCH_COINLIST)
    })

    it('should return fetchExchangesList Action', () => {
        const action = fetchExchangesList()
        expect(action.type).toBe(constants.FETCH_EXCHANGESLIST)
    })

    it('should return fetchCoin Action', () => {
        const coinId = 'bitcoin'
        const action = fetchCoin(coinId)
        expect(action.type).toBe(constants.FETCH_COIN)
        expect(action.reqUrl).toBe(`https://api.coincap.io/v2/assets/${coinId}`)
    })

    describe('fetchCoinHistory testing with diff attrs', () => {
        it('should return fetchCoinHistory Action', () => {
            const coinId = 'bitcoin'
            const action = fetchCoinHistory(coinId, '1D')
            expect(action.type).toBe(constants.FETCH_COIN_HISTORY)
        })
        it('should return appropriate reqUrl for a timespan', () => {
            const coinId = 'bitcoin'
            const action = fetchCoinHistory(coinId, '1W')
            expect(action.reqUrl).toBe(`https://api.coincap.io/v2/assets/${coinId}/history?interval=h12&start=${action.start}&end=${action.end}`)
        })
    })
})