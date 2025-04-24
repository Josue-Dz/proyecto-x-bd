import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Divider } from '@mui/material';

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import Post from '../../pages/Post';
import { useTheme } from '../../context/ThemeContext';
import { useDispatch, useSelector } from 'react-redux';
import * as PostStore from "../../Store/Post";

export const DetallesPost = () => {
    const navigate = useNavigate();
    const handleBack = () => navigate(-1);
    const dispatch = useDispatch();
    const {codigoPost} = useParams();
    const {post} = useSelector(store => store);
    const { isDarkMode } = useTheme();

    useEffect(() => {
        if(codigoPost)
            dispatch(PostStore.obtenerPostPorId(codigoPost))
    }, [codigoPost, dispatch])

    return (
        <React.Fragment>
            <div className='border-gray-700 border-[0.5px] h-full p-2'>
                <section className={`z-50 flex items-center sticky top-0  
                    ${isDarkMode ? "transparencia-darkmode" : "transparencia-lightmode"}`}>

                    <KeyboardBackspaceIcon className='cursor-pointer' onClick={handleBack} />
                    <h2 className='ml-5 py-5 text-xl font-bold opacity-90'>Post</h2>

                </section>

                <section>
                    <Post item = {post.post}/>
                    <Divider sx={{ margin: "2rem 0rem" }} />
                </section>

                <section>
                    {post?.post?.comentarios?.map((item) => <Post item = {item}/>)}
                </section>
            </div>
        </React.Fragment>
    )
}

export default DetallesPost
