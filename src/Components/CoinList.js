import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCoinList } from "../actions";
import { Link } from "react-router-dom";
import Numeral from './Numeral'
import { RateContext } from './RateContext'

class CoinList extends Component {
  componentDidMount() {
    this.props.fetchCoinList();
  }
  render() {
    const coins = this.props.coins;
    const { items = [], loading = false } = coins;
    const { rate = {} } = this.context
    const { currencySymbol, multiplier } = rate
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
                  return (
                    <tr key={item.assetId}>
                      <td className="align-center">{item.rank}</td>
                      <td>
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="logo"
                        />
                        <div className="coinName">
                          <Link to={`/coins/${item.assetId}`}>
                            {item.name}
                            <span className="symbol">{item.symbol}</span>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <Numeral
                          actualValue={item.price}
                          toFixed={2}
                          multiplier={multiplier}
                          symbol={currencySymbol}
                          abbreviate={false}
                        />
                      </td>
                      <td>
                        <Numeral
                          actualValue={item.marketCap}
                          toFixed={2}
                          multiplier={multiplier}
                          symbol={currencySymbol}
                          abbreviate={true}
                        />
                      </td>
                      <td>
                        <Numeral
                          actualValue={item.vwap24Hr}
                          toFixed={2}
                          multiplier={multiplier}
                          symbol={currencySymbol}
                          abbreviate={true}
                        />
                      </td>
                      <td>
                        <Numeral
                          actualValue={item.supply}
                          toFixed={2}
                          multiplier={1}
                          symbol=''
                          abbreviate={true}
                        />
                      </td>
                      <td>
                        <Numeral
                          actualValue={item.volume}
                          toFixed={2}
                          multiplier={multiplier}
                          symbol={currencySymbol}
                          abbreviate={true}
                        />
                      </td>
                      <td className={item.change > 0 ? 'increase' : 'decrease'}>
                        <Numeral
                          actualValue={item.change}
                          toFixed={2}
                          multiplier={1}
                          symbol=''
                          abbreviate={true}
                        />%
                      </td>
                    </tr>
                  );
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
    fetchCoinList: () => dispatch(fetchCoinList())
  };
};
const ConnectedCoinList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CoinList);

export default ConnectedCoinList;
