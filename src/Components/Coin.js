import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCoin } from '../actions'
class Coin extends Component {
    componentDidMount() {
        const coinId = this.props.match.params.coinId
        this.props.fetchCoin(coinId)
    }

    render() {
        const { info = {} } = this.props
        if (!info.assetId) {
            return null
        }
        return (
            <div className="list-container">
                <div className="coin-info">
                    <div className="row">
                        <div className="column align-right">
                            <img src={info.imageUrl} alt={info.name} />
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
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCoin: (coinId) => dispatch(fetchCoin(coinId))
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