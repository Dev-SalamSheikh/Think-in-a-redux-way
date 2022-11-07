import { added } from "../actions";

const addTodo = (todoText) => {
  return async (disptach) => {
    const response = await fetch("http://localhost:9000/todos", {
      method: "POST",
      body: JSON.stringify({
        text: todoText,
        completed: false,
      }),
      headers: {
        "Content-type": "application/json; charset = UTF-8",
      },
    });
    const todo = await response.json();

    disptach(added(todo.text));
  };
};

export default addTodo;
