import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchExchanges } from "../actions";

class Exchanges extends Component {
  componentDidMount() {
    this.props.fetchExchanges();
  }
  render() {
    const exchanges = this.props.exchanges;
    const { items = [], loading = false } = exchanges;
    const headings = [
      "Rank",
      "Name",
      "Trading Pairs",
      "Top Pair",
      "Volume(24Hr)",
      "Total%",
      "Status"
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
              {items.map((item, index) => {
                return (
                  <tr key={"" + index}>
                    <td className="align-center">{item.rank}</td>
                    <td>{item.name}</td>
                    <td>{item.tradingPairs}</td>
                    <td>{item.topPair}</td>
                    <td>${item.volume}</td>
                    <td>{item.totalPercent}</td>
                    <td>{item.status}</td>
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
    exchanges: state.exchanges || {}
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchExchanges: () => dispatch(fetchExchanges())
  };
};
const ConnectedExchanges = connect(
  mapStateToProps,
  mapDispatchToProps
)(Exchanges);

export default ConnectedExchanges;
