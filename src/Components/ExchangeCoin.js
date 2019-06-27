import React, { Component } from "react";

export default class ExchangeCoin extends Component {
  render() {
    console.log("===>Requested Exchange", this.props.match.params.exchangeId);
    return <h1>I am in exchangecoin page</h1>;
  }
}
