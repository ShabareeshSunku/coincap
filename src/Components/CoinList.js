import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCoinList, updatePrice } from "../actions";
import { RateContext } from './RateContext'
import CoinListItem from './CoinListItem'
class CoinList extends Component {
  constructor() {
    super()
    this.state = {
      connected: false
    }
    this.socket = null
  }
  componentDidMount() {
    this.props.fetchCoinList();
  }

  componentDidUpdate(prevProps, prevState) {
    const me = this
    const coins = me.props.coins;
    const items = coins.items
    let coinNames = ''
    if (me.state.connected === false && items.length > 0) {
      for (let i = 0; i < items.length; i++) {
        coinNames += items[i].assetId
        if (i !== items.length - 1) {
          coinNames += ','
        }
      }
      const socketUrl = `wss://ws.coincap.io/prices?assets=${coinNames}`
      me.socket = new WebSocket(socketUrl)
      me.socket.onopen = function () {
        console.log('socket connection opened')
      }
      me.socket.onclose = function(){
        console.log('connection closed')
      }
      me.socket.onmessage = function (msg) {
        me.props.updatePrice(JSON.parse(msg.data))
      }
      me.setState({
        connected: true
      })
    }
  }

  componentWillUnmount = () => {
    this.socket.close()
  };
  
  render() {
    const coins = this.props.coins;
    const { items = [], loading = false } = coins;
    const { rate = {} } = this.context
    const headings = [
      "Rank",
      "Name",
      "Price",
      "Market Cap",
      "VWAP(24Hr)",
      "Supply",
      "Volume(24Hr)",
      "Change(24Hrs)"
    ];
    return (
      <div className="list-container">
        {loading ? (
          <div className="loader" />
        ) : (
            <table>
              <thead>
                <tr>
                  {headings.map((heading, index) => (
                    <th
                      className={heading === "Rank" ? "align-center" : ""}
                      key={"" + index}
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
                {items.map(item => {
                  return <CoinListItem coin={item} rate={rate} key={item.assetId} />
                })}
              </thead>
            </table>
          )}
      </div>
    );
  }
}
CoinList.contextType = RateContext
const mapStateToProps = (state = {}) => {
  return {
    coins: state.coins || {}
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchCoinList: () => dispatch(fetchCoinList()),
    updatePrice: (payload) => dispatch(updatePrice(payload))
  };
};
const ConnectedCoinList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CoinList);

export default ConnectedCoinList;
