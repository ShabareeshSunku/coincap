//custom middleware which intercepts all the actions
//and check if any data fetch is required based on some flags and appropriately handles

const fetcher = (store) => (next) => action => {
    if (!action.async || !action.reqUrl) {
        return next(action)
    }
    next(action)
    fetch(action.reqUrl)
        .then((res) => res.json())
        .then((jsonResponse) => {
            if (jsonResponse.error) {
                return next({ ...action, type: action.type + '_FAILURE' })
            }
            let data = {}
            if (action.transform) {
                data = action.transform(jsonResponse.data)
            }
            const newActionType = action.type + '_SUCCESS'
            return next({ ...action, type: newActionType, ...data })
        })
}

export default fetcher