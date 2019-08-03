import createStore from 'redux-mock-store'
import fetchMock from 'fetch-mock'
import promiseMiddleware from '../middlewares/promiseMiddleware'
import { fetchCoinList } from '../actions'
const mockStore = createStore([promiseMiddleware])

describe('Async actions', () => {
    it('sample action', () => {
        fetchMock.get('https://api.coincap.io/v2/assets?limit=25', {
            body: { "data": [{ "id": "bitcoin", "rank": "1", "symbol": "BTC", "name": "Bitcoin", "supply": "17831612.0000000000000000", "maxSupply": "21000000.0000000000000000", "marketCapUsd": "187316136338.2670158699769032", "volumeUsd24Hr": "5424232361.9545123761618438", "priceUsd": "10504.7225308775794286", "changePercent24Hr": "-1.5023937846355219", "vwap24Hr": "10530.7704878207655279" }], "timestamp": 1563794177415 },
            headers: { 'content-type': 'application/json' }
        })
        const store = mockStore({})
        store.dispatch(fetchCoinList())
        fetchMock.flush(true).then(() => {
            console.log(JSON.stringify(store.getActions()))
        })
    })
})