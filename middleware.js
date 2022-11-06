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

const fetchTodoFromServer = (store) => (next) => async (action) => {
  if (action.type === "todos/fetchTodos") {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );

    const todos = await response.json();

    store.dispatch({
      type: "todos/todoLoaded",
      payload: todos,
    });

    console.log(`Number of updated todos: ${store.getState().todos.length}`);

    return;
  }

  return next(action);
};

module.exports = {
  delayedMiddleware,
  fetchTodoFromServer,
};
