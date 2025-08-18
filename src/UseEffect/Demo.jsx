import { useState, useEffect } from "react";

function Demo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  const handleClick = () => {
    setCount(c => c + 1);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-2 box-border bg-gray-100">
      <p className="text-xl mb-4">Count: {count}</p>
      <button onClick={handleClick} className="border-2 border-b-gray-500 p-1">Increment</button>
    </div>
  );
}

export default Demo;
