import React from "react";
import { useNavigate } from "react-router-dom";

import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import RepeatRoundedIcon from "@mui/icons-material/RepeatRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import FileUploadRoundedIcon from "@mui/icons-material/FileUploadRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";

import ModalResponder from "../components/perfil/ModalResponder";

const Post = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const [openReplyModal, setOpenReplyModal] = React.useState(false);
  const handleOpenReplyModal = () => setOpenReplyModal(true);
  const handleCloseReplyModal = () => setOpenReplyModal(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteTweet = () => {
    handleClose();
  };

  const handleCreateRepost = () => { };

  const handleLikePost = () => { };

  const handleBookmarkPost = () => { };

  const handleSharePost = () => { };

  return (
    <React.Fragment className=" pb-6 hover:bg-gray-100 ">
      <div className="flex content-start p-3 ">
        <Avatar
          onClick={() => navigate(`/perfil/${6}`)}
          className="cursor-pointer"
          alt="username"
          src="https://i.pinimg.com/736x/95/78/83/9578835cc8ee0e2dc3e7a7cc265ea994.jpg"
        />
        <div className="flex flex-col  items-start cursor-pointer ml-2  ">
          <div className="font-semibold  flex items-center justify-evenly">
            <span className="mr-0.5">Ronny, José Daniel y Aída</span>
            <img
              className="w-4 h-4 mr-1"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/512px-Twitter_Verified_Badge.svg.png?20230807021642"
              alt=""
            />
            <span className="font-normal text-gray-600 text-sm">@proyectobd1 · Mar 14</span>
          </div>
          <p className="mb-2 p-0">Gato en una computadora</p>
        </div>
        <div class="flex-grow"></div>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
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
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleDeleteTweet}>Borrar</MenuItem>
          <MenuItem onClick={handleDeleteTweet}>Editar</MenuItem>
        </Menu>
      </div>
      
      <div onClick={() => navigate(`/post/${3}`)} className="cursor-pointer p-3  w-full flex flex-col items-center">
        <img
          className="w-4/5 border border-gray-400  rounded-md"
          src="https://external-preview.redd.it/3_9hIPmOuH0gCDCbcAbmz7SPxmEjzWHaNbJJdiHXdBc.jpg?auto=webp&s=eb81d62bfd6d58fda742517c9d98ec2bef314b54"
          alt=""
        />

        <div className="space-x-3 w-4/5 pt-3 flex items-center text-gray-600">
          <div
            className={`${false ? "text-[#1DA1F2]" : "text-gray-300"
              } space-x-3 flex items-center`}
          >
            <ChatBubbleOutlineRoundedIcon
              className="cursor-pointer"
              onClick={handleOpenReplyModal}
            />
            <p>10 </p>
          </div>

          <div
            className={`${false ? "text-[#00BA7C]" : "text-gray-300"
              } space-x-3 flex items-center`}
          >
            <RepeatRoundedIcon
              className="cursor-pointer"
              onClick={handleCreateRepost}
            />
            <p>10</p>
          </div>

          <div
            className={`${true ? "text-[#F91880]" : "text-gray-300"
              } space-x-3 flex items-center`}
          >
            {false ? (
              <FavoriteBorderRoundedIcon
                className="cursor-pointer"
                onClick={handleLikePost}
              />
            ) : (
              <FavoriteRoundedIcon
                className="cursor-pointer"
                onClick={handleLikePost}
              />
            )}
            <p>10 </p>
          </div>

          <div
            className={`${true ? "text-[#1DA1F2]" : "text-gray-600"
              } space-x-3 flex items-center`}
          >
            <BarChartRoundedIcon
              className="cursor-pointer"
              onClick={handleOpenReplyModal}
            />
            <p>10 </p>
          </div>
          <div class="flex-grow"></div>
          <div
            className={`${true ? "text-[#1DA1F2]" : "text-gray-600"
              } space-x-3 flex items-center`}
          >
            {true ? (
              <BookmarkBorderRoundedIcon
                className="cursor-pointer"
                onClick={handleBookmarkPost}
              />
            ) : (
              <BookmarkRoundedIcon
                className="cursor-pointer"
                onClick={handleBookmarkPost}
              />
            )}
          </div>

          <div
            className={`${true ? "text-[#1DA1F2]" : "text-gray-600"
              } space-x-3 flex items-center`}
          >
            <FileUploadRoundedIcon
              className="cursor-pointer"
              onClick={handleSharePost}
            />
          </div>
        </div>
      </div>
      <section>
        <ModalResponder open={openReplyModal} handleClose={handleCloseReplyModal}/>
      </section>
    </React.Fragment>
  );
};

export default Post;