function RenderList({ items }) {

    return (
        <div className="h-screen  flex flex-col justify-center items-center">
            <h1 className="text-xl">To-Do</h1>
            <ul className=" flex flex-col justify-center items-center gap-1.5 mt-4">
                {items.length > 0 ? (items.map((item, index) => (
                    <li key={index} className= {`w-56 p-4 text-white ${item.status ? "bg-green-500" : "bg-red-500"}`}>{item.task}</li>
                ))) : (<p>No tasks found.</p>)
            
            }
            </ul>
        </div>
    );
}

export default RenderList