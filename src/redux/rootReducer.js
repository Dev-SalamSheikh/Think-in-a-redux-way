import { combineReducers } from "redux";
import dynamicCounterReducer from "./dynamic counter/dynamicCounterReducer";
import counterReducer from "./counter/counterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  dynamicCounter: dynamicCounterReducer,
});

export default rootReducer;
