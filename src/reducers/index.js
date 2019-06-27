import { combineReducers } from "redux";
import coinListReducer from "./coinListReducer";
import exchangesListReducer from "./exchangesListReducer";
export default () => {
  return combineReducers({
    coins: coinListReducer,
    exchanges: exchangesListReducer
  });
};
