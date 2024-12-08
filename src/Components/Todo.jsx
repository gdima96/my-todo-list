import React from 'react';
import './Todo.css';
import { LuListTodo } from 'react-icons/lu';
import { IoIosAddCircle } from 'react-icons/io';
import { MdDeleteOutline } from 'react-icons/md';
import { TbPointFilled } from 'react-icons/tb';

const Todo = () => {
  return (
    <div className="main">
      <div className="main-header">
        <LuListTodo className="todo-icon" />
        <h1>Todo List</h1>
      </div>
      <div className="task">
        <input
          className="todo-input"
          type="text"
          placeholder="Add a New Task..."
        />
        <IoIosAddCircle className="add-icon" />
      </div>

      <div className="lists">
        <input type="checkbox" name="" id="" />
        <input type="text" readOnly />
        <MdDeleteOutline className="delete-icon" />
      </div>
      <hr />
      <div className="summary">
        <p>0 todo</p>
        <TbPointFilled />
        <p>0 completed</p>
      </div>
    </div>
  );
};

export default Todo;
