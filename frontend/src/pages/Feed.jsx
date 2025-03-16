import React, { useState } from 'react'
import { Avatar, Button } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Tweet from './Tweet';

import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import DataUsageRoundedIcon from "@mui/icons-material/DataUsageRounded";
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

const validationSchema = Yup.object().shape({
    content:Yup.string().required("El texto para el post es obligatorio"),
})

const Feed = () => {

    const [uploadingImage, setUploadingImage] = useState(false);

    const [selectImage, setSelectedImage] = useState("");

    const handleSubmit = (values) =>{
        console.log("values ", values)
    }

    const formik = useFormik({
        initialValues:{
            content:"",
            image:""
        },
        onSubmit:handleSubmit
    })

    const handleSelectImage = (event) => {
        setUploadingImage(true);
        const imgUrl = event.target.files[0];
        formik.setFieldValue("image", imgUrl);
        setSelectedImage(imgUrl);
        setUploadingImage(false);
    }
    
  return (
    <div className='border-gray-200 border-[1px] h-full'>

        <section className="h-1/55 flex justify-evenly border-gray-200 border-b-[1px] items-center relative">
            <div className="flex flex-col w-full hover:bg-gray-100 cursor-pointer">
                <h6 className="py-2 text-base font-bold opacity-90">Para ti</h6>
                <span className="bottom-0 left-0 w-full h-1 bg-blue-500 rounded-full"></span>
            </div>

            <div className="flex flex-col w-full hover:bg-gray-100 cursor-pointer">
                <h6 className="py-3 text-base font-bold opacity-90">Siguiendo</h6>
            </div>
        </section>

        <section className="p-5 border-gray-200 border-b-[1px]">
        <div className="flex items-start space-x-3 pt-3">
            <Avatar
            alt="username"
            src="https://i.pinimg.com/736x/95/78/83/9578835cc8ee0e2dc3e7a7cc265ea994.jpg"
            className="w-12 h-12"
            />

            <div className="w-full">
            <form onSubmit={formik.handleSubmit}>
                <div className="border-b border-gray-300 pb-2">
                <input
                    type="text"
                    name="content"
                    placeholder="¿Qué está pasando?"
                    className="w-full border-none outline-none text-lg bg-transparent"
                    {...formik.getFieldProps("content")}
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
                    "&:hover": { backgroundColor: "#8899a6" },
                    "&:not(:disabled)": { backgroundColor: "#000000" }, 
                    }}
                    variant="contained"
                    type="submit"
                    disabled={!formik.values.content}
                >
                    Postear
                </Button>
                </div>
            </form>
            </div>
        </div>
        </section>

        <section>
            {[1,1,1,1,1].map((item)=> <Tweet/>)}
        </section>
    </div>
  )
}

export default Feed