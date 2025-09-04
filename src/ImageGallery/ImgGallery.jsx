import SearchBar from "./SearchBar";
import Cards from "./Cards";
import { useState } from "react";

function ImgGallery() {
    const [images, setImages] = useState([]);

    const handleSearch = async (query) => {
        try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=S-q6Fwl80wYegRfb8SDrGTFGQyQFRN5GE109RQmhOs0&per_page=15`);
        const data = await response.json();
        setImages(data.results);
        } catch (error) {
            alert("Error fetching images. Please try again.");
            console.error("Error fetching images:", error);
        }
    };

    return (
        <div className="p-4">
            <SearchBar onSearch={handleSearch} />
            <Cards images={images} />
            {images.length > 0 && (
                <div className="mt-4 text-center">
                    <p className="mb-2 text-gray-600">Showing {images.length} images</p>
                    <button 
                        // onClick={handleLoadMore}
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
}

export default ImgGallery;