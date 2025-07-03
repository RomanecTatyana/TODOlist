import { Task } from "./types";

function TaskList({ tasks }: { tasks: Task[] }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.title} {task.completed ? "(✓)" : ""}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
