import { useState } from "react";
import { useDispatch } from "react-redux";
import tickImage from "../assets/images/double-tick.png";
import noteImage from "../assets/images/notes.png";
import plusImage from "../assets/images/plus.png";
import { added, allcompleted, clearcompleted } from "../redux/todos/actions";

export default function Header() {
  // Disptach Function
  const disptach = useDispatch();

  // States
  const [input, setInput] = useState("");

  //   Handle input
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  //   Form Submitting
  const submitHandler = (e) => {
    e.preventDefault();
    disptach(added(input));
    setInput("");
  };

  // Complete All function
  const completeHandler = () => {
    disptach(allcompleted());
  };

  // Clear Completed function
  const clearHandler = () => {
    disptach(clearcompleted());
  };

  return (
    <div>
      <form
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        onSubmit={submitHandler}
      >
        <img src={noteImage} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          value={input}
          onChange={handleInput}
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer" onClick={completeHandler}>
          <img className="w-4 h-4" src={tickImage} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={clearHandler}>
          Clear completed
        </li>
      </ul>
    </div>
  );
}
