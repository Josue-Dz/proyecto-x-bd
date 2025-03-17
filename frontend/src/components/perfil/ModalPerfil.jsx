import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { Avatar, IconButton, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useState } from 'react'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: "none",
    boxShadow: 24,
    p: 4,
    outline: "none",
    borderRadius: 4
};

export default function ModalPerfil({open, handleClose}) {
    const [uploading, setUploading] = useState(false);

    const handleSubmit = (values) => {
        console.log("Submit", values);
    }

    const handleImageChange = (event) => {
        setUploading(true);
        const { nombre } = event.target;
        const { archivo } = event.target.files[0];
        formik.setFieldValue(nombre, archivo);
        setUploading(false);
    }

    const formik = useFormik({
        initialValues: {
            nombre: "",
            biografia: "",
            ubicacion: "",
            sitioweb: "",
            imagenFondo: "",
            imagen: ""
        },
        onSubmit: handleSubmit
    })


    return (
        <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={formik.handleSubmit}>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">

                                <IconButton onClick={handleClose} aria-label="cerrar">
                                    <CloseIcon />
                                </IconButton>

                                <p className="text-black">Editar Perfil</p>

                            </div>

                            <Button type='submit'>Guardar</Button>
                        </div>

                        <div className="overflow-y-scroll overflow-x-hidden h-[80vh]">
                            <React.Fragment>

                                <div className="w-full">
                                    <div className="relative">
                                        <img className="w-full h-[12rem] object-cover object-center"
                                            src="https://cdn.pixabay.com/photo/2023/12/30/21/14/fields-8478994_1280.jpg"
                                            alt="Imagen de portada del perfil"
                                        />
                                        <input
                                            type="file"
                                            className="w-full h-full absolute top-0 left-0 opacity-0 cursor-pointer"
                                            name="imagenFondo"
                                            onChange={handleImageChange}
                                        />
                                    </div>
                                </div>

                                <div className="w-full transform -translate-y-20 ml-4 h-[6rem]">
                                    <div className="relative">
                                        <Avatar 
                                            sx={{width: "10rem", height:"10rem", border: "4px solid white"}}
                                            src="https://cdn.pixabay.com/photo/2025/01/08/19/02/border-collie-9319990_1280.jpg"
                                            alt="Imagen del perfil"
                                        />
                                        <input 
                                            className="absolute top-0 left-0 w-[10rem] h-full opacity-0 cursor-pointer"
                                            type="file"
                                            name="imagePerfil"
                                            onChange={handleImageChange}
                                        />

                                    </div>
                                </div>

                            </React.Fragment>

                            <div className="space-y-6 mr-2">

                                <div className="mt-1">
                                    <TextField
                                        id="nombre"
                                        name="nombre"
                                        label="Nombre"
                                        value={formik.values.nombre}
                                        onChange={formik.handleChange}
                                        error={formik.touched.nombre && Boolean(formik.errors.nombre)}
                                        helperText={formik.touched.nombre && formik.errors.nombre}
                                        fullWidth
                                    />
                                </div>

                                <div>
                                    <TextField
                                        id="biografia"
                                        name="biografia"
                                        label="Biografía"
                                        value={formik.values.biografia}
                                        onChange={formik.handleChange}
                                        error={formik.touched.biografia && Boolean(formik.errors.biografia)}
                                        helperText={formik.touched.biografia && formik.errors.biografia}
                                        fullWidth
                                        multiline
                                        rows={3}
                                    />
                                </div>

                                <div>
                                    <TextField
                                        id="ubicacion"
                                        name="ubicacion"
                                        label="Ubicación"
                                        value={formik.values.ubicacion}
                                        onChange={formik.handleChange}
                                        error={formik.touched.ubicacion && Boolean(formik.errors.ubicacion)}
                                        helperText={formik.touched.ubicacion && formik.errors.ubicacion}
                                        fullWidth
                                    />
                                </div>

                                <div>
                                    <TextField
                                        id="sitioweb"
                                        name="sitioweb"
                                        label="Sitio Web"
                                        value={formik.values.sitioweb}
                                        onChange={formik.handleChange}
                                        error={formik.touched.sitioweb && Boolean(formik.errors.sitioweb)}
                                        helperText={formik.touched.sitioweb && formik.errors.sitioweb}
                                        fullWidth
                                    />
                                </div>

                                <div className="my-3">
                                    <p className="text-lg text-gray-600">Fecha de nacimiento . Editar</p>
                                    <p className="text-2xl text-black">10 de Mayo de 1970</p>
                                </div>

                                <p className="py- text-lg text-black">Crear biografía ampliada</p>
                                <p className="py- text-lg text-black">Cambiar a profesional</p>

                            </div>

                        </div>



                    </form>
                </Box>
            </Modal>
        </div>
    );
}