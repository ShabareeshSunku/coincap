import coinListReducer from '../reducers/coinListReducer'
import constants from '../constants'
const mockData = [
    {
        assetId: "bitcoin",
        change: "-1.6994402035535415",
        imageUrl: "https://static.coincap.io/assets/icons/btc@2x.png",
        marketCap: "203673685083.7309565318955528",
        name: "Bitcoin",
        price: "9999.8464975467185821",
        rank: "1",
        supply: "17815587.0000000000000000",
        symbol: "btc",
        volume: "7424264067.3823410559876028",
        vwap24Hr: "11590.9752852888921784"
    },
    {
        assetId: "etherium",
        change: "-1.6994402035535415",
        imageUrl: "https://static.coincap.io/assets/icons/btc@2x.png",
        marketCap: "203673685083.7309565318955528",
        name: "Etherium",
        price: "211.7874179184439855",
        rank: "2",
        supply: "17815587.0000000000000000",
        symbol: "eth",
        volume: "7424264067.3823410559876028",
        vwap24Hr: "11590.9752852888921784"
    },
    {
        assetId: "litecoin",
        change: "-1.6994402035535415",
        imageUrl: "https://static.coincap.io/assets/icons/btc@2x.png",
        marketCap: "203673685083.7309565318955528",
        name: "Litecoin",
        price: "90.0882172673255369",
        rank: "3",
        supply: "17815587.0000000000000000",
        symbol: "ltc",
        volume: "7424264067.3823410559876028",
        vwap24Hr: "11590.9752852888921784"
    }
]
const updatedMockData = [
    {
        assetId: "bitcoin",
        change: "-1.6994402035535415",
        imageUrl: "https://static.coincap.io/assets/icons/btc@2x.png",
        marketCap: "203673685083.7309565318955528",
        name: "Bitcoin",
        price: "10011.90751024",
        rank: "1",
        supply: "17815587.0000000000000000",
        symbol: "btc",
        volume: "7424264067.3823410559876028",
        vwap24Hr: "11590.9752852888921784"
    },
    {
        assetId: "etherium",
        change: "-1.6994402035535415",
        imageUrl: "https://static.coincap.io/assets/icons/btc@2x.png",
        marketCap: "203673685083.7309565318955528",
        name: "Etherium",
        price: "212.09928697",
        rank: "2",
        supply: "17815587.0000000000000000",
        symbol: "eth",
        volume: "7424264067.3823410559876028",
        vwap24Hr: "11590.9752852888921784"
    },
    {
        assetId: "litecoin",
        change: "-1.6994402035535415",
        imageUrl: "https://static.coincap.io/assets/icons/btc@2x.png",
        marketCap: "203673685083.7309565318955528",
        name: "Litecoin",
        price: "90.0882172673255369",
        rank: "3",
        supply: "17815587.0000000000000000",
        symbol: "ltc",
        volume: "7424264067.3823410559876028",
        vwap24Hr: "11590.9752852888921784"
    }
]
describe('coinlist Reducers testing', () => {
    it('should return default state', () => {
        expect(coinListReducer(undefined, {})).toStrictEqual({ loading: false, items: [] })
    })

    it('should handle FETCH_COINLIST Action', () => {
        expect(coinListReducer({}, { type: constants.FETCH_COINLIST })).toStrictEqual({
            loading: true,
            items: []
        })
    })

    it('should handle FETCH_COINLIST_SUCCESS Action', () => {
        expect(coinListReducer({}, { type: constants.FETCH_COINLIST_SUCCESS, coins: mockData })).toStrictEqual({
            loading: false,
            items: mockData
        })
    })

    it('should handle FETCH_COINLIST_FAILURE Action', () => {
        expect(coinListReducer({}, { type: constants.FETCH_COINLIST_FAILURE })).toStrictEqual({
            loading: false,
            items: [],
            error: 'Something went wrong'
        })
    })

    it('should update price of coins on UPDATE_PRICE', () => {
        const newState = coinListReducer({ items: mockData, loading: false }, { type: constants.UPDATE_PRICE, payload: { "bitcoin": "10011.90751024", "etherium": "212.09928697" } })
        expect(newState).toStrictEqual({
            loading: false,
            items: updatedMockData
        })
    })
})