import { useState } from "react";

export default function TaskListWidget() {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");

  const addTask = () => {
    if (value.trim()) {
      setTasks([...tasks, { text: value, id: Date.now() }]);
      setValue("");
    }
  };

  return (
    <div>
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Новая задача"
      />
      <button onClick={addTask}>Добавить</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
}