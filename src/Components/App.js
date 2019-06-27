import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import configureStore from "../store";
import Assets from "./Assets";
import Exchanges from "./Exchanges";
import Coin from "./Coin";
import ExchangeCoin from "./ExchangeCoin";
import Header from "./Header";
import "./app.css";

export default () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact={true} path="/assets" component={Assets} />
          <Route exact={true} path="/assets/:assetId" component={Coin} />
          <Route exact={true} path="/exchanges" component={Exchanges} />
          <Route
            exact={true}
            path="/exchanges/:exchangeId"
            component={ExchangeCoin}
          />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};
