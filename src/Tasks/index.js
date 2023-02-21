import React from 'react';
import "./style.css";


const deleteTask = (name) => {
   console.log(`Nazwa zadania do usunięcia: ${name}`);
}
const Tasks = ({tasks, hideDone}) => {
   return (
      <ul className="list">
         {tasks.map(task => (
            <li 
            key={task.id} 
            className={`list__task${task.done && hideDone ? "list__task--hidden" : ""}`}
            >
            <button className="button button--done">
             {task.done ? "✓" : ""} 
             </button>
             <span className={`${task.done ? "list__taskDone" : ""}`}>
             {task.content}
             </span>
             <button 
             className="button button--remove" onClick={() => deleteTask(task.content)}> 
             🗑
             </button>
            </li>
   ))
}
   </ul >
);
};
export default Tasks;