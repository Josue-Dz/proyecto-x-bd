import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Divider } from '@mui/material';

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import Post from '../../pages/Post';
import { useTheme } from '../../context/ThemeContext';

export const DetallesPost = () => {
    const navigate = useNavigate();
    const handleBack = () => navigate(-1);
    const { isDarkMode } = useTheme();

    return (
        <React.Fragment>

            <section className={`z-50 flex items-center sticky top-0 
                ${ isDarkMode ? "transparencia-darkmode" : "transparencia-lightmode" }`}>

                <KeyboardBackspaceIcon className='cursor-pointer' onClick={handleBack} />
                <h2 className='ml-5 py-5 text-xl font-bold opacity-90'>Post</h2>

            </section>

            <section>
                <Post />
                <Divider sx={{margin:"2rem 0rem"}}/>
            </section>

            <section>
                {[1,1,1].map((item) => <Post />)}
            </section>

        </React.Fragment>
    )
}

export default DetallesPost
