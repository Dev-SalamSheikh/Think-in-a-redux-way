import { edittitle } from "../actions";

const updateTodo = (todoId, newText, setEdit) => {
  return async (disptach) => {
    const res = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        text: newText,
      }),
      headers: {
        "Content-type": "application/json; charset = UTF-8",
      },
    });

    const todo = await res.json();

    disptach(edittitle(todo.id, todo.text));
    setEdit(false);
  };
};

export default updateTodo;
