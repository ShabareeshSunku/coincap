import constants from '../constants'

export default (state = {}, action) => {
    switch (action.type) {
        case constants.FETCH_COIN_HISTORY: {
            return {
                loading: true,
                start: action.start,
                end: action.end,
                timespan: action.timespan
            }
        }
        case constants.FETCH_COIN_HISTORY_SUCCESS: {
            return Object.assign({}, state, { data: action.data, loading: false })
        }
        case constants.FETCH_COIN_HISTORY_FAILURE: {
            return Object.assign({}, state, { loading: false, error: 'something went wrong' })
        }
        default: return state
    }
}