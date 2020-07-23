import React, { useState } from "react";

function InputArea(props) {
  const [todo, setTodo] = useState("");
  function hndelChange(e) {
    setTodo(e.target.value);
  }
  return (
    <div className='form'>
      <input onChange={hndelChange} type='text' value={todo} />
      <button
        onClick={() => {
          props.onAdd(todo);
          setTodo("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
