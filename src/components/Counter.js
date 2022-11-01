import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/counter/actions";

export default function Counter() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const Increment = (value) => {
    dispatch(increment(value));
  };

  const Decrement = (value) => {
    dispatch(decrement(value));
  };

  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{count}</div>
      <div className="flex space-x-3">
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          onClick={() => Increment(5)}
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          onClick={() => Decrement(2)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
