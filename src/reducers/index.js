import { combineReducers } from "redux";
import coinListReducer from "./coinListReducer";
import exchangesListReducer from "./exchangesListReducer";
import coinInfoReducer from './coinInfoReducer'
export default () => {
  return combineReducers({
    coins: coinListReducer,
    exchanges: exchangesListReducer,
    coinInfo: coinInfoReducer
  });
};
