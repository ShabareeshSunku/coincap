import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchExchanges } from "../actions";
import { Link } from "react-router-dom";

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
      "Volume(24Hr)",
      "Total%"
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
                  <tr key={item.exchangeId}>
                    <td className="align-center">{item.rank}</td>
                    <td>
                      <Link to={`/exchanges/${item.exchangeId}`}>
                        {item.name}
                      </Link>
                    </td>
                    <td>{item.tradingPairs}</td>
                    <td>${item.volume}</td>
                    <td>{item.totalPercent}</td>
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
