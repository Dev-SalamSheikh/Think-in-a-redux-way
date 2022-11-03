import { applyMiddleware, createStore } from "redux";
import myLogger from "./middleware/myLogger";
import rootReducer from "./rootReducer";
import logger from "redux-logger";

const store = createStore(rootReducer, applyMiddleware(logger, myLogger));

export default store;
