import React, { useEffect, useState } from 'react'
import { Avatar, Button, Tab, Box } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Post from './Post';
import * as PostStore from "../Store/Post";
//import * as Upload from "../Utils";

import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import DataUsageRoundedIcon from "@mui/icons-material/DataUsageRounded";
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { useTheme } from '../context/ThemeContext'
import { useDispatch, useSelector } from 'react-redux';

const validationSchema = Yup.object().shape({
    contenido:Yup.string().required("El texto para el post es obligatorio"),
})

const Feed = () => {

    const [uploadingImage, setUploadingImage] = useState(false);
    const [selectImage, setSelectedImage] = useState("");
    const dispatch = useDispatch();
    const {auth, post} = useSelector(store => store);
    console.log("post: ", post);
    const [tabValue, setTabValue] = useState("1");
    const { isDarkMode } = useTheme();

    const handleSubmit = (values, actions) =>{
        console.log("Formulario enviado con los siguientes valores:", values);
        dispatch(PostStore.crearPost(values));
        actions.resetForm();
    };
    
    useEffect(() => {
        dispatch(PostStore.obtenerTodosLosPost())
    }, [dispatch, post.like, post.repost]) //detalle 1:17:00

    const formik = useFormik({
        initialValues:{
            contenido:"",
            multimedia:""
        },
        onSubmit:handleSubmit,
        validationSchema,
    });

    const handleSelectImage = (event) => {
        setUploadingImage(true);
        const imgUrl = event.target.files[0]; //await Upload.uploadToCloudinary(event.target.files[0])
        formik.setFieldValue("multimedia", imgUrl);
        setSelectedImage(imgUrl);
        setUploadingImage(false);
    }

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };
    
  return (
        <div className={`border-[0.5px] h-full ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}>

        <section className="py-1">

            <Box value={0} sx={{
                width: '100%'
            }}>
                <TabContext value={tabValue}>
                    <Box sx={{ borderBottom: 1, borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.15)' , display: 'flex', justifyContent: 'center', width: '100%'  }}>
                        <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                            <Tab 
                                label="Para ti" 
                                value="1" 
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
                                 }} 
                            />
                            <Tab 
                                label="Siguiendo" 
                                value="2" 
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
                                 }} 
                            />
                         </TabList>
                    </Box>

                    <TabPanel value="1">
                    <section className="p-2 border-gray-700 border-b-[0.5px]">
                        <div className="flex items-start space-x-3">
                            <Avatar
                            alt="username"
                            src={auth.user?.fotoPerfil}
                            className="w-12 h-12"
                            />

                            <div className="w-full">
                            <form onSubmit={formik.handleSubmit}>
                                <div className="border-b border-gray-300 pb-2">
                                <input
                                    type="text"
                                    name="contenido"
                                    placeholder="¿Qué está pasando?"
                                    className="w-full border-none outline-none text-lg bg-transparent"
                                    {...formik.getFieldProps("contenido")}
                                />
                                {formik.errors.content && formik.touched.content && (
                                    <span className="text-red-500">{formik.errors.content}</span>
                                )}
                                </div>

                                <div className="flex justify-between items-center mt-4">
                                <div className="flex space-x-2 items-center text-[#1d9bf0]">
                                    <label className="flex items-center cursor-pointer">
                                    <BrokenImageOutlinedIcon fontSize="small" className="w-4 h-4"/>
                                    <input
                                        type="file"
                                        name="imageFile"
                                        className="hidden"
                                        onChange={handleSelectImage}
                                    />
                                    </label>
                                    <GifBoxOutlinedIcon fontSize="small" className="w-4 h-4"/>
                                    <DataUsageRoundedIcon fontSize="small" className="w-4 h-4"/>
                                    <BallotOutlinedIcon fontSize="small" className="w-4 h-4"/>
                                    <EmojiEmotionsOutlinedIcon fontSize="small" className="w-4 h-4"/>
                                    <CalendarTodayOutlinedIcon fontSize="small" className="w-4 h-4"/>
                                    <FmdGoodOutlinedIcon fontSize="small" className="w-4 h-4"/>
                                </div>

                                <Button
                                    sx={{
                                    borderRadius: "20px",
                                    paddingY: "4px",
                                    paddingX: "12px",
                                    fontSize: "0.875rem",
                                    minWidth: "auto",
                                    backgroundColor: "#8899a6", 
                                    color: "white",
                                    textTransform: "none",
                                    "&:hover": { backgroundColor: "#8899a6" },
                                    "&:not(:disabled)": { backgroundColor: "#000000" }, 
                                    }}
                                    variant="contained"
                                    type="submit"
                                    disabled={!formik.values.contenido}
                                >
                                    Postear
                                </Button>
                                </div>
                            </form>
                                {/* 
                                <div>
                                    {selectImage && <img src={selectImage} alt=""/>}
                                </div> 
                                */}
                            </div>
                        </div>
                        </section>

                        <section>
                            {post.posts.map((item)=> <Post item = {item} />)}
                        </section>
                    </TabPanel>
                </TabContext>
            </Box>
        </section>

            
    </div>
  )
}

export default Feed