import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul className="flex justify-end pr-12 gap-4 p-4 bg-gray-800 text-white ">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
