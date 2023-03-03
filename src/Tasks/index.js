import React from 'react';
import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => {
   return (
      <ul className="list">
         {tasks.map(task => (
            <li
               key={task.id}
               className={`list__task ${task.done && hideDone ? "list__task--hidden" : ""}`}
            >
               <button
                  className="button button--done"
                  onClick={() => toggleTaskDone(task.id)}>
                  {task.done ? "✓" : ""}
               </button>
               <span className={`${task.done ? "list__taskDone" : ""}`}>
                  {task.content} 
               </span>
               <button
                  className="button button--remove"
                  onClick={() => removeTask(task.id)}>
                  🗑
               </button>
            </li>
         ))
         }
      </ul >
   );
};
export default Tasks;