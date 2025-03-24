import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import FormularioInscripcion from './FormularioInscripcion';
import FormularioEntrada from './FormularioEntrada';
import { useTheme } from '../context/ThemeContext';


export default function AuthModal({ open, handleClose, setIsAuthenticated }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const handleNavigate = () => {
    const path = location.pathname === "/signup" ? "/signin" : "/signup";
    navigate(path);
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    bgcolor: isDarkMode ? 'rgba(0, 0, 0, 0.9)' : 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
    outline: 'none'
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>

        <div className='justify-items-center'>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            width="50px"
            height="50px"
            className=" w-1/7 pl-2 pb-4
            r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-yc9v9c r-18jsvk2 r-16y2uox r-8kz0gk"
          >
            <g alt="logo X" className={`${isDarkMode ? "fill-white" : "fill-dark"}`}>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 
                21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </g>
          </svg>
          <p className={`font-bold text-3xl mt-8 pb-12 ${isDarkMode ? "text-white" : "text-black"}`}>Iniciar Sesión en X</p>
        </div>


        {location.pathname === "/signup" ? <FormularioInscripcion /> : <FormularioEntrada setIsAuthenticated={setIsAuthenticated} />}

        <p className="text-center py-5 font-semibold text-gray-500">
          {location.pathname === "/signup" ? "¿Ya tienes una Cuenta?" : "¿No tienes una Cuenta? Registrate"}
        </p>

        <Button

          fullWidth
          variant="outlined"
          onClick={handleNavigate}
          sx={{ borderRadius: "29px", py: "15px" }}
        >
          {location.pathname === "/signup" ? "Ingresar" : "Crear"}
        </Button>
      </Box>
    </Modal>
  );
}