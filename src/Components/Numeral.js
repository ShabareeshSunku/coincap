import { abbrNumber } from '../helpers'

export default (props) => {
    const {
        actualValue,
        toFixed = 2,
        multiplier = 1,
        symbol = '',
        abbreviate = false
    } = props
    const convertedValue = actualValue * (1 / multiplier)
    let returnValue = ''
    if (abbreviate) {
        returnValue = abbrNumber(convertedValue, toFixed)
    } else {
        returnValue = parseFloat(convertedValue).toFixed(toFixed)
    }
    
    return `${symbol}${returnValue}`
}