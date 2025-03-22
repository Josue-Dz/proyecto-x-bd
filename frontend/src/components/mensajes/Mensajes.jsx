import React, { useState } from 'react'

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

import ModalMensajeNuevo from './ModalMensajeNuevo';

const Mensajes = () => {

  const [openMensajeNuevoModal, setOpenMensajeNuevoModal] = useState(false);
      const handleOpenModalMensajeNuevo = () => setOpenMensajeNuevoModal(true);
      const handleClose = () => setOpenMensajeNuevoModal(false);

  
  return (
    <div className='border-gray-200 border-[1px] h-full'>

        <div className='relative flex items-center mx-3.5'>
            <h2 className="py-2 text-lg text-start font-bold w-2xl">Mensajes</h2>
            <SettingsOutlinedIcon className='ml-3 cursor-pointer'/>
            <AddBoxOutlinedIcon onClick={handleOpenModalMensajeNuevo} className='ml-3 cursor-pointer'/>
        </div>

        <div className='relative flex items-center mx-3.5'>
            <input type='text' placeholder="Buscar Mensajes Directos" 
              className='py-3 rounded-full text-gray-500 w-full pl-12 border border-gray-300' />

            <div className='absolute top-0 left-0 pl-3 pt-3'>
                <SearchRoundedIcon className='text-gray-500' />
            </div>
        </div>

        <section>
          <ModalMensajeNuevo open={openMensajeNuevoModal} handleClose={handleClose} />
        </section>
        

</div>
  )
}

export default Mensajes