import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Button, Menu, MenuItem} from "@mui/material";
import { useTheme } from '../context/ThemeContext';


import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import DataUsageRoundedIcon from "@mui/icons-material/DataUsageRounded";
import PeopleOutlineRoundedIcon from "@mui/icons-material/PeopleOutlineRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import FlashOnRoundedIcon from "@mui/icons-material/FlashOnRounded";
import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useSelector, useDispatch } from "react-redux";
import { cerrarSesion } from "../Store/Auth/Action";

const menuNav = [
  { title: "Inicio", icon: <HomeRoundedIcon />, path: "/inicio" },
  { title: "Explorar", icon: <SearchRoundedIcon />, path: "/explorar" },
  { title: "Notificaciones", icon: <NotificationsNoneRoundedIcon />, path: "/notificaciones" },
  { title: "Mensajes", icon: <MailOutlineRoundedIcon />, path: "/mensajes" },
  { title: "Grok", icon: <DataUsageRoundedIcon />, path: "/grok" },
  { title: "Comunidades", icon: <PeopleOutlineRoundedIcon />, path: "/comunidades" },
  { title: "Premium", icon: <VerifiedRoundedIcon />, path: "/premium" }, // Aquí está el icono Premium
  { title: "Organizaciones Verificadas", icon: <FlashOnRoundedIcon />, path: "/orgs" },
  { title: "Perfil", icon: <PermIdentityRoundedIcon />, path: "/perfil" },
  { title: "Mas opciones", icon: <PendingOutlinedIcon />, path: "/mas" },
];

const MenuX = ({ setOpenModal, setIsAuthenticated }) => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const {auth} = useSelector(store => store);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => { 
    handleClose();
    dispatch(cerrarSesion())
    // navigate("/signin");
  };


  return (
    <div className="h-screen sticky top-0">
      <div>
        <div className="py-2">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className=" w-1/7 pl-2 pb-4
            r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-yc9v9c r-18jsvk2 r-16y2uox r-8kz0gk"
          >
            <g alt="logo X" className={isDarkMode ? "fill-white" : "fill-dark"}>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 
                21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </g>
          </svg>

          <div className="space-y-0">
            {menuNav.map((item) => (
              <div
                key={item.path}
                className="cursor-pointer flex space-x-3 items-center hover:bg-gray-200 rounded-4xl px-2 py-2 transition"
                onClick={() => {
                  if (item.title === "Premium" || item.title === "Grok" || item.title === "Organizaciones Verificadas") {
                    setOpenModal(true); 
                  } else if (item.title === "Perfil") {
                    navigate(`/perfil/${5}`);
                  } else {
                    navigate(item.path);
                  }
                }}
              >
                {item.icon}
                <p className="text-lg font-normal text-left truncate w-[150px]">{item.title}</p>
              </div>
            ))}
          </div>

          <div className="pb-2">
            <Button 
              sx={{
                width: "100%",
                borderRadius: "29px",
                py: "10px",
                bgcolor: isDarkMode ? "#ffffff" : "#000000",
                color: isDarkMode ? "#000000" : "#ffffff",
                textTransform: "none",
                my: 2
              }}
              variant="contained"
            >
              Postear
            </Button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between hover:bg-gray-200 rounded-4xl px-2 py-4 transition w-full group">
        <div className="flex items-center space-x-3">
          <Avatar
            alt="username"
            src="https://i.pinimg.com/736x/95/78/83/9578835cc8ee0e2dc3e7a7cc265ea994.jpg"
          />
        </div>

        <div className="flex flex-col ml-2">
          <span className="font-bold text-left truncate w-[150px] text-sm">{auth.user?.nombreCompleto}</span>
          <span className="text-left text-sm opacity-70">@{auth.user?.nombreUsuario.toLowerCase()}</span>
        </div>
        <Button 
          disableRipple
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          className="hover:bg-gray-200 rounded-4xl p-2 !bg-transparent shadow-none"
          endIcon={<MoreHorizIcon />}
        >
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
          <MenuItem onClick={handleLogout}>Cerrar Sesion</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default MenuX;