import { useState, useCallback, memo } from "react";

const Child = memo(function Child({ onClick }) {
  console.log("Child rendered");
  return <button onClick={onClick}>Click Child</button>;
});

function Demo() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Child clicked, count is:", count);
  }, [count]);

  const expensiveValue = () => {
    console.log("Expensive calculation running...");
    let total = 0;
    for (let i = 0; i < 100000000; i++) {
      total += i;
    }
    return total + number;
    }

  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Number: {number}</h1>

      <button onClick={() => setCount((c) => c + 1)}>Increment Count</button><br />
      <button onClick={() => setNumber((n) => n + 1)}>Increment Number</button><br />

      <p>Expensive Value: {expensiveValue()}</p>

      <Child onClick={handleClick} />
    </div>
  );
}

export default Demo;
