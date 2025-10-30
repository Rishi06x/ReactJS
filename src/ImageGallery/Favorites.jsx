 
 
const Favorites = ({ img, isFav, setSelected }) => {
  return (   
 
 <div className="favorites-gallery">
        <h2 className="text-2xl font-bold m-4">Favorites</h2>
        <div className="columns-2 md:columns-3 gap-4 p-4 flex-wrap">
          {img
            .filter((photo) => isFav.includes(photo.id))
            .map((photo, index) => (  
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
              </div>
            ))}
        </div>
      </div>
  );

};

export default Favorites;