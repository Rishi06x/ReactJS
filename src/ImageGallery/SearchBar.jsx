import { useState, useRef } from "react";

function SearchBar({ onSearch }) {
    const [query, setQuery] = useState("");
    const lastQueryRef = useRef("");

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = () => {
        const trimmedQuery = query.trim();

        if (trimmedQuery !== "" && trimmedQuery !== lastQueryRef.current) {
            onSearch(trimmedQuery);
            lastQueryRef.current = trimmedQuery;
            console.log("search triggered with:", trimmedQuery);
        } else {
            console.log("no new search, same query as before");
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className="w-full flex justify-center p-4 mb-6">
            <div className="flex w-full max-w-md items-center rounded-md shadow-md overflow-hidden border border-gray-300">
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder="🔍 Search for images..."
                    className="flex-1 px-4 py-2 bg-gray-100 outline-none border-none text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                    onClick={handleSearch}
                    className="px-5 py-2 bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors duration-200"
                >
                    Search
                </button>
            </div>
        </div>
    );
}

export default SearchBar;
