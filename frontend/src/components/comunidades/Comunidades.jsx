import React, { useState } from 'react'

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';

import ModalSuscripcion from '../modalsuscripcion/ModalSuscripcion';

const Comunidades = () => {

      const [openModalSuscripcion, setOpenModalSuscripcion] = useState(false);
          const handleOpenModalSuscripcion = () => setOpenModalSuscripcion(true);
          const handleClose = () => setOpenModalSuscripcion(false);

  return (
    <div className='border-gray-200 border-[1px] h-full'>

    <div className='relative flex items-center mx-3.5'>
        <h2 className="py-2 text-lg text-start font-bold w-2xl">Comunidades</h2>
        <SearchRoundedIcon className='ml-3 cursor-pointer'/>
        <PersonAddAltOutlinedIcon onClick={handleOpenModalSuscripcion} className='ml-3 cursor-pointer'/>
    </div>

    <section>
      <ModalSuscripcion open={openModalSuscripcion} handleClose={handleClose} />
    </section>
    

</div>
  )
}

export default Comunidades