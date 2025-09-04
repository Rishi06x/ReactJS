// import { useState } from "react";
import useCounter from "./useCounter";

function Counter() {
    const [ count, increment, decrement, reset ] = useCounter();

    return (
        <div className="h-screen flex flex-col justify-center items-center gap-4">
            <h1>Count: {count}</h1>
            <button onClick={increment} className="border-1 p-1">Increment</button>
            <button onClick={decrement} className="border-1 p-1">Decrement</button>
            <button onClick={reset} className="border-1 p-1">Reset</button>
        </div>
    );
}

export default Counter;