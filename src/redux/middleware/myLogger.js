import rootReducer from "../rootReducer";

// Create our first middleware
const myLogger = (store) => (next) => (action) => {
  console.log(`Action: ${JSON.stringify(action)}`);
  console.log(`Current State: ${JSON.stringify(store.getState())}`);

  const upcomingState = [action].reduce(rootReducer, store.getState());
  console.log(`Upcoming State : ${JSON.stringify(upcomingState)}`);

  return next(action);
};

export default myLogger;
