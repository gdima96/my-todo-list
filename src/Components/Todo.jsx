import React, { useState } from 'react';
import './Todo.css';
import { LuListTodo } from 'react-icons/lu';
import { IoIosAddCircle } from 'react-icons/io';
import { MdDeleteOutline } from 'react-icons/md';
import { TbPointFilled } from 'react-icons/tb';

const Todo = () => {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);

  const addTask = () => {
    if (task.trim() != '') {
      setList([...list, task]);
      setTask('');
    }

    console.log([...list]);
  };

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
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <IoIosAddCircle className="add-icon" onClick={addTask} />
      </div>
      <div className="lists">
        {list.map((task, index) => {
          return (
            <div key={index} className="Alllists">
              <input type="checkbox" name="" id="" />
              <input type="text" readOnly value={task} />
              <MdDeleteOutline className="delete-icon" />
            </div>
          );
        })}
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
