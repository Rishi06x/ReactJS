import { useNavigate, NavLink, Outlet } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();

  const navLinksStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "none",
      color: isActive ? "rgb(37, 0, 244)" : "black",
    };
  }

  return (
    <div className="home-page flex flex-col items-center h-full bg-gradient-to-r from-slate-500 to-slate-400">
      <h1 className="text-4xl font-bold text-white">Home page</h1>
      <button className="border p-0.5 mt-4 bg-amber-400 text-gray-700 hover:bg-amber-500" onClick={() => navigate('Cart')}>Add to cart</button>
      <div className="home-nav flex gap-4 mt-6 text-blue-800 underline mb-4">
        <NavLink to="Feature" style={navLinksStyles} className="text-xl">Feature</NavLink>
        <NavLink to="New" style={navLinksStyles} className="text-xl">New</NavLink>
      </div>
      <Outlet/>
    </div>
  );
}