import './App.css'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import PaginaPrincipal from './pages/PaginaPrincipal'
import Autentificacion from './autentificacion/Autentificacion'
import { ThemeProvider } from './context/ThemeContext'
import { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { obtenerPerfilUsuario } from './Store/Auth/Action'

function App() {

  const jwt = localStorage.getItem("jwtToken");

  const {auth} = useSelector(store => store);
  const dispatch = useDispatch();

  useEffect(() => {
    if (jwt) {
      dispatch(obtenerPerfilUsuario(jwt));
    } 
  }, [jwt])

  
  return (
    <ThemeProvider>
      <Routes>
        <Route
          path="/*"
          element={auth.user ? <PaginaPrincipal /> : <Autentificacion />}
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;


