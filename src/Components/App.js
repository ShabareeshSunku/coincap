import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import configureStore from '../store'
import Assets from './Assets'
import Home from './Exchanges'
import Header from './Header'
import './app.css'


export default () => {
    const store = configureStore()
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Route path='/Assets' component={Assets} />
                <Route path='/Exchanges' component={Home} />
            </BrowserRouter>
        </Provider>
    )
}