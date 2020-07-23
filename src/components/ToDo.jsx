import React, { useState } from "react";

function ToDo(props) {
  const [clicked, setClickede] = useState(false);

  function handel() {
    setClickede(!clicked);
  }

  return (
    <div style={{ textDecoration: clicked ? "line-through" : "" }}>
      <li>{props.item}</li>
      <button onClick={handel}>done</button>
      <button
        onClick={() => {
          props.onChecked(props.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default ToDo;
