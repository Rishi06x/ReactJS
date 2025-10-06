import { useState, useEffect } from "react";

function Search({ onSearch }) {
  const [text, setText] = useState('nature');

  const handleSearch = () => {
    if (text.trim()) {
      onSearch(text); // pass text to ImgGallery
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);


  return (
    <div className="search-bar w-full h-52 gap-12 flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 to-pink-500 p-8">
      <h1 className="text-5xl font-bold text-gray-100">Image Gallery</h1>
      <div className="w-full flex justify-center">
        <input
            type="text"
            placeholder="Search images..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            className="p-2 border text-gray-100 border-gray-300 rounded-l xl:w-1/3 focus:outline-none"
        />
        <button onClick={handleSearch} className="p-2 border border-gray-300 rounded-r bg-indigo-500 xl:w-1/10 text-gray-100 hover:bg-indigo-600   ">Search</button>
      </div>
    </div>
  );
}

export default Search;
