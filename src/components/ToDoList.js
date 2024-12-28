import React, { useState, useRef } from "react";
import { produce } from 'immer';

export default function ToDoList() {
  const [list, setList] = useState([]);
  const [formData,setFormData] = useState({task:""});


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

  function handleChange(e){
    const name = e.target.name
    const value = e.target.value
    setFormData((prevData)=>({
      ...prevData,
      [name]:value
    }))
  }

  function handleSubmit(e){
   e.preventDefault();
   if(!formData.task.trim()) return ;
    setList(produce(list,(draft)=>{
    draft.push(formData.task)
   }))
   setFormData({task:""})
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

      <form id="addNewItemWrapper" className="input-group" onSubmit={handleSubmit}>
        <input
          type="text"
          maxLength="30"
          className="form-control"
          placeholder="Add new task"
          name="task"
          onChange={handleChange}
        />
        <div className="input-group-append">
          <button id="addNewItemBtn" className="btn btn-info" type="submit" >
            <i className="fas fa-plus"></i> Add Task
          </button>
        </div>
      </form>
    </div>
  );
}
