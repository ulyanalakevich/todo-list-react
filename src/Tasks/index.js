import React from 'react';
import "./style.css";

const Tasks = ({tasks, hideDoneTasks}) => (
   <ul className="list">
      {tasks.map(task => (
         <li key={task.id} 
         className={`list__task
         ${task.done && hideDoneTasks ? "list__task--hidden" : ""}`}
         >
         <button className="button button--done">
          {task.done ? "✓" : ""} 
          </button>
          <span className={`${task.done ? "list__taskDone" : ""}`}>
          {task.content}
          </span>
          <button className="button button--remove"> 
          🗑
          </button>
         </li>
))}
   </ul >
);

export default Tasks;