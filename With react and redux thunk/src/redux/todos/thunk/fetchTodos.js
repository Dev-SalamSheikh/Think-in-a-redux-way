import { loaded } from "../actions";

const fetchTodos = async (disptach) => {
  const response = await fetch("http://localhost:9000/todos");
  const todos = await response.json();

  disptach(loaded(todos));
};

export default fetchTodos;
