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
        case constants.UPDATE_PRICE: {
            const payload = action.payload
            const items = state.items.slice(0)
            for (let i = 0; i < items.length; i++) {
                let ithItem = items[i]
                if (typeof payload[ithItem.assetId] !== 'undefined') {
                    items[i].price = payload[ithItem.assetId]
                }
            }
            return Object.assign({}, state, { items })
        }
        default: return state
    }
}

export default coinListReducer