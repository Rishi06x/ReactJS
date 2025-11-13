import { NavLink} from "react-router-dom";

function Navbar() {

  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "none",
      color: isActive ? "rgb(17, 157, 244)" : "white",
    };
  }

  

  return (
    <>  
      <nav>
        <ul className="flex justify-end pr-12 gap-4 p-4 bg-gray-800 text-white ">
        <NavLink style={navLinkStyles} to="/">Home</NavLink>
        <NavLink style={navLinkStyles} to="/about">About</NavLink>
        <NavLink style={navLinkStyles} to="/contact">Contact</NavLink>
        </ul>
      </nav>
     
    </>
  );
}

export default Navbar;
