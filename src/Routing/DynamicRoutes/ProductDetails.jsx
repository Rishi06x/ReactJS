import { useParams } from "react-router-dom";

export default function ProductDetails() {

    const { ProductId } = useParams();

    return (
        <div className="product-details-page flex flex-col items-center w-full h-full bg-gradient-to-r from-slate-600 to-slate-700">
            <h1 className="text-4xl font-bold text-white mt-8">Product Details Page</h1>
            <p className="text-lg text-white mt-4">Here are the details of the selected product!</p>

            <div className="product-info bg-white rounded-lg shadow-md p-6 mt-6 w-3/4">
                <h2 className="text-2xl font-semibold mb-4">Product ID: {ProductId}</h2>
                <p className="text-gray-700">The detailed information about the product ID {ProductId} </p>
            </div>
        </div>
    );
}