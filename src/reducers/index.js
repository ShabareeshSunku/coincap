import { combineReducers } from "redux";
import coinListReducer from "./coinListReducer";
import exchangesListReducer from "./exchangesListReducer";
import coinInfoReducer from './coinInfoReducer'
import coinHistoryReducer from './coinHistoryReducer'

export default () => {
  return combineReducers({
    coins: coinListReducer,
    exchanges: exchangesListReducer,
    coinInfo: coinInfoReducer,
    coinHistory: coinHistoryReducer
  });
};
