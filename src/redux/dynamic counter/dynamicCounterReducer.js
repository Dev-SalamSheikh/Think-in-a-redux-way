import { DECREMENT, INCREMENT } from "./actionTypes";

const initialState = {
  value: 100,
};

const dynamicCounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + action.payload,
      };

    case DECREMENT:
      return {
        ...state,
        value: state.value - action.payload,
      };

    default:
      return state;
  }
};

export default dynamicCounterReducer;
