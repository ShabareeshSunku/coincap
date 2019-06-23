import { combineReducers } from 'redux'
import assetsReducer from './assetsReducer'

export default () => {
    return combineReducers({
        assets: assetsReducer
    })
}