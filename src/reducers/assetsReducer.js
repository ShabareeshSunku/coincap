import constants from '../constants'
const assetsReducer = (state = { loading: false, items: [] }, action) => {
    switch (action.type) {
        case constants.FETCH_ASSETS: {
            return {
                loading: true,
                items: []
            }
        }
        case constants.FETCH_ASSETS_SUCCESS: {
            return {
                loading: false,
                items: action.assets
            }
        }
        case constants.FETCH_ASSETS_FAILURE: {
            return {
                loading: false,
                items: [],
                error: 'Something went wrong'
            }
        }
        default: return state
    }
}

export default assetsReducer