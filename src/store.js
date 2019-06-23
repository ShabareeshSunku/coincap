import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import promiseMiddleware from './middlewares/promiseMiddleware'
import loggerMiddleware from './middlewares/loggerMiddleware'
export default function configureStore() {
    const store = createStore(rootReducer(), {}, composeWithDevTools(applyMiddleware(promiseMiddleware, loggerMiddleware)))
    return store
}