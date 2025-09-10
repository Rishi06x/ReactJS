import { useState, useEffect } from "react";
import Search from "./Search";

function ImgGallery() {
  const [query, setQuery] = useState("");  
  const [img, setImg] = useState([]);

  useEffect(() => {
    if (!query) return; 

    const fetchImg = async () => {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&page=1&per_page=12&client_id=S-q6Fwl80wYegRfb8SDrGTFGQyQFRN5GE109RQmhOs0`
      );
      const data = await res.json();
      setImg(data.results);

    };

    fetchImg();
  }, [query]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
  };

  return (
    <div >
      <Search onSearch={handleSearch}/>

       <div className="image-grid lg:columns-3 md:columns-2 sm:columns-1 gap-4 p-4">
        {img.map((photo,index) => (
          <img key={index} src={photo.urls.small} alt={photo.alt_description} className="mb-4 w-full rounded-lg"/>
        ))}
      </div>

    </div>
  );
}

export default ImgGallery;