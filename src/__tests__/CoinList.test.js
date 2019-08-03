import React from 'react'
import { CoinList } from '../Components/CoinList'
import { shallow } from 'enzyme'
import CoinListItem from '../Components/CoinListItem'
import sinon from 'sinon'

const loadingData = {
    loading: true,
    items: []
}
const noData = {
    loading: false,
    items: []
}
const fullData = {
    loading: false,
    items: [
        {
            assetId: "bitcoin",
            change: "-1.6994402035535415",
            imageUrl: "https://static.coincap.io/assets/icons/btc@2x.png",
            marketCap: "203673685083.7309565318955528",
            name: "Bitcoin",
            price: "11434.15246032",
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
            price: "11434.15246032",
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
            price: "11434.15246032",
            rank: "3",
            supply: "17815587.0000000000000000",
            symbol: "ltc",
            volume: "7424264067.3823410559876028",
            vwap24Hr: "11590.9752852888921784"
        }
    ]
}
describe('Testing CoinList Component', () => {
    it('should show a loader when loading is progress', () => {
        let wrapper = shallow(<CoinList coins={loadingData} />)
        expect(wrapper.find('.loader').length).toBe(1)
        expect(wrapper.find('table').length).toBe(0)
    })
    it('should render only table header', () => {
        let wrapper = shallow(<CoinList coins={noData} />)
        expect(wrapper.find('tbody').children().length).toBe(0)
    })
    it('should have n children for n items', () => {
        let wrapper = shallow(<CoinList coins={fullData} />)
        let items = wrapper.find('tbody').children()
        let count = 0
        items.forEach(item => {
            let itemType = item.type()
            if (itemType === CoinListItem) {
                count++
            }
        })
        expect(count).toBe(3)
    })

    it('should invoke fetchCoinList on componentDidMount', () => {
        const fetchCoinList = sinon.spy()

        const wrapper = shallow(<CoinList coins={fullData} fetchCoinList={fetchCoinList} />, {
            disableLifecycleMethods: false
        })
        expect(fetchCoinList.calledOnce).toBe(true)
    })
})