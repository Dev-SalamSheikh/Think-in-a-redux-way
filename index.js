const { createStore, applyMiddleware } = require("redux");
const { delayedMiddleware, fetchTodoFromServer } = require("./middleware");

// Initial State
const initialState = {
  todos: [],
};

// Reducer
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todos/todoAdded":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            title: action.payload,
          },
        ],
      };

    case "todos/todoLoaded":
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
      };

    default:
      break;
  }
};

// Creating Store
const store = createStore(
  todoReducer,
  applyMiddleware(delayedMiddleware, fetchTodoFromServer)
);

// Subscribing Store
store.subscribe(() => {
  console.log(store.getState());
});

// Dispatching Actions
// store.dispatch({
//   type: "todos/todoAdded",
//   payload: "Learn with Sumit Vai",
// });

// Have to dispatch a fake action to call api
store.dispatch({
  type: "todos/fetchTodos",
});
