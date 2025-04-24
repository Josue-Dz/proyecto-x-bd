import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";

import ModalResponder from "../components/perfil/ModalResponder";
import * as PostStore from "../Store/Post";

const Post = ({item}) => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Datos de item:", item);
  }, [item]);

  const {auth} = useSelector(store => store);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const [openReplyModal, setOpenReplyModal] = React.useState(false);
  const handleOpenReplyModal = () => setOpenReplyModal(true);
  const handleCloseReplyModal = () => setOpenReplyModal(false);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteTweet = () => {
    handleClose();
  };

  const handleCreateRepost = () => { 
    dispatch(PostStore.repostearPost(item.codigoPost))
  };

  const handleLikePost = () => {
    dispatch(PostStore.darleLikeAPost(item.codigoPost))
   };

  const handleBookmarkPost = () => { };

  const handleSharePost = () => { };

  const formatearFecha = (fecha) => {
    const fechaObj = new Date(fecha);
  
    return fechaObj.toLocaleString("es-ES", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false, // Esto asegura que el formato sea de 24 horas
    });
  };

  const fecha = item?.fechaPost || item?.fechaComentario;

  const fechaFormateada = fecha ? formatearFecha(fecha) : "Fecha no disponible";

  return (
    <React.Fragment className=" pb-6 hover:bg-gray-100 ">
      <div className="flex content-start p-3 ">
        <Avatar
          onClick={() => navigate(`/perfil/${item?.usuarioAutor?.codigoUsuario}`)}
          className="cursor-pointer"
          alt="username"
          src={item?.usuarioAutor?.fotoPerfil}
        />
        <div className="flex flex-col  items-start cursor-pointer ml-2  ">
          <div className="font-semibold  flex items-center justify-evenly">
            <span className="mr-0.5">{item?.usuarioAutor?.nombreCompleto}</span>
            <img
              className="w-4 h-4 mr-1"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/512px-Twitter_Verified_Badge.svg.png?20230807021642"
              alt=""
            />
            <span className="font-normal text-gray-600 text-sm">@{item?.usuarioAutor?.nombreUsuario.toLowerCase()} · {fechaFormateada}</span>
          </div>
          <p className="mb-2 p-0">
            {item?.contenido}
          </p>
        </div>
        <div class="flex-grow"></div>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={isMenuOpen  ? "true" : undefined}
          onClick={handleClick}
        >
          <MoreHorizIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={isMenuOpen}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleDeleteTweet}>Borrar</MenuItem>
          <MenuItem onClick={handleDeleteTweet}>Editar</MenuItem>
        </Menu>
      </div>
      
      <div onClick={() => navigate(`/post/${item?.codigoPost}`)} className="cursor-pointer p-3  w-full flex flex-col items-center">
        <img
          className="w-4/5 border border-gray-400  rounded-md"
          src={item?.multimedia}
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
            <p>{item?.cantidadComentarios}</p>
          </div>

          <div
            className={`${item?.isRepost ? "text-[#00BA7C]" : "text-gray-300"
              } space-x-3 flex items-center`}
          >
            {item?.isRepost ? (
              <RepeatRoundedIcon
                className="cursor-pointer"
                onClick={handleCreateRepost}
              />
            ) : (
              <RepeatRoundedIcon
                className="cursor-pointer"
                onClick={handleCreateRepost}
              />
            )}
            <p>{item?.cantidadReposteos}</p>
          </div>

          <div
            className={`${item?.isLiked ? "text-[#F91880]" : "text-gray-300"
              } space-x-3 flex items-center`}
          >
            {item?.isLiked ? (
              <FavoriteRoundedIcon
                className="cursor-pointer"
                onClick={handleLikePost}
              />
            ) : (
              <FavoriteBorderRoundedIcon
                className="cursor-pointer"
                onClick={handleLikePost}
              />
            )}
            <p>{item?.cantidadLikes}</p>
          </div>

          <div
            className={`${true ? "text-[#1DA1F2]" : "text-gray-600"
              } space-x-3 flex items-center`}
          >
            <BarChartRoundedIcon
              className="cursor-pointer"
              onClick={handleOpenReplyModal}
            />
            <p></p>
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
        <ModalResponder item={item} open={openReplyModal} handleClose={handleCloseReplyModal}/>
      </section>
    </React.Fragment>
  );
};

export default Post;