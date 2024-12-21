import React, { useState } from 'react';
import './Todo.css';
import { LuListTodo } from 'react-icons/lu';
import { IoIosAddCircle } from 'react-icons/io';
import { MdDeleteOutline } from 'react-icons/md';
import { TbPointFilled } from 'react-icons/tb';

const Todo = () => {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);
  const [todo, setTodo] = useState(0);
  const [completed, setCompleted] = useState(0);

  const todoCount =(action)=>{
if( action === 'add'){setTodo(todo+1)}
else if( action === 'delete' && todo >0 ) {setTodo(todo-1)}
  }
  const completedCount =(action)=>{
    if( action === 'add'){setCompleted(completed+1)}
    else if( action === 'remove' && completed >0 ) {setCompleted(completed-1)}
      }

  const addTask = () => {
    if (task.trim() != '') {
      setList([...list, task]);
      setTask('');
    }
    todoCount('add')
  };

  const markCompleted=()=>{
    completedCount('add')
    // mark uncompleted should result to decreasing completed counter ???
  }
  // console.log(list);

  const deleteTask = (taskIndex) => {
    const newList = list.filter((_, index) => index !== taskIndex);
    setList(newList);
    todoCount('delete')
    completedCount('remove')
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
            <div key={index} className="allLists">
              <input type="checkbox" name="" id="" onClick={markCompleted} />
              <input type="text" readOnly value={task} />
              <MdDeleteOutline
                className="delete-icon"
                onClick={() => deleteTask(index)}
                // Find solution: checkmark doesn't dissapear once the task is deleted. Suggestion: Task ID ?????
              />
            </div>
          );
        })}
      </div>
      <hr />
      <div className="summary">
        <p>{todo} todo</p>
        <TbPointFilled />
        <p>{completed} completed</p>
      </div>
    </div>
  );
};

export default Todo;
