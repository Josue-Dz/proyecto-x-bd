import '../App.css'
import React from 'react'
import { useTheme } from '../context/ThemeContext'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Brightness4RoundedIcon from '@mui/icons-material/Brightness4Rounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

import { Button } from '@mui/material';
import ModalSuscripcion from '../components/modalsuscripcion/ModalSuscripcion';

import { TarjetaSeguimientoX } from '../components/seguimiento/TarjetaSeguimientoX';
import { useLocation } from 'react-router-dom';

const users = [
    {
        name: 'Miguel Ángel Durán',
        userName: 'midudev',
        isFollowing: true
    },
    {
        name: 'Starlink',
        userName: 'Starlink',
        isFollowing: false
    },
    {
        name: 'Tesla AI',
        userName: 'Tesla_AI',
        isFollowing: true
    }
]

const Tendencias = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    const location = useLocation();
    const [openModalSuscripcion, setOpenModalSuscripcion] = React.useState(false);
    const handleOpenModalSuscripcion = () => setOpenModalSuscripcion(true);
    const handleCloseModalSuscripcion = () => setOpenModalSuscripcion(false);

    const ruta = location.pathname === "/explorar";

    return (
        <div className='py-1 sticky top-0'>
            {ruta ? (
                
                    <section className='mt-5 flex flex-col gap-3 w-full'>
                        {
                            users.map(user => {
                                const { name, userName, isFollowing } = user
                                return (
                                    <TarjetaSeguimientoX key={userName} name={name} userName={userName} initialIsFollowing={isFollowing} />
                                )
                            })
                        }
                        <span className='mt-5 text-left texto-especial'>Mostrar más</span>
                    </section>

                    )
                : (<>
                    <div className='relative flex items-center'>

                        <input type='text' placeholder="Buscar" className='py-3 rounded-full text-gray-500 w-full pl-12 border border-gray-300' />

                        <div className='absolute top-0 left-0 pl-3 pt-3'>
                            <SearchRoundedIcon className='text-gray-500' />
                        </div>
                        <Brightness4RoundedIcon className='ml-3 cursor-pointer' onClick={toggleTheme} />
                    </div>

                    <section className='my-5 justify-items-start'>
                        <h2 className='text-lg font-bold text-left'>Suscríbete a Premium</h2>
                        <div>
                            <p className='my-2 text-left text-xs'>Suscríbete para desbloquear nuevas funciones y, si eres elegible,
                                recibir un pago de cuota de ingresos.
                            </p>
                        </div>
                        <div>
                            <Button className="normal-case" onClick={handleOpenModalSuscripcion} variant='contained' sx={{
                                fontWeight: "bold",
                                bgcolor: "#1d9bf0",
                                textTransform: "none",
                                padding: "5px",
                                paddingX: "20px",
                                borderRadius: "25px",
                                boxShadow: "none",
                            }}>
                                Suscribirse
                            </Button>
                        </div>
                    </section>

                    <section className='mt-7 space-y-5 justify-items-start w-full'>
                        <h2 className='font-bold text-lg py-1 w-full text-left'>Qué está pasando</h2>

                        {[1, 1, 1].map((item) => <div className='flex w-full'>
                            <div className="w-full justify-items-start">
                                <p className="text-xs">Ejemplo · Tendencia</p>
                                <div className="flex items-center justify-evenly">
                                    <p className="text-sm font-bold">Bases de Datos 1</p>
                                    <MoreHorizRoundedIcon className="text-gray-500 cursor-pointer ml-40" />
                                </div>
                                <p className="text-xs">64,5 mil publicaciones</p>
                            </div>
                        </div>)}
                        <span className="text-left texto-especial">Mostrar más</span>
                    </section>

                    <section className='mt-5 flex flex-col gap-3'>
                        <h2 className='text-x1 font-bold text-left'>A quién seguir</h2>

                        {
                            users.map(user => {
                                const { name, userName, isFollowing } = user
                                return (
                                    <TarjetaSeguimientoX key={userName} name={name} userName={userName} initialIsFollowing={isFollowing} />
                                )
                            })
                        }
                        <span className='mt-5 text-left texto-especial'>Mostrar más</span>
                    </section>

                    <section>
                        <ModalSuscripcion open={openModalSuscripcion} handleClose={handleCloseModalSuscripcion} />
                    </section>
                </>)
            }

        </div>
    )
}

export default Tendencias