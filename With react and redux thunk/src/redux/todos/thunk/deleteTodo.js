import { deleted } from "../actions";

const deleteTodo = (todoId) => {
  return async (disptach) => {
    await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "DELETE",
    });

    disptach(deleted(todoId));
  };
};

export default deleteTodo;
