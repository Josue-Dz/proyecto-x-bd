import React from "react";
import Button from "@mui/material/Button";
import { GoogleLogin } from "@react-oauth/google"; 
import AuthModal from "./AuthModal";
import { useState } from "react";
//import { useNavigate } from "react-router-dom";


const Autentificacion = ({setIsAuthenticated}) => {
    
    const [openAuthModal, setOpenAuthModal] = useState(false);
    const handleOpenAuthModal =()=>setOpenAuthModal(true);
    const handleCloseAuthModal =()=>setOpenAuthModal(false);


  return (
    <div className="overflow-y-hidden flex lg:flex-row flex-col min-h-screen">
      {/* Sección de la imagen */}
      <div className="lg:w-7/12 h-screen relative hidden lg:block">
        <img
          className="w-full h-full object-cover"
          src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png"
          alt="Twitter Illustration"
        />
        <div className="absolute top-[26%] left-[19%]">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b7/X_logo.jpg"
            alt="X Logo"
            width="300"
            height="300"
          />
        </div>
      </div>

      {/* Sección de autenticación */}
      <div className="px-10" lg={5} xs={12}>
        <h1 className="mt-10 font-bold text-7xl">Esta Pasando Ahora</h1>
        <p className="font-bold text-3xl py-16 text-left">Unite a Twitter Hoy.</p>

        {/* Formulario de autenticación */}
        <div className="w-[60%]">
          <div className="w-full">
            {/* Botón de Google */}
            <GoogleLogin width={330} /> 

            <p className="py-5 text-center">O</p>

            {/* Botón de Crear Cuenta */}
            <Button
             onClick ={handleOpenAuthModal}
              fullWidth
              variant="contained"
              size="large"
              sx={{ 
                borderRadius: "29px",
                 py: "7px",
                 }}
            >
              Crea una Cuenta
            </Button>

            <p className="text-sm mt-2">
              Para iniciar sesion, tienes que estar de acuerdo con los terminos y condiciones y politicas de seguridad, ademas del uso de Cookies.
            </p>
          </div>

          {/* Sección de Login */}
          <div className="mt-10">
            <h1 className="font-bold text-xs mb-3">¿Ya tienes Una Cuenta?</h1>

            <Button
            onClick ={handleOpenAuthModal}
              fullWidth
              variant="outlined"
              size="large"
              sx={{ 
                borderRadius: "29px", 
                py: "7px" ,
            }}>Ingresar </Button>
          </div>
        </div>
      </div>
      <AuthModal open ={openAuthModal} handleClose= {handleCloseAuthModal} 
      setIsAuthenticated={setIsAuthenticated}></AuthModal>
    </div>
  );
};

export default Autentificacion;

