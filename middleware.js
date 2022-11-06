const fetch = require("node-fetch");

// Delayed Middleware

const delayedMiddleware = (store) => (next) => (action) => {
  if (action.type === "todos/todoAdded") {
    console.log("I am Delaying You Bitch!");
    setTimeout(() => {
      next(action);
    }, 3000);
    return;
  }

  return next(action);
};

// Fetch Todos Middleware

const fetchDataFromServer = (store) => (next) => async (action) => {
  if (typeof action === "function") {
    return action(store.dispatch, store.getState);
  }

  return next(action);
};

module.exports = {
  delayedMiddleware,
  fetchDataFromServer,
};
