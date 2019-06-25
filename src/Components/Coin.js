import React, { Component } from 'react';

export default class Coin extends Component {
    render() {
        console.log('===>Requested Asset', this.props.match.params.assetId)
        return <h1>I am coin page</h1>
    }
}