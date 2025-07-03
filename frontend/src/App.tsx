import "./styles.css";
import TaskList from "./TaskList";
import AddTask from "./AddTask";
import { useState } from "react";
import { Task } from "./types";

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Купити хліб", completed: false },
    { id: 2, title: "Помити машину", completed: true },
  ]);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: tasks.length + 1,
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <h1>TODO List</h1>
      <AddTask onAdd={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
