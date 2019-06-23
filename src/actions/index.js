import constants from '../constants'
import { processAssets } from '../helpers'
function fetchAssets() {
    return {
        type: constants.FETCH_ASSETS,
        async: true,
        reqUrl: 'https://api.coincap.io/v2/assets?limit=25',
        transform: processAssets
    }
}

export {
    fetchAssets
}