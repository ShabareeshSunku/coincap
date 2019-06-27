import constants from "../constants";
const exchangesListReducer = (state = { loading: false, items: [] }, action) => {
  switch (action.type) {
    case constants.FETCH_EXCHANGESLIST: {
      return {
        loading: true,
        items: []
      };
    }
    case constants.FETCH_EXCHANGESLIST_SUCCESS: {
      return {
        loading: false,
        items: action.exchanges
      };
    }
    case constants.FETCH_EXCHANGESLIST_FAILURE: {
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

export default exchangesListReducer;
