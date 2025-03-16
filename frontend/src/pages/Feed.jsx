import React, { useState } from 'react'
import { Avatar, Button } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Tweet from './Tweet';

import ImageIcon from '@mui/icons-material/Image';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';

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
    <div className='space-y-5'>

        <section>
            <h4 className='py-5 text-x1 font-bold opacity-90'>Para ti</h4>
        </section>

        <section className={`pb-10`}>
            <div className='flex space-x-5'>
                <Avatar alt="username" src='https://i.pinimg.com/736x/95/78/83/9578835cc8ee0e2dc3e7a7cc265ea994.jpg'/>
            </div>

            <div className='w-full'>
                <form onSubmit={formik.handleSubmit}>

                    <div>
                        <input type='text' name='content' placeholder='¡¿Qué está pasando?!' className={`border-none outline-none text-x1 bg-transparent`}
                        {...formik.getFieldProps("content")}/>
                        {formik.errors.content && formik.touched.content && (
                            <span className='text-red-500'>{formik.errors.content}</span>
                        )}
                    </div>

                    {/*<div>
                       <img src="" alt=""/> 
                    </div>*/}

                    <div className='flex justify-between items-center mt-5'>

                        <div className='flex space-x-5 items-center'>

                            <label className='flex items-center space-x-2 rounded-md cursor-pointer'>
                            <ImageIcon className='text-[#1d9bf0]'/>
                            <input type='file' name='imageFile' className='hidden' onChange={handleSelectImage}/>
                            </label>

                            <FmdGoodIcon className='text-[#1d9bf0]'/>
                            <TagFacesIcon className='text-[#1d9bf0]'/>

                        </div>

                        <div>
                            <Button sx={{ width: "100%", borderRadius: "20px", paddingY: "8px", paddingX: "20px", bgcolor: "#000000" }} variant='contained' type='submit'>
                                Postear
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </section>

        <section>
            {[1,1,1,1,1].map((item)=> <Tweet/>)}
        </section>
    </div>
  )
}

export default Feed