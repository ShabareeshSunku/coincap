import React from 'react';
import { Provider } from 'react-redux'
import configureStore from '../store'
import Assets from './Assets'
import './app.css'


export default () => {
    const store = configureStore()
    return (
        <Provider store={store}>
            <Assets />
        </Provider>
    )
}