import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCoinList } from "../actions";
import { Link } from "react-router-dom";
class CoinList extends Component {
  componentDidMount() {
    this.props.fetchCoinList();
  }
  render() {
    const coins = this.props.coins;
    const { items = [], loading = false } = coins;
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
                    <td>${item.price}</td>
                    <td>${item.marketCap}</td>
                    <td>${item.vwap24Hr}</td>
                    <td>{item.supply}</td>
                    <td>${item.volume}</td>
                    <td>{item.change}</td>
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
