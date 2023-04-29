import { useState, useEffect } from "react";

const DEFAULT_TASKS = [
  { id: 1, content: "przejść na Reacta", done: false },
  { id: 2, content: "zjeść kolację", done: true },
];

export const useTasks = () => {
  const tasksLocalStorage = localStorage.getItem("tasks");
  const [tasks, setTasks] = useState(
    JSON.parse(tasksLocalStorage) || DEFAULT_TASKS
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
};
