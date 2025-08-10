function ConditionalRendering() {
  const isLoggedIn = true; 

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800">
        {isLoggedIn ? (  <h1 className="text-green-700 bg-green-200 p-4 text-xl">Welcome back, User!</h1>) : (<h1 className="text-red-700 bg-red-200 p-4 text-xl">Please log in to continue.</h1>)}
    </div>
  );
}

export default ConditionalRendering;