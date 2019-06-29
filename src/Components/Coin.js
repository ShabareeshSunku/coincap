import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCoin, fetchCoinHistory } from '../actions'
import ChartWrapper from './ChartWrapper'
class Coin extends Component {
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
        if (!info.assetId) {
            return null
        }
        return (
            <div>
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
                                    {info.price}
                                    <span className={`span-change ${info.change > 0 ? 'increase' : 'decrease'}`}>{info.change} %</span>
                                </h3>
                            </div>
                            <div className="column">
                                Market Cap
                            <h3>{info.marketCap}</h3>
                            </div>
                            <div className="column">
                                Volume (24Hr)
                            <h3>{info.volume}</h3>
                            </div>
                            <div className="column">
                                Supply
                            <h3>{info.supply} {(info.symbol || '').toUpperCase()}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wrapper">
                    {history.data && history.data.length ? <ChartWrapper updateTimeSpan={this.updateTimeSpan} data={history.data} /> : null}
                </div>
            </div>
        )
    }
}

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