import React, { useState } from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import { useNavigate } from 'react-router-dom';
import { Avatar, Box, Button, Tab } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import ModalPerfil from './ModalPerfil';
import Tweet from '../../pages/Post';
import { useTheme } from '../../context/ThemeContext';



const Perfil = () => {
    const navegar = useNavigate();
    const [tabValue, setTabValue] = useState("1");
    const { isDarkMode } = useTheme();

    const [openPerfilModal, setOpenPerfilModal] = useState(false);
    const handleOpenPerfilModal = () => setOpenPerfilModal(true);
    const handleClose = () => setOpenPerfilModal(false);

    const handleBack = () => navegar(-1);

    const handleFollowUser = () => {
        console.log("seguir usuario")
    };

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };



    return (

        <div className="">
            <section className={`z-50 flex items-center sticky top-0  ${isDarkMode ? "transparencia-darkmode" : "transparencia-lightmode"}`}>
                <KeyboardBackspaceIcon className="cursor-pointer" onClick={handleBack} />
                <h2 className="ml-5 py-5 text-sl font-bold opacity-90">Ronny, José Daniel y Aída</h2>
            </section>

            <section>
                <img className="w-[100%] h-[15rem] object-cover"
                    src="https://cdn.pixabay.com/photo/2021/09/06/20/12/cat-6602447_1280.jpg" alt="" />
            </section>

            <section className="pl-6">
                <div className="mt-5 flex justify-between items-start h-[5rem]">
                    <Avatar className="transform -translate-y-24"
                        src="https://i.pinimg.com/736x/95/78/83/9578835cc8ee0e2dc3e7a7cc265ea994.jpg"
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
                        <h2 className="font-bold text-lg">Ronny, José Daniel y Aída</h2>

                        {
                            true &&
                            (<img className="ml-2 w-5 h-5"
                                src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Twitter_Verified_Badge.svg"
                                alt="Icono de perfil verificado" />
                            )
                        }

                    </div>
                    <h2 className="text-left text-gray-500">@proyectoBD1</h2>

                </div>

                <div className="mt-2 space-y-3 text-justify">

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium alias ducimus dolorum officiis neque obcaecati,
                        laudantium nisi inventore accusantium in magni illum molestias odio eum amet sint et tempora molestiae.
                    </p>

                    <div className="flex py-1 space-x-5">
                        <div className="flex items-center text-gray-500">
                            <BusinessCenterIcon />
                            <p className="ml-2">Educación</p>
                        </div>

                        <div className="flex items-center text-gray-500">
                            <LocationOnIcon />
                            <p className="ml-2">Honduras</p>
                        </div>

                        <div className="flex items-center text-gray-500">
                            <CalendarMonthIcon />
                            <p className="ml-2">Se unió el 20 febrero de 2025</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-5">

                        <div className="flex items-center space-x-1 font-semibold">
                            <span>50</span>
                            <span className="text-gray-500">Siguiendo</span>
                        </div>

                        <div className="flex items-center space-x-1 font-semibold">
                            <span>10</span>
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
                                    
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            {[1, 1, 1, 1].map((item) => <Tweet />)}
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
