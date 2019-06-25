import { combineReducers } from "redux";
import assetsReducer from "./assetsReducer";
import exchangesReducer from "./exchangesReducer";
export default () => {
  return combineReducers({
    assets: assetsReducer,
    exchanges: exchangesReducer
  });
};
