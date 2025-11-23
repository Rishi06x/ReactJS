import { Outlet, useSearchParams } from "react-router-dom";

export default function Products() {

    const [searchParams, setSearchParams] = useSearchParams();

    const filterProducts = (filterType) => {
        if (filterType === "topRated") {
            setSearchParams({ filter: "topRated" });
        } else {
            setSearchParams({});
        }   
    }
    const showingTopRated = searchParams.get("filter") === "topRated";

    return (
        <>
            <div className="products-page flex flex-col items-center h-full bg-gradient-to-r from-slate-400 to-slate-500">
                <h1 className="text-4xl font-bold text-white mt-8">Products Page</h1>
                <p className="text-lg text-white mt-4">Explore our wide range of products!</p>
                <div className="flex gap-4 mt-6 mb-2 ">
                    <button className="border p-1 hover:bg-slate-200" onClick={() => filterProducts('topRated')}>Top Rated</button>
                    <button className="border p-1 hover:bg-slate-200" onClick={() => filterProducts()}>Reset Filter</button>
                </div>
                <Outlet/>
                {
                    showingTopRated ? (<h2 className="bg-slate-700 rounded w-1/2 text-center p-6 text-slate-100">Here are the top rated products</h2> ) : (<h2 className="bg-slate-700 rounded w-1/2 text-center p-6 text-slate-100">Here are all the products</h2>)
                }
            </div>
        </>
    );
}