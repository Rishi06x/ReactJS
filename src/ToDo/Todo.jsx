import { useState } from "react";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInput] = useState("");

  const addTask = () => {
    const trimmedInput = inputValue.trim();
    if (trimmedInput !== "") {
      setTasks([...tasks, { text: trimmedInput, done: false }]); 
      setInput("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const editTask = (index) => {
    const newValue = prompt("Edit the task:", tasks[index].text);
    if (newValue === null || newValue.trim() === "") return;
    setTasks(tasks.map((t, i) => (i === index ? { ...t, text: newValue } : t)));
  };

  const toggleTask = (index) => {
    setTasks(
      tasks.map((t, i) =>
        i === index ? { ...t, done: !t.done } : t
      )
    );
  };

  return (
    <div className="h-screen flex justify-center bg-gray-100 p-4 box-border">
      <div className="w-full max-w-md border-2 pt-4 pb-4 pr-10 pl-10 rounded-md">
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
          {tasks.map((t, index) => (
            <li
              key={index}
              className={`mt-2 border-2 p-2 flex justify-between items-center rounded cursor-pointer ${
                t.done ? "bg-gray-300" : ""
              }`}
              onClick={() => toggleTask(index)}
            >
             <span className={t.done ? "line-through" : ""}>{t.text}</span>
              <div className="flex gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteTask(index);
                  }}
                  className="border-2 p-1 rounded bg-red-500 text-white hover:bg-red-600"
                >
                  Del
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    editTask(index);
                  }}
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
