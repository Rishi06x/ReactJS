import React,{useState} from "react";

function Form(){
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    function handleNameChange(){
        setName(event.target.value);
     }
    function handlePassChange(){
        setPassword(event.target.value);
    }

    return(
        <div className="h-screen flex flex-col items-center justify-center gap-2"> 
            <div>
                <h4 className="">Name:</h4>
                <input type="text" value={name} onChange={handleNameChange} placeholder="Enter your name" className="border-2 border-gray-400 p-2"/>
                <h4>Password:</h4>
                <input type="password" value={password} onChange={handlePassChange} placeholder="Enter your password" className="border-2 border-gray-400 p-2"/>
            </div>
            <p className="bg-gray-700 text-white p-4">Your credentials are "{name}" & "{password}"</p>
        </div>
    );
}

export default Form