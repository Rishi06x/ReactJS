import { useEffect, useState, useRef } from "react"

function Timer(){
    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(true);
    const timerRef = useRef(null);
    

    useEffect(() => {

        if(isRunning){
            timerRef.current = setInterval(() => {
                setTimer(T => T + 1)
            }, 1000);
        }

        return () => {
            clearInterval(timerRef.current);
        };
        
    }, [isRunning]);
    
    const toggleTimer = () => {
        setIsRunning(!isRunning);
    }
    const clearTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
        setTimer(0);
        isRunning ? setIsRunning(!isRunning) : setIsRunning(isRunning);
    }

    return(
        <div className="h-screen flex flex-col items-center justify-center gap-2 box-border bg-gray-100 text-2xl">
            <p>Timer: { timer}</p>
            <button className="border-2 p-2 hover:bg-gray-400" onClick={toggleTimer}>Toggle Timer</button>
            <button className="border-2 p-2 hover:bg-gray-400" onClick={clearTimer}>Clear Timer</button>
        </div>
    );
}

export default Timer