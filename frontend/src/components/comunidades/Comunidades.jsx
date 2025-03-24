import React, { useState } from 'react'

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'

import ModalSuscripcion from '../modalsuscripcion/ModalSuscripcion';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext'

const Comunidades = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  const { isDarkMode } = useTheme();
  const [openModalSuscripcion, setOpenModalSuscripcion] = useState(false);
  const handleOpenModalSuscripcion = () => setOpenModalSuscripcion(true);
  const handleClose = () => setOpenModalSuscripcion(false);


  return (
    <React.Fragment>
      <div className={`border-[0.5px] h-full ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}>

        <div className={`z-50 flex items-center sticky top-0 
                ${ isDarkMode ? "transparencia-darkmode" : "transparencia-lightmode" }`}>
          <KeyboardBackspaceIcon className='cursor-pointer ml-5' onClick={handleBack} />

          <h2 className="ml-5 py-2 text-lg text-start font-bold w-2xl">Comunidades</h2>
          <SearchRoundedIcon className='ml-3 cursor-pointer' />
          <PersonAddAltOutlinedIcon onClick={handleOpenModalSuscripcion} className='ml-3 mr-3 cursor-pointer' />
        </div>

        <section>
          <ModalSuscripcion open={openModalSuscripcion} handleClose={handleClose} />
        </section>


      </div>
    </React.Fragment>
  )
}

export default Comunidades