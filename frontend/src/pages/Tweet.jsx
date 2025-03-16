import React from 'react'
import { useNavigate } from 'react-router-dom';

import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';

const Tweet = () => {

  const navigate = useNavigate();
  
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleDeleteTweet = () => {
      handleClose();
    }

    const handleOpenReplyModal = () => {

    }

    const handleCreateRepost = () => {

    }

    const handleLikePost = () => {

    }

    const handleBookmarkPost = () => {

    }

    const handleSharePost = () => {

    }

  return (
    <div className=''>

        <div className='flex space-x-5'>
          <Avatar onClick={() => navigate(`/perfil/${6}`)} className='cursor-pointer' alt="username" src='https://i.pinimg.com/736x/95/78/83/9578835cc8ee0e2dc3e7a7cc265ea994.jpg'/>
        </div>

        <div className='w-full'>

          <div className='flex justify-between items-center'>

            <div className='flex cursor-pointer items-center space-x-2'>

              <span className='font-semibold'>Ronny, José Daniel y Aída</span>
              <span className='text-gray-600'>@proyectoBD1 . Ahora</span>
              <img className='ml-2 w-5 h-5' 
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/512px-Twitter_Verified_Badge.svg.png?20230807021642' 
              alt=''/>

            </div>

            <div>
            <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <MoreHorizIcon />
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleDeleteTweet}>Borrar</MenuItem>
                    <MenuItem onClick={handleDeleteTweet}>Editar</MenuItem>
                </Menu>
            </div>

            <div className='mt-2'>

              <div className='cursor-pointer'>
                <p className='mb-2 p-0'>Ejemplo de como se vería un post con una imagen</p>
                <img className='w-[28rem] border border-gray-400 p-5 rounded-md' 
                src='https://external-preview.redd.it/3_9hIPmOuH0gCDCbcAbmz7SPxmEjzWHaNbJJdiHXdBc.jpg?auto=webp&s=eb81d62bfd6d58fda742517c9d98ec2bef314b54' 
                alt=''/>
              </div>

              <div className='py-5 flex flex-wrap justify-between items-center'>
                <div className='space-x-3 flex items-center text-gray-600'>

                  <div className={`${true? "text-[#1DA1F2]":"text-gray-600"} space-x-3 flex items-center`}>
                    <ChatBubbleOutlineRoundedIcon className='cursor-pointer' onClick={handleOpenReplyModal}/>
                    <p>10 comentarios</p>
                  </div>

                  <div className={`${true? "text-[#00BA7C]":"text-gray-600"} space-x-3 flex items-center`}>
                    <RepeatRoundedIcon className='cursor-pointer' onClick={handleCreateRepost}/>
                    <p>10 reposteos</p> 
                  </div>

                  <div className={`${true? "text-[#F91880]":"text-gray-600"} space-x-3 flex items-center`}>
                    {true? <FavoriteBorderRoundedIcon className='cursor-pointer' onClick={handleLikePost}/>:
                    <FavoriteRoundedIcon className='cursor-pointer' onClick={handleLikePost}/>}
                    <p>10 likes</p> 
                  </div>

                  <div className={`${true? "text-[#1DA1F2]":"text-gray-600"} space-x-3 flex items-center`}>
                    <BarChartRoundedIcon className='cursor-pointer' onClick={handleOpenReplyModal}/>
                    <p>10 visualizaciones</p>
                  </div>

                  <div className={`${true? "text-[#1DA1F2]":"text-gray-600"} space-x-3 flex items-center`}>
                    {true? <BookmarkBorderRoundedIcon className='cursor-pointer' onClick={handleBookmarkPost}/>:
                    <BookmarkRoundedIcon className='cursor-pointer' onClick={handleBookmarkPost}/>}
                  </div>

                  <div className={`${true? "text-[#1DA1F2]":"text-gray-600"} space-x-3 flex items-center`}>
                    <FileUploadRoundedIcon className='cursor-pointer' onClick={handleSharePost}/>
                  </div>
                
                </div>
              </div>

            </div>

          </div>
        </div>

    </div>
  )
}

export default Tweet