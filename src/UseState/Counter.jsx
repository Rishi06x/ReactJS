import React, {useState} from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const Increment = () => setCount(count + 1);
    const Decrement = () => setCount(count - 1);
    const Reset = () => setCount(0);
    
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="w-32 text-center text-white bg-cyan-500 p-2">Counter: {count}</h1>
            <div className="flex gap-2 mt-8">
                <button className="w-28 bg-emerald-400 pt-1 pb-1 pl-2 pr-2" onClick={() => Increment()}>Increment</button>
                <button className="w-28 bg-emerald-400 pt-1 pb-1 pl-2 pr-2" onClick={() => Decrement()}>Decrement</button>
                <button className="w-28 bg-emerald-400 pt-1 pb-1 pl-2 pr-2" onClick={() => Reset()}>Reset</button>
            </div>
        </div>
    );

}

export default Counter;