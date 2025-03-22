import React from 'react';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Avatar, IconButton, TextField } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

export default function ModalMensajeNuevo({ open, handleClose }) {
    const [uploading, setUploading] = useState(false);
    const { isDarkMode } = useTheme();

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: isDarkMode ? 'rgba(0, 0, 0, 0.9)' : 'background.paper',
        border: "none",
        boxShadow: 24,
        p: 4,
        outline: "none",
        borderRadius: 4
    };

    const handleSubmit = (values) => {
        console.log("Submit", values);
    }

    const formik = useFormik({
        initialValues: { mensaje: '' },
        onSubmit: handleSubmit
      });


    return (
        <div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={formik.handleSubmit}>

                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">

                                <IconButton sx={{ color: isDarkMode ? "white" : "black" }} onClick={handleClose} aria-label="cerrar">
                                    <CloseIcon />
                                </IconButton>

                                <p className={isDarkMode ? "dark:text-white" : "text-black"}>Nuevo mensaje</p>

                            </div>

                            <Button sx={{
                                fontWeight: "bold",  
                                textTransform: "none", 
                                padding: "5px", 
                                paddingX: "20px", 
                                borderRadius: "25px",
                                boxShadow: "none", 
                                bgcolor: isDarkMode ? "#ffffff" : "#000000",
                                color: isDarkMode ? "#000000" : "#ffffff",
                            }}
                                type='submit' >Siguiente</Button>
                        </div>

                        <div className="overflow-y-scroll overflow-x-hidden h-[80vh]">
                                <div className="w-full">
                                    <div className='relative flex items-center mx-3.5'>
                                        <input type='text' placeholder="Buscar personas" className='py-3 rounded-full text-gray-500 w-full pl-12' />

                                        <div className='absolute top-0 left-0 pl-3 pt-3'>
                                            <SearchRoundedIcon className='text-gray-500' />
                                        </div>
                                    </div>
                                </div>
                        </div>



                    </form>
                </Box>
            </Modal>
        </div>
    );
}