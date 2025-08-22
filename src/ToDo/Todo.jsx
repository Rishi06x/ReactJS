import { useState } from "react";

function Todo() {
  const [task, setTask] = useState([]);
  const [inputValue, setInput] = useState("");

  const addTask = () => {
    const trimmedInput = inputValue.trim();
    if (trimmedInput !== "") {
      setTask([...task, trimmedInput]);
      setInput("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = task.filter((_, i) => i !== index);
    setTask(newTasks);
  };

  const editTask = (index) => {
    const newValue = prompt("Edit the task:", task[index]);
    if (newValue === null || newValue.trim() === "") return;
    const newTasks = task.map((t, i) => (i === index ? newValue : t));
    setTask(newTasks);
  };

  return (
    <div className="h-screen flex justify-center bg-gray-100 p-4 box-border">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold underline p-4 text-center">ToDo List</h1>

        <div className="flex w-full items-center justify-center">
          <input
            type="text"
            className="border p-2 m-2 flex-1 rounded"
            placeholder="Add a task"
            value={inputValue}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") addTask();
            }}
          />
          <button
            onClick={addTask}
            className="border-2 p-2 m-2 rounded bg-blue-500 text-white hover:bg-blue-600"
          >
            Add Task
          </button>
        </div>

        <ul className="list-none w-full bg-white rounded shadow">
          {task.map((t, index) => (
            <li
              key={index}
              className="mt-2 border-2 p-2 flex justify-between items-center rounded"
            >
              {t}
              <div className="flex gap-2">
                <button
                  onClick={() => deleteTask(index)}
                  className="border-2 p-1 rounded bg-red-500 text-white hover:bg-red-600"
                >
                  Del
                </button>
                <button
                  onClick={() => editTask(index)}
                  className="border-2 p-1 rounded bg-amber-500 text-white hover:bg-amber-600"
                >
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
