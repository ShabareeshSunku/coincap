import constants from '../constants'
export default (state = { loading: false }, action) => {
    switch (action.type) {
        case constants.FETCH_COIN: {
            return { loading: true }
        }
        case constants.FETCH_COIN_SUCCESS: {
            return {
                loading: false,
                ...action.coin
            }
        }
        case constants.FETCH_COIN_FAILURE: {
            return {
                loading: false,
                error: 'Something went wrong'
            }
        }
        default: return state
    }
}