import React from 'react';

const RateContext = React.createContext({
    list: [],
    rate: {
        id: 'united-states-dollar',
        symbol: 'USD',
        currencySymbol: '$',
        multiplier: 1
    },
    setRate: () => { }
})

export { RateContext }