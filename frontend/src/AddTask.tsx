import { useState } from "react";

interface AddTaskProps {
  onAdd: (title: string) => void;
}

function AddTask({ onAdd }: AddTaskProps) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Нова задача"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Додати</button>
    </form>
  );
}
export default AddTask;
