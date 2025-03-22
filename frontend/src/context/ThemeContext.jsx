import { createContext, useContext, useState, useEffect } from "react";


const ThemeContext = createContext();


export function ThemeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.getItem("theme") === "dark" 
    );


    useEffect(() => {

        document.querySelector('html').classList.remove("dark", "light");
        document.querySelector('html').classList.add(isDarkMode ? "dark" : "light");
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");

    }, [isDarkMode]);


    const toggleTheme = () => setIsDarkMode(!isDarkMode);

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}


export function useTheme() {
    return useContext(ThemeContext);
}
