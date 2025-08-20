import { useState, createContext, useEffect } from "react";
import ThemeBtn from "./ThemeBtn.jsx";   

export const ThemeContext = createContext();

function ThemeProvider() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.className = theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white";
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      < div className="flex flex-col items-center justify-center gap-2">
        Current theme: {theme}
        <p className="text-sm">Click the button to toggle the theme.</p>
      <ThemeBtn />
      </div>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
