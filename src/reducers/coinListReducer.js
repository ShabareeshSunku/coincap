import constants from '../constants'
const coinListReducer = (state = { loading: false, items: [] }, action) => {
    switch (action.type) {
        case constants.FETCH_COINLIST: {
            return {
                loading: true,
                items: []
            }
        }
        case constants.FETCH_COINLIST_SUCCESS: {
            return {
                loading: false,
                items: action.coins
            }
        }
        case constants.FETCH_COINLIST_FAILURE: {
            return {
                loading: false,
                items: [],
                error: 'Something went wrong'
            }
        }
        default: return state
    }
}

export default coinListReducer