import React, { useState } from "react";
import ToDo from "./ToDo";

function App() {
  const [todo, setTodo] = useState("");
  const [items, setitems] = useState([]);

  function hndelChange(e) {
    setTodo(e.target.value);
  }

  function addItem() {
    todo !== "" && setitems(previusStatus => [...previusStatus, todo]);
    setTodo("");
  }

  function deleteItem(id) {
    setitems(previusStatus =>
      previusStatus.filter((item, index) => index !== id)
    );
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={hndelChange} type="text" value={todo} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <ToDo key={index} id={index} onChecked={deleteItem} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
