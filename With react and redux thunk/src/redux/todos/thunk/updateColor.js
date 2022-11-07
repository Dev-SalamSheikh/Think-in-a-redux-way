import { colorSelected } from "../actions";

const updateColor = (todoId, color) => {
  return async (disptach) => {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        color: color,
      }),
      headers: {
        "Content-type": "application/json; charset = UTF-8",
      },
    });
    const todo = await response.json();

    disptach(colorSelected(todo.id, color));
  };
};

export default updateColor;
