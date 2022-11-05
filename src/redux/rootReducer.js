import todoReducer from "./todos/reducer";
import filterReducer from "./filters/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer,
});

export default rootReducer;
