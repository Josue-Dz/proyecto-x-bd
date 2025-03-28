import React from "react";
import Button from "@mui/material/Button";
import { GoogleLogin } from "@react-oauth/google";
import AuthModal from "./AuthModal";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";


const Autentificacion = ({ setIsAuthenticated }) => {

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const handleOpenAuthModal = () => setOpenAuthModal(true);
  const handleCloseAuthModal = () => setOpenAuthModal(false);
  const { isDarkMode } = useTheme();


  return (
    
    <div className="overflow-y-hidden flex lg:flex-row flex-col min-h-screen">

      <div className="lg:w-7/12 h-screen relative hidden lg:block">
        <img
          className="w-full h-full object-cover"
          src="/assets/login.png"
          alt="X Illustration"
        />
        <div className="absolute top-[26%] left-[19%]">
          <img
            src="/assets/X_logo.jpg"
            alt="X Logo"
            width="300"
            height="300"
          />
        </div>
      </div>


      <div className="px-10 items-start" lg={5} xs={12}>
        <h2 className="text-left mt-10 font-bold text-7xl">Lo que está pasando ahora</h2>
        <p className="font-bold text-3xl py-16 text-left">Únete Hoy</p>


        <div className="w-[60%]">
          <div className="w-full justify-items-start">

              <GoogleLogin width={300} />


            <div class="mt-5 flex w-[300px] my-2">
              <div class="flex-1 h-px bg-gray-200"></div>
              <span class={`px-4 ${isDarkMode ? "text-white" : "text-black"}`}>o</span>
              <div class="flex-1 h-px bg-gray-200"></div>
            </div>

            <Button
              fullWidth
              onClick={handleOpenAuthModal}
              variant="contained"
              size="large"
              sx={{
                borderRadius: "29px",
                py: "7px",
                width: 300,
              }}
            >
              Crea una Cuenta
            </Button>

            <p className="text-sm mt-2">
              Para iniciar sesion, tienes que estar de acuerdo con los terminos y condiciones y
              politicas de seguridad, ademas del uso de Cookies.
            </p>
          </div>

          {/* Sección de Login */}
          <div className="mt-10 justify-items-start">
            <p className="font-bold text-lg mb-3">¿Ya tienes Una Cuenta?</p>

            <Button
              onClick={handleOpenAuthModal}
              fullWidth
              variant="outlined"
              size="large"
              sx={{
                borderRadius: "29px",
                py: "7px",
                width: 300
              }}>Ingresar </Button>
          </div>
        </div>
      </div>
      <AuthModal open={openAuthModal} handleClose={handleCloseAuthModal}
        setIsAuthenticated={setIsAuthenticated}></AuthModal>
    </div>
  );
};

export default Autentificacion;

