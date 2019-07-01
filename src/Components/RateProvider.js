import React, { Component } from 'react';
import { RateContext } from './RateContext'

export default class RateProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            rate: {
                id: 'united-states-dollar',
                symbol: 'USD',
                currencySymbol: '$',
                multiplier: 1
            }
        }
    }
    setRate = (rate = {}) => {
        if (rate.id) {
            this.setState({
                rate: rate
            })
        }
    }
    componentDidMount() {
        const me = this
        fetch('https://api.coincap.io/v2/rates')
            .then(resp => resp.json())
            .then(jsonResp => {
                me.setState({
                    list: jsonResp.data
                })
            })
            .catch(err => console.log(err))
    }
    render() {
        const contextObj = {
            list: this.state.list,
            rate: this.state.rate,
            setRate: this.setRate
        }
        return (
            <RateContext.Provider value={contextObj}>
                {this.props.children}
            </RateContext.Provider>
        )
    }
}