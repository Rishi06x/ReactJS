import { useState } from "react";

function SearchBar({ onSearch }) {
    const [query, setQuery] = useState("");

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = () => {
        onSearch(query);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="search-bar mb-4">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Search images..."
                className="border p-2 rounded w-64"
            />
            <button
                onClick={handleSearch}
                className="ml-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Search
            </button>
        </div>
    );
}

export default SearchBar;