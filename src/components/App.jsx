import React, { useState } from "react";
import ToDo from "./ToDo";
import InputArea from "./InputArea";

function App() {
  const [items, setitems] = useState([]);

  function addItem(todo) {
    todo !== "" && setitems((previusStatus) => [...previusStatus, todo]);
  }

  function deleteItem(id) {
    setitems((previusStatus) =>
      previusStatus.filter((item, index) => index !== id)
    );
  }

  return (
    <div className='container'>
      <div className='heading'>
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
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
