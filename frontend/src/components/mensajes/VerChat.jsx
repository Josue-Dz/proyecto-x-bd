import React from 'react'

import { Button } from '@mui/material'; 

const VerChat = () => {

  const [OpenModalNuevoMensaje, setOpenModalNuevoMensaje] = React.useState(false);
      const handleOpenModalNuevoMensaje = () => setOpenModalNuevoMensaje(true);
      const handleCloseModalNuevoMensaje = () => setOpenModalNuevoMensaje(false);

  return (
    <div className='flex flex-col justify-center items-start h-screen'>
        <div className='text-start mt-10 mb-4'>
            <h2 className='font-bold text-lg'>
                Selecciona un mensaje
            </h2>
            <p>
                Elige entre tus conversaciones existentes, empieza una nueva o sigue participando.
            </p>
        </div>

        <div className='w-full items-start justify-items-start'>
            <Button className="normal-case" onClick={handleOpenModalNuevoMensaje} variant='contained' sx={{ fontWeight: "bold", 
                                                                                                                    bgcolor: "#1d9bf0", 
                                                                                                                    textTransform: "none", 
                                                                                                                    padding: "10px", 
                                                                                                                    paddingX: "25px", 
                                                                                                                    borderRadius: "25px", 
                                                                                                                    boxShadow: "none", }}>
              Nuevo mensaje
            </Button>
        </div>
    </div>
  )
}

export default VerChat