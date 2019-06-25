import constants from "../constants";
const exchangesReducer = (state = { loading: false, items: [] }, action) => {
  switch (action.type) {
    case constants.FETCH_EXCHANGES: {
      return {
        loading: true,
        items: []
      };
    }
    case constants.FETCH_EXCHANGES_SUCCESS: {
      return {
        loading: false,
        items: action.exchanges
      };
    }
    case constants.FETCH_EXCHANGES_FAILURE: {
      return {
        loading: false,
        items: [],
        error: "Something went wrong"
      };
    }
    default:
      return state;
  }
};

export default exchangesReducer;
