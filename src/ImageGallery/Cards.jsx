function Cards({images}){

    return(
    <div className=" columns-2 md:columns-3 lg:columns-4 gap-4 mt-4">
            {images.map((img) => (
                <img key={img.id} src={img.urls.small} alt={img.alt_description} className="w-full object-cover h-auto mb-4"/>
            ))}
    </div>
    );
}

export default Cards;