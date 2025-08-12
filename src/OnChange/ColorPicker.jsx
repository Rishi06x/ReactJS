import { useState } from "react";

function ColorPicker(){

    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(){
        setColor(event.target.value);
    }

    return(
        <div className="h-screen flex flex-col items-center justify-center gap-2 box-border bg-gray-100">
            <h1 className="text-2xl text-gray-800">Colour Picker</h1>
            <h4 className="text-xl">Colour Code: {color}</h4>
            <div className="w-32 h-32 text-center border-1 rounded-xl p-4" style={{backgroundColor:color}}></div>
            <input type="color" value={color} className="w-20 h-8 border-1 mt-4" onChange={handleColorChange}/>
        </div>
    );
}

export default ColorPicker