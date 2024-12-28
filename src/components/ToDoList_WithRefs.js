import React, { useState, useRef } from "react";
import { produce } from 'immer';

export default function ToDoList() {
  const [list, setList] = useState([]);
  const addNewItemInput = useRef();

  function showList() {
    return (
      list.map((element, index) => (
        <li key={index}>
          {element}
          <i className="bi bi-trash" onClick={() => {
            setList(produce(list, (draft) => {
              draft.splice(index, 1);
            }));
          }}>
        </i>
        
        </li>
      ))
    );
  }

  return (
    <div id="listWrapper" className="container mt-4">
      <div id="itemsWrapper" className="mb-3">
        {list.length === 0 ? (
          <div className="item bg-light p-3 rounded shadow-sm">
            <p className="text-muted">Your tasks will appear here</p>
          </div>
        ) : (
          <div>
        
              {showList()}

          </div>
        )}
      </div>

      <div id="addNewItemWrapper" className="input-group">
        <input
          type="text"
          ref={addNewItemInput}
          maxLength="30"
          className="form-control"
          placeholder="Add new task"
        />
        <div className="input-group-append">
          <button id="addNewItemBtn" className="btn btn-info" onClick={() => {
            setList(produce(list, (draft) => {
              draft.push(addNewItemInput.current.value);
            }));
            addNewItemInput.current.value = ''; // Clear the input
          }}>
            <i className="fas fa-plus"></i> Add Task
          </button>
        </div>
      </div>
    </div>
  );
}
