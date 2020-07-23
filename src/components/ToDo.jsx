import React, { useState } from "react";

function ToDo(props) {
  const [clicked, setClickede] = useState(false);

  function handel() {
    setClickede(!clicked);
  }

  return (
    <div style={{ textDecoration: clicked ? "line-through" : "" }}>
      <li>{props.item}</li>
      <button onClick={handel}>
        <span>&#10004;</span>
      </button>
      <button
        onClick={() => {
          props.onChecked(props.id);
        }}
      >
        <span>&#10008;</span>
      </button>
    </div>
  );
}

export default ToDo;
