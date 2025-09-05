import SearchBar from "./SearchBar";
import Cards from "./ImgGallery";
import { useState } from "react";

function ImgContainer() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [imgCount, setImgCount] = useState(12)

    const handleSearch = async (query) => {
        setLoading(true);
        try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=S-q6Fwl80wYegRfb8SDrGTFGQyQFRN5GE109RQmhOs0&per_page=${imgCount}`);
        if(!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setImages(data.results);
        } catch (error) {
            alert("Error fetching images. Please try again.");
            console.error("Error fetching images:", error);
        } finally{
            setLoading(false);
        }
    };

    const handleLoadMore = () =>{
        setImgCount(imgCount + 12);
    }

    return (
        <div className="w-full relative">
            <div className="w-full flex flex-col items-center justify-center h-40 bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-900 shadow-lg">
                <h1 className="text-4xl text-white font-extrabold drop-shadow-md">Image Gallery</h1>
                <SearchBar onSearch={handleSearch} />
            </div>
            
                {loading && <div className="mr-auto ml-auto w-full h-100 flex justify-center items-center  space-x-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.6s]"></div>
                    </div>
                }

            <Cards images={images} />
            {images.length > 0 && (
                <div className="mt-4 text-center">
                    <p className="mb-2 text-gray-600">Showing {images.length} images</p>
                    <button 
                        onClick={handleLoadMore}
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
}

export default ImgContainer;