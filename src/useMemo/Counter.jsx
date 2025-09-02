import { useState, useMemo } from "react";

function Counter(){
    const [count, setCount] = useState(100000000);
    const [text, setText] = useState('');
    const squaring = useMemo(() => {
        let squared;
        for(let i=0; i<=count; i++){
            squared = Math.pow(i, 2);
        }
        console.log('Squared',squared);
        return squared;
    }, [count]);

    return(
        <div className="flex flex-col items-center">
            <h4>Count - {count}</h4>
            <h4>Squared - {squaring}</h4>
            <h4>Text - {text}</h4>

            <button onClick={() => setCount(count + 5)}>Increment Count</button> <br /><br />

            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Type here..." />
        </div>
    );
}

export default Counter