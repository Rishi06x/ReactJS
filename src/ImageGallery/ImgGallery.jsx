import { useState, useEffect } from "react";
import Search from "./Search";
import { Heart } from "lucide-react";


function ImgGallery() {
  const [query, setQuery] = useState("");  
  const [img, setImg] = useState([]);
  const [selected, setSelected] = useState(null); 
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isFav, setIsFav] = useState([]);


  useEffect(() => {
    if (!query) return; 

    const fetchImg = async () => {
      setLoading(true); // start loader

       const timeoutId = setTimeout(() => {
      alert("Network issue: Request taking too long!");
      setLoading(false);
    }, 10000);

    try {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=12&client_id=S-q6Fwl80wYegRfb8SDrGTFGQyQFRN5GE109RQmhOs0`
      );
      const data = await res.json();
      // setImg(data.results);
       if (page === 1) {
        setImg(data.results);
      } else {
        setImg((prev) => [...prev, ...data.results]);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      clearTimeout(timeoutId); // clear timeout if request finishes
      setLoading(false); // stop loader
    }
  };

    fetchImg();
  }, [query, page]); // runs only when query changes

  const handleSearch = (query) => {
    setQuery(query);
    setPage(1);
  };

   const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchImg(query, nextPage);
  };

  const toggleFav = (photoId) => {
      setIsFav((prev) =>
      prev.includes(photoId)
        ? prev.filter((id) => id !== photoId) // remove if already favorited
        : [...prev, photoId] // add new favorite
    );
  };


  return (
    <div className="min-h-screen bg-gray-100 relative">
      <Search onSearch={handleSearch} />

      {loading && (
      <div className="p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-indigo-500 rounded-xl shadow-2xl shadow-gray-900">
        <div className="animate-spin rounded-full h-10 w-10 border-b-4 border-gray-900"></div>
      </div>
    )}

      {/* If no image is selected show in grid */}
      {!selected && !loading &&(
        <div className=" columns-2 md:columns-3  gap-4 p-4 flex-wrap">
          {img.map((photo, index) => (
            <div 
              key={index} 
              className="relative mb-4 rounded-lg overflow-hidden shadow-lg group bg-white cursor-pointer"
              onClick={() => setSelected(photo)} 
            >
              <img 
                src={photo.urls.small} 
                alt={photo.alt_description} 
                loading="lazy"
                className="w-full rounded-t-lg hover:opacity-90 transition-opacity duration-300"
              />

              {/* overlay with details */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm transition-opacity duration-300">
                <p><strong>Format:</strong> JPG</p>
                <p><strong>Size:</strong> {photo.width} × {photo.height}</p>
                <p><strong>By:</strong> {photo.user.name}</p>

                {/* Buttons */}
                <div className="flex absolute top-2 right-2 gap-4 mt-2">
                  {/* favorite button */}
                  <button
                  onClick={(e) => {e.stopPropagation(); // stop overlay clicks
                                  toggleFav(photo.id);}}
                  className={` p-2 rounded-full transition-colors duration-300 ${
                    isFav.includes(photo.id) ? "bg-red-500 text-white" : "bg-white/70 text-gray-700"
                  }`}
                >
                  <Heart
                    className={`w-5 h-5 ${isFav.includes(photo.id) ? "fill-current" : ""}`}
                  />
                </button>
                  {/* Download button */}
                  <a 
                    href={photo.links.download + "&force=true"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className=" p-2 rounded-full transition-colors duration-300 bg-gray-300 hover:bg-slate-200"
                    onClick={(e) => e.stopPropagation()} 
                  >
                    <img src="../src/assets/downloadIcon.png" alt="download" className="w-5 h-5"/>
                  </a>
              </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* If an image is clicked show in fullscreen */}
      {selected && (
        <div className="fixed inset-0 bg-black/90 flex flex-col justify-center items-center z-50 p-4">
          {/* Image */}
          <div className="relative">
            <img
              src={selected.urls.regular}
              alt={selected.alt_description}
              className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-xl"
            />

            <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-sm">
              <p><strong>Format:</strong> JPG</p>
              <p><strong>Size:</strong> {selected.width} × {selected.height}</p>
              <p><strong>By:</strong> {selected.user.name}</p>

              <div className="flex absolute top-2 right-2 gap-4 mt-2">
              {/* favorite button */}
              <button
                onClick={(e) => {e.stopPropagation(); // stop overlay clicks
                                toggleFav(selected.id);}}
                className={`p-2 rounded-full transition-colors duration-300 ${
                  isFav.includes(selected.id) ? "bg-red-500 text-white" : "bg-white/70 text-gray-700"
                }`}
              >
                <Heart
                  className={`w-5 h-5 ${isFav.includes(selected.id) ? "fill-current" : ""}`}
                />
              </button>
              {/* Download button */}
              <a 
                href={selected.links.download + "&force=true"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-colors duration-300 bg-gray-300 hover:bg-slate-200"
                onClick={(e) => e.stopPropagation()}
              >
                <img src="../src/assets/downloadIcon.png" alt="download" className="w-5"/>
              </a>
            </div>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={() => setSelected(null)}
            className="mt-4 bg-red-500 px-4 py-2 text-white rounded-lg hover:bg-red-600"
          >
            Close
          </button>
        </div>
      )}

       {/* Load more button */}
      {img.length > 0 && !loading && (
      <div className=" flex items-center justify-center bg-transparent">
          <button
          onClick={handleLoadMore}
          disabled={loading}
          className="m-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 disabled:opacity-50"
        >
          Load More
        </button>
        </div>

      )}

    </div>
  );
}

export default ImgGallery;
