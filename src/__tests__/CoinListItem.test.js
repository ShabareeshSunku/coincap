import React from 'react';
import { shallow } from 'enzyme'
import CoinListItem from '../Components/CoinListItem'
const coin = {
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
}
const rate = {
    id: 'united-states-dollar',
    symbol: 'USD',
    currencySymbol: '$',
    multiplier: 0.8
}
describe('CoinListItem Component', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<CoinListItem coin={coin} rate={rate} />, {
            disableLifecycleMethods: false
        })
    })
    it('should render without error', () => {
        expect(wrapper.find('tr').length).toBe(1)
    })
    it('should have n <td> elements', () => {
        expect(wrapper.find('tr').children().length).toBe(8)
    })
    it('state.direction should change with price', () => {
        const updatedCoin = Object.assign({}, coin, { price: "11434.05246032" })
        wrapper.setProps({ coin: updatedCoin })
        expect(wrapper.state('direction')).toBe('down')
    })
})