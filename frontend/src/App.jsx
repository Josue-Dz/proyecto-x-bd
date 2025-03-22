import './App.css'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import PaginaPrincipal from './pages/PaginaPrincipal'
import Autentificacion from './autentificacion/Autentificacion'
import { ThemeProvider } from './context/ThemeContext'

function App() {

  const isAuthenticated = true;

  return (
    <ThemeProvider>
      <Routes>
        <Route
          path="/*"
          element={isAuthenticated ? <PaginaPrincipal /> : <Autentificacion />}
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
