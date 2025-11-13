import { useNavigate } from "react-router-dom";

export default function Cart(){

    const navigate = useNavigate();

    return(
        <div className="p-4">
            <button className="border p-2 hover:bg-slate-300" onClick={() => navigate(-1)}>🔙 Back</button>
            <h2 className="text-3xl">Product added to the cart ✅</h2>
        </div>
    );
}