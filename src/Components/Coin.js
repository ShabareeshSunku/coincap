import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCoin, fetchCoinHistory } from '../actions';
import ChartWrapper from './ChartWrapper';
import Numeral from './Numeral';
import { RateContext } from './RateContext';
import { Redirect } from 'react-router-dom'
class Coin extends Component {
    constructor() {
        super()
        const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn') || '')
        this.state = {
            isLoggedIn: isLoggedIn || false
        }
    }
    componentDidMount() {
        const coinId = this.props.match.params.coinId
        this.props.fetchCoin(coinId)
        this.props.fetchCoinHistory(coinId, '1D')
    }

    updateTimeSpan = (timespan) => {
        const coinId = this.props.match.params.coinId
        this.props.fetchCoinHistory(coinId, timespan)
    }
    render() {
        const { info = {}, history = {} } = this.props
        const { rate = {} } = this.context
        if (!info.assetId) {
            return null
        }
        return (
            <div>
                {
                    !this.state.isLoggedIn ? <Redirect to='/' /> : null
                }
                <div className="coin-info">
                    <div className="wrapper">
                        <div className="row">
                            <div className="column">
                                <div className="rank-container">
                                    <span className="rank-text">{info.rank}</span>
                                    RANK
                                </div>
                            </div>
                            <div className="column">
                                {info.name} ({(info.symbol || '').toUpperCase()})
                            <h3>
                                    <Numeral
                                        actualValue={info.price}
                                        toFixed={2}
                                        multiplier={rate.multiplier}
                                        symbol={rate.currencySymbol}
                                        abbreviate={false}
                                    />
                                    <span className={`span-change ${info.change > 0 ? 'increase' : 'decrease'}`}>
                                        <Numeral
                                            actualValue={info.change}
                                            toFixed={2}
                                            multiplier={1}
                                            symbol=''
                                            abbreviate={true}
                                        />%
                                    </span>
                                </h3>
                            </div>
                            <div className="column">
                                Market Cap
                                <h3>
                                    <Numeral
                                        actualValue={info.marketCap}
                                        toFixed={2}
                                        multiplier={rate.multiplier}
                                        symbol={rate.currencySymbol}
                                        abbreviate={true}
                                    />
                                </h3>
                            </div>
                            <div className="column">
                                Volume (24Hr)
                                <h3>
                                    <Numeral
                                        actualValue={info.volume}
                                        toFixed={2}
                                        multiplier={rate.multiplier}
                                        symbol={rate.currencySymbol}
                                        abbreviate={true}
                                    />
                                </h3>
                            </div>
                            <div className="column">
                                Supply
                                <h3>
                                    <Numeral
                                        actualValue={info.supply}
                                        toFixed={2}
                                        multiplier={1}
                                        symbol=''
                                        abbreviate={true}
                                    />
                                    &nbsp;{(info.symbol || '').toUpperCase()}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wrapper">
                    {history.data && history.data.length ? (
                        <ChartWrapper
                            updateTimeSpan={this.updateTimeSpan}
                            data={history.data}
                            multiplier={rate.multiplier}
                        />) : null
                    }
                </div>
            </div>
        )
    }
}

Coin.contextType = RateContext
const mapDispatchToProps = (dispatch) => {
    return {
        fetchCoin: (coinId) => dispatch(fetchCoin(coinId)),
        fetchCoinHistory: (coinId, timespan) => dispatch(fetchCoinHistory(coinId, timespan))
    }
}
const mapStateToProps = (state) => {
    return {
        info: state.coinInfo,
        history: state.coinHistory
    }
}
const ConnectedCoin = connect(mapStateToProps, mapDispatchToProps)(Coin)
export default ConnectedCoin