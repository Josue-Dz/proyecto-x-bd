import React from 'react'
import { useState, useEffect } from 'react';

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Brightness4RoundedIcon from '@mui/icons-material/Brightness4Rounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

import { Button } from '@mui/material';
import ModalSuscripcion from '../components/modalsuscripcion/ModalSuscripcion';

const Tendencias = ({toggleTheme}) => {
    const [openModalSuscripcion, setOpenModalSuscripcion] = React.useState(false);
    const handleOpenModalSuscripcion = () => setOpenModalSuscripcion(true);
    const handleCloseModalSuscripcion = () => setOpenModalSuscripcion(false);

    const handleChangeTheme = () => {

    }
    return (
        <div className='py-1 sticky top'>
            <div className='relative flex items-center'>

                <input type='text' placeholder="Buscar" className='py-3 rounded-full text-gray-500 w-full pl-12 border border-gray-300' />

                <div className='absolute top-0 left-0 pl-3 pt-3'>
                    <SearchRoundedIcon className='text-gray-500' />
                </div>
                <Brightness4RoundedIcon className='ml-3 cursor-pointer' onClick={handleChangeTheme} />
            </div>

            <section className='my-5 justify-items-start'>
                <h2 className='text-x1 font-bold text-left'>Suscríbete a Premium</h2>
                <div>
                    <p className='my-2 text-left'>Suscríbete para desbloquear nuevas funciones y, si eres elegible,
                        recibir un pago de cuota de ingresos.
                    </p>
                </div>
                <div>
                    <Button onClick={handleOpenModalSuscripcion} variant='contained' sx={{ padding: "10px", paddingX: "20px", borderRadius: "25px", position: "left" }}>
                        Suscribirse
                    </Button>
                </div>
            </section>

            <section className='mt-7 space-y-5 justify-items-start w-full'>
                <h2 className='font-bold text-x1 py-1 w-full text-left'>Qué está pasando</h2>

                {[1, 1, 1].map((item) => <div className='flex w-full justify-items-start'>
                    <div className='w-full justify-items-start'>
                        <p className='text-sm'>Ejemplo · Tendencia</p>
                        <p className='font-bold'>Bases de Datos 1</p>
                        <p className='text-sm'>64,5 mil publicaciones</p>
                        <MoreHorizRoundedIcon />
                    </div>
                </div>)}

            </section>
            <section>
                <ModalSuscripcion open={openModalSuscripcion} handleClose={handleCloseModalSuscripcion} />
            </section>
        </div>
    )
}

export default Tendencias