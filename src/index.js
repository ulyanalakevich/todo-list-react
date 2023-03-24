import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './GlobalStyle';
import { configureStore } from '@reduxjs/toolkit';
const initialState = {
  tasks: [],
};

const tasksReducer = (state = initialState, action) => {

// switch (action.type) {
 // case "addTask":
// }
if(action.type === "addTodo") {
  return {
      ...state,
      tasks: [
          ...state.tasks,
          {
              content: action.payload,
          },
      ],
  };
  // default: 
  // return state;
}

return state;
};

const addTask = content => ({
  type: "addTodo",
  payload:content,
});

const selectTasks = ({tasks}) => tasks;

const store = configureStore({reducer: tasksReducer});
console.log(selectTasks(store.getState()));

store.dispatch(addTask("zadanie 1"));
console.log(selectTasks(store.getState()));

store.dispatch(addTask("zadanie 2"));
console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
