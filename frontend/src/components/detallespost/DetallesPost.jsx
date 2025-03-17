import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Divider } from '@mui/material';

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import Tweet from '../../pages/Tweet';

export const DetallesPost = () => {
    const navigate = useNavigate();
    const handleBack = () => navigate(-1);

    return (
        <React.Fragment>

            <section className={`bg-white z-50 flex items-center sticky top-0 bg-opacity-95`}>

                <KeyboardBackspaceIcon className='cursor-pointer' onClick={handleBack} />
                <h2 className='ml-5 py-5 text-xl font-bold opacity-90'>Post</h2>

            </section>

            <section>
                <Tweet />
                <Divider sx={{margin:"2rem 0rem"}}/>
            </section>

            <section>
                {[1,1,1].map((item) => <Tweet />)}
            </section>

        </React.Fragment>
    )
}

export default DetallesPost
