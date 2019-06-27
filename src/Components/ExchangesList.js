import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchExchangesList } from "../actions";
import { Link } from "react-router-dom";

class ExchangesList extends Component {
  componentDidMount() {
    this.props.fetchExchangesList();
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
    fetchExchangesList: () => dispatch(fetchExchangesList())
  };
};
const ConnectedExchangesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExchangesList);

export default ConnectedExchangesList;
