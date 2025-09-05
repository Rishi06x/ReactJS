function Images({image}){
    return(
        <div>
            <img src={image.urls.small} alt={image.alt_description} className="w-full mb-4"/>
        </div>
    );
}

export default Images