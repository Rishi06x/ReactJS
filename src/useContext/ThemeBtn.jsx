import { useContext } from "react"
import { ThemeContext } from "./Theme.jsx"; 

function ThemeBtn() {

    const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className={`border-1 p-2 ${theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"}`}>
      Toggle Theme
    </button>
  );
}

export default ThemeBtn;