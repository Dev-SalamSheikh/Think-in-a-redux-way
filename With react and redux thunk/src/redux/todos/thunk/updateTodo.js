import { update } from "../actions";

const updateTodo = (todoId, updatedValue) => {
  return async (disptach) => {
    await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        text: updatedValue,
      }),
      headers: {
        "Content-type": "application/json; charset = UTF-8",
      },
    });

    disptach(update(todoId, update));
  };
};

export default updateTodo;
