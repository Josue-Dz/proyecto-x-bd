import './App.css'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import PaginaPrincipal from './pages/PaginaPrincipal'
import Autentificacion from './autentificacion/Autentificacion'
import { ThemeProvider } from './context/ThemeContext'
import { useEffect, useState } from 'react'
import { SpeedInsights } from "@vercel/speed-insights/next"
//import { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => 
    JSON.parse(localStorage.getItem("isAuthenticated")) || false
  );

  useEffect(() => {localStorage.setItem("isAuthenticated", 
    JSON.stringify(isAuthenticated))}, [isAuthenticated]);

  return (
    <ThemeProvider>
      <Routes>
        <Route
          path="/*"
          element={isAuthenticated ? <PaginaPrincipal setIsAuthenticated={setIsAuthenticated} /> 
            : <Autentificacion setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path="/signin" element={<Autentificacion setIsAuthenticated={setIsAuthenticated}/>}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;


