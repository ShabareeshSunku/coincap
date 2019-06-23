const loggerMiddleware = (store) => (next) => (action) => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('updated state', store.getState())
    console.groupEnd()
    return result
}

export default loggerMiddleware