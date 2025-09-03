
function ChildComp({onClick}){
    console.log("Child rendered");
    return <button onClick={onClick}>Child Button</button>
}

export default ChildComp