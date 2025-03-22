import React, { useState } from 'react'

import { Button } from '@mui/material'; 

import ModalMensajeNuevo from './ModalMensajeNuevo';

const VerChat = () => {

  const [openMensajeNuevoModal, setOpenMensajeNuevoModal] = useState(false);
      const handleOpenModalMensajeNuevo = () => setOpenMensajeNuevoModal(true);
      const handleClose = () => setOpenMensajeNuevoModal(false);

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
            <Button className="normal-case" onClick={handleOpenModalMensajeNuevo} variant='contained' sx={{ fontWeight: "bold", 
                                                                                                                    bgcolor: "#1d9bf0", 
                                                                                                                    textTransform: "none", 
                                                                                                                    padding: "10px", 
                                                                                                                    paddingX: "25px", 
                                                                                                                    borderRadius: "25px", 
                                                                                                                    boxShadow: "none", }}>
              Nuevo mensaje
            </Button>
        </div>

        <section>
            <ModalMensajeNuevo open={openMensajeNuevoModal} handleClose={handleClose} />
        </section>
        
    </div>
  )
}

export default VerChat