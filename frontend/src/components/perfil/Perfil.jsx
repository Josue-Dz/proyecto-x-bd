import React, { useState, useEffect } from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import { useNavigate, useParams } from 'react-router-dom';
import { Avatar, Box, Button, Tab } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import ModalPerfil from './ModalPerfil';
import Post from '../../pages/Post';
import { useTheme } from '../../context/ThemeContext';
import { useDispatch, useSelector } from 'react-redux';
import { obtenerUsuarioPorId, seguirUsuario } from '../../Store/Auth/Action';
import { obtenerPostsPorUsuario } from '../../Store/Post';

const Perfil = () => {
    const navegar = useNavigate();
    const dispatch = useDispatch();
    const {codigoUsuario} = useParams();
    const {auth, post} = useSelector(store => store);
    const [tabValue, setTabValue] = useState("1");
    const { isDarkMode } = useTheme();

    const [openPerfilModal, setOpenPerfilModal] = useState(false);
    const handleOpenPerfilModal = () => setOpenPerfilModal(true);
    const handleClose = () => setOpenPerfilModal(false);

    useEffect(() => {
        console.log("codigo usuario: ", codigoUsuario);
        dispatch(obtenerUsuarioPorId(codigoUsuario))
        dispatch(obtenerPostsPorUsuario(codigoUsuario))
        console.log("Datos de obtenerUsuarioPorId:", auth.obtenerUsuarioPorId);
        console.log("Datos de obtenerPostsPorUsuario:", auth.obtenerPostsPorUsuario);
      }, [codigoUsuario, dispatch, auth]);    

    const handleBack = () => navegar(-1);

    const handleFollowUser = () => {
        dispatch(seguirUsuario(codigoUsuario))
        console.log("seguir usuario")
    };

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const formatearFecha = (fecha) => {
        const fechaObj = new Date(fecha);
      
        return fechaObj.toLocaleString("es-ES", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false, // Esto asegura que el formato sea de 24 horas
        });
      };

    return (

        <div className="">
            <section className={`z-50 flex items-center sticky top-0  ${isDarkMode ? "transparencia-darkmode" : "transparencia-lightmode"}`}>
                <KeyboardBackspaceIcon className="cursor-pointer" onClick={handleBack} />
                <h2 className="ml-5 py-5 text-sl font-bold opacity-90">{auth.user?.nombreCompleto}</h2>
            </section>

            <section>
                <img className="w-[100%] h-[15rem] object-cover"
                    src={auth.user?.fotoPortada} alt="" />
            </section>

            <section className="pl-6">
                <div className="mt-5 flex justify-between items-start h-[5rem]">
                    <Avatar className="transform -translate-y-24"
                        src={auth.user?.fotoPerfil}
                        alt=''
                        sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
                    />

                    {true ?
                        (<Button onClick={handleOpenPerfilModal}
                            variant='contained' sx={{ fontWeight: "bold",  
                                                        bgcolor: "white", 
                                                        color: "black", 
                                                        textTransform: "none", 
                                                        padding: "5px", 
                                                        paddingX: "20px", 
                                                        borderRadius: "25px",
                                                        boxShadow: "none", 
                                                        border: "1px solid #D1D5DB",
                                                        "&:hover": { boxShadow: "none", bgcolor: "#f0f0f0", border: "1px solid #D1D5DB" } 
                                                        }}>
                            Editar Perfil
                        </Button>)
                        :
                        (<Button onClick={handleFollowUser}
                            variant='contained' sx={{ borderRadius: "20px" }}>
                            {true ? "Seguir" : "Dejar de Seguir"}
                        </Button>
                        )}

                </div>

                <div>
                    <div className="flex items-center">
                        <h2 className="font-bold text-lg">{auth.user?.nombreCompleto}</h2>

                        {
                            true &&
                            (<img className="ml-2 w-5 h-5"
                                src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Twitter_Verified_Badge.svg"
                                alt="Icono de perfil verificado" />
                            )
                        }

                    </div>
                    <h2 className="text-left text-gray-500">@{auth.user?.nombreUsuario.toLowerCase()}</h2>

                </div>

                <div className="mt-2 space-y-3 text-justify">

                    <p>{auth.obtenerUsuarioPorId?.biografia}</p>

                    <div className="flex py-1 space-x-5">
                        <div className="flex items-center text-gray-500">
                            <BusinessCenterIcon />
                            <p className="ml-2">Educación</p>
                        </div>

                        <div className="flex items-center text-gray-500">
                            <LocationOnIcon />
                            <p className="ml-2">{auth.user?.ubicacion}</p>
                        </div>

                        <div className="flex items-center text-gray-500">
                            <CalendarMonthIcon />
                            <p className="ml-2">{formatearFecha(auth.user?.fechaRegistro)}</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-5">

                        <div className="flex items-center space-x-1 font-semibold">
                            <span>{auth.user?.siguiendo?.length}</span>
                            <span className="text-gray-500">Siguiendo</span>
                        </div>

                        <div className="flex items-center space-x-1 font-semibold">
                            <span>{auth.user?.seguidores?.length}</span>
                            <span className="text-gray-500">Seguidores</span>
                        </div>

                    </div>

                </div>
            </section>

            <section className="py-5 justify-items-center">

                <Box value={0} sx={{
                    width: '100%', typography: 'body1'
                }}>
                    <TabContext value={tabValue}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleTabChange} aria-label="lab API tabs example">

                                <Tab label="Post" value="1" 
                                    sx={{ textTransform: 'none', 
                                        fontWeight: tabValue === "1" ? 'bold' : 'normal',
                                        color: tabValue === "1" ? 'black' : 'gray',
                                        outline: 'none',  
                                        '&:focus': {
                                        outline: 'none',  
                                        },
                                        '&:hover': {
                                        backgroundColor: 'gray.200', 
                                        }
                                    }}/>

                                <Tab label="Respuestas" value="2" 
                                    sx={{ textTransform: 'none', 
                                        fontWeight: tabValue === "2" ? 'bold' : 'normal',
                                        color: tabValue === "2" ? 'black' : 'gray',
                                        outline: 'none',  
                                        '&:focus': {
                                        outline: 'none',  
                                        },
                                        '&:hover': {
                                        backgroundColor: 'gray.200', 
                                        }
                                        }}/>

                                <Tab label="Destacados" value="3" 
                                    sx={{ textTransform: 'none', 
                                        fontWeight: tabValue === "3" ? 'bold' : 'normal',
                                        color: tabValue === "3" ? 'black' : 'gray',
                                        outline: 'none',  
                                        '&:focus': {
                                        outline: 'none',  
                                        },
                                        '&:hover': {
                                        backgroundColor: 'gray.200', 
                                        }
                                        }}/>

                                <Tab label="Artículos" value="4" 
                                    sx={{ textTransform: 'none', 
                                        fontWeight: tabValue === "4" ? 'bold' : 'normal',
                                        color: tabValue === "4" ? 'black' : 'gray',
                                        outline: 'none',  
                                        '&:focus': {
                                        outline: 'none',  
                                        },
                                        '&:hover': {
                                        backgroundColor: 'gray.200', 
                                        }
                                    }}/>

                                <Tab label="Media" value="5" 
                                    sx={{ textTransform: 'none', 
                                        fontWeight: tabValue === "5" ? 'bold' : 'normal',
                                        color: tabValue === "5" ? 'black' : 'gray',
                                        outline: 'none',  
                                        '&:focus': {
                                        outline: 'none',  
                                        },
                                        '&:hover': {
                                        backgroundColor: 'gray.200', 
                                        }
                                    }}/>

                                <Tab label="Me gusta" value="6" 
                                    sx={{ textTransform: 'none', 
                                        fontWeight: tabValue === "6" ? 'bold' : 'normal',
                                        color: tabValue === "6" ? 'black' : 'gray',
                                        outline: 'none',  
                                        '&:focus': {
                                        outline: 'none',  
                                        },
                                        '&:hover': {
                                        backgroundColor: 'gray.200', 
                                        }
                                    }}/>
                                    
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            {post?.posts?.map((item) => <Post item = {item}/>)}
                        </TabPanel>
                        <TabPanel value="2">Respuestas</TabPanel>
                        <TabPanel value="3">Destacados</TabPanel>
                        <TabPanel value="4">Artículos</TabPanel>
                        <TabPanel value="5">Media</TabPanel>
                        <TabPanel value="6">Me gusta</TabPanel>
                    </TabContext>
                </Box>
            </section>

            <section>
                <ModalPerfil handleClose={handleClose} open={openPerfilModal} />
            </section>

        </div>
    )
}

export default Perfil
