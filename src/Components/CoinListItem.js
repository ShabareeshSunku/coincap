import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Numeral from './Numeral'
export default class CoinListItem extends Component {
    constructor() {
        super()
        this.state = {
            direction: '',
            price: 0
        }
    }
    static getDerivedStateFromProps(props, state) {
        const price = parseFloat(props.coin.price)
        const prevPrice = parseFloat(state.price)
        const diff = prevPrice - price
        const direction = diff > 0 ? 'down' : (diff < 0 ? 'up' : '')
        return {
            price,
            direction
        }
    }

    render() {
        const coin = this.props.coin || {}
        const { multiplier, currencySymbol } = this.props.rate || {}
        return (
            <tr className={this.state.direction}>
                <td className="align-center">{coin.rank}</td>
                <td>
                    <img
                        src={coin.imageUrl}
                        alt={coin.name}
                        className="logo"
                    />
                    <div className="coinName">
                        <Link to={`/coins/${coin.assetId}`}>
                            {coin.name}
                            <span className="symbol">{coin.symbol}</span>
                        </Link>
                    </div>
                </td>
                <td>
                    <Numeral
                        actualValue={coin.price}
                        toFixed={2}
                        multiplier={multiplier}
                        symbol={currencySymbol}
                        abbreviate={false}
                    />
                </td>
                <td>
                    <Numeral
                        actualValue={coin.marketCap}
                        toFixed={2}
                        multiplier={multiplier}
                        symbol={currencySymbol}
                        abbreviate={true}
                    />
                </td>
                <td>
                    <Numeral
                        actualValue={coin.vwap24Hr}
                        toFixed={2}
                        multiplier={multiplier}
                        symbol={currencySymbol}
                        abbreviate={true}
                    />
                </td>
                <td>
                    <Numeral
                        actualValue={coin.supply}
                        toFixed={2}
                        multiplier={1}
                        symbol=''
                        abbreviate={true}
                    />
                </td>
                <td>
                    <Numeral
                        actualValue={coin.volume}
                        toFixed={2}
                        multiplier={multiplier}
                        symbol={currencySymbol}
                        abbreviate={true}
                    />
                </td>
                <td className={coin.change > 0 ? 'increase' : 'decrease'}>
                    <Numeral
                        actualValue={coin.change}
                        toFixed={2}
                        multiplier={1}
                        symbol=''
                        abbreviate={true}
                    />%
                      </td>
            </tr>

        )
    }
}