import React, { useEffect, useRef, useState } from "react";

const EditForm = ({ todoText, handleSubmit }) => {
  const [text, setText] = useState(todoText || "");
  const focusInput = useRef();
  useEffect(() => {
    if (focusInput.current) {
      focusInput.current.focus();
    }
  }, [focusInput]);
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e, text)}>
        <input
          type="text"
          ref={focusInput}
          className="focus:outline-none focus:bg-transparent w-full"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
    </div>
  );
};

export default EditForm;
