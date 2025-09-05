import Images from "./Images";

function ImgGallery({images}){

    return(
    <div className=" columns-2 md:columns-3 lg:columns-4 gap-4 mt-4">
            {images.map((img, index) => (
                <Images key={img.id} image={img} className="w-full"/>
            ))}
    </div>
    );
}

export default ImgGallery;