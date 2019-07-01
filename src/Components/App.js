import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import configureStore from "../store";
import CoinList from "./CoinList";
import ExchangesList from "./ExchangesList";
import Coin from "./Coin";
import Exchange from "./Exchange";
import RateProvider from './RateProvider'
import Header from "./Header";
import "./app.css";
export default () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <RateProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact={true} path="/coins" component={CoinList} />
            <Route exact={true} path="/coins/:coinId" component={Coin} />
            <Route exact={true} path="/exchanges" component={ExchangesList} />
            <Route
              exact={true}
              path="/exchanges/:exchangeId"
              component={Exchange}
            />
          </Switch>
        </BrowserRouter>
      </RateProvider>
    </Provider>
  );
};
