import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaPrincipal from './pages/PaginaPrincipal';
import Autentificacion from './autentificacion/Autentificacion';

function App() {
  const isAuthenticated = true; 

  return (
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <PaginaPrincipal /> : <Autentificacion />}
        />
      </Routes>
  );
}

export default App;
