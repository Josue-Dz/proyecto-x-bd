
import './App.css'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import PaginaPrincipal from './pages/PaginaPrincipal'
import Autentificacion from './autentificacion/Autentificacion'
import { useState, useEffect } from 'react'

function App() {

  const isAuthenticated = true; 

  // const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  // useEffect(() => {
  //   if (theme === "dark") {
  //     document.querySelector('html').classList.add('dark');
  //   } else {
  //     document.querySelector('html').classList.remove('dark');
  //   }
  //   localStorage.setItem("theme", theme);
  // }, [theme]);

  // const toggleTheme = () => {
  //   setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  // };

  return (
      <Routes>
        <Route
          path="/*"
          element={isAuthenticated ? <PaginaPrincipal /> : <Autentificacion />}
        />
      </Routes>
  );
}

export default App;
