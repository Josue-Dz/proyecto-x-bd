import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Avatar, Backdrop } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ImageIcon from '@mui/icons-material/Image';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFaceIcon from '@mui/icons-material/TagFaces';
import { useFormik } from 'formik';
import { useTheme } from '../../context/ThemeContext'



export default function ModaResponder({ open, handleClose }) {
    const navigate = useNavigate();
    const [uploadingImage, setUploadingImage] = React.useState(false);
    const [selectedImage, setSelectedImage] = React.useState("");
    const { isDarkMode } = useTheme();

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: isDarkMode ? 'rgba(0, 0, 0, 0.9)' : 'background.paper',
        border: 'none',
        boxShadow: 24,
        p: 4,
        outline: "none",
        borderRadius: 4
    };

    const handleSubmit = (values) => {
        console.log("submit", values)
    }

    const handleSelectImage = (event) => {
        setUploadingImage(true);
        const imgUrl = event.target.files[0];
        formik.setFieldValue("image", imgUrl);
        setSelectedImage(imgUrl);
        setUploadingImage(false);
    }

    const formik = useFormik({
        initialValues: {
            contenido: "",
            imagen: "",
            postId: 4
        },
        onSubmit: handleSubmit
    });

    return (
        <div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className=''
            >
                <Box sx={style}>
                    <div className="flex space-x-5">
                        <Avatar
                            onClick={() => navigate(`/perfil/${6}`)}
                            className="cursor-pointer"
                            alt=""
                            src="https://cdn.pixabay.com/photo/2025/01/08/19/02/border-collie-9319990_1280.jpg"
                        />

                        <div className="w-full">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center space-x-2 cursor-pointer">
                                    <span className="font-semibold">Test User</span>
                                    <img className="ml-2 w-5 h-5"
                                        alt=""
                                        src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Twitter_Verified_Badge.svg"
                                    />
                                    <span className="text-gray-600">@testuser . 2m</span>
                                </div>
                            </div>

                            <div className="mt-2">
                                <div>
                                    <p>Contenido del post</p>
                                </div>
                                <div onClick={() => navigate(`/post/${3}`)}
                                    className="cursor-pointer"
                                >
                                    <p className="mb-2 p-0"></p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <section className={`py-10`}>
                        <div className="flex space-x-5">
                            <Avatar
                                alt=""
                                src="https://cdn.pixabay.com/photo/2025/01/08/19/02/border-collie-9319990_1280.jpg"
                            />

                            <div className="w-full">
                                <form onSubmit={formik.handleSubmit}>
                                    <div>
                                        <input
                                            type="text"
                                            name="contenido"
                                            placeholder="¿Qué está pasando?"
                                            className="w-full border-none outline-none text-lg bg-transparent"
                                            {...formik.getFieldProps("contenido")}
                                        />
                                        {formik.errors.contenido && formik.touched.contenido && (
                                            <span className="text-red-500">{formik.errors.contenido}</span>
                                        )}

                                        <div className="flex justify-between items-center mt-5">
                                            <div className="flex space-x-5 items-center">
                                                <label className="flex items-center space-x-2 cursor-pointer rounded-md">
                                                    <ImageIcon
                                                        className="text-[#1d9bf0]"
                                                    />
                                                    <input
                                                        type='file'
                                                        name='imagen'
                                                        className="hidden"
                                                        onChange={handleSelectImage}
                                                    />

                                                </label>
                                                <FmdGoodIcon className="text-[#1d9bf0]" />
                                                <TagFaceIcon className="text-[#1d9bf0]" />

                                            </div>

                                            <div>
                                                <Button
                                                    sx={{
                                                        width: "100%",
                                                        borderRadius: "20px",
                                                        paddingY: "10px",
                                                        paddingX: "20px",
                                                        bgcolor: "#1e88e5"
                                                    }}
                                                    variant="contained"
                                                    type="submit"
                                                >
                                                    Responder
                                                </Button>

                                            </div>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </Box>
            </Modal>
        </div>
    );
}
