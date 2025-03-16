import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button, Menu, MenuItem } from "@mui/material";

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import DataUsageRoundedIcon from '@mui/icons-material/DataUsageRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded';
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import FlashOnRoundedIcon from '@mui/icons-material/FlashOnRounded';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import PendingRoundedIcon from '@mui/icons-material/PendingRounded';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const menuNav = [
    {
        title: "Inicio",
        icon: <HomeRoundedIcon />,
        path: "/inicio"
    },
    {
        title: "Explorar",
        icon: <SearchRoundedIcon />,
        path: "/explorar"
    },
    {
        title: "Notificaciones",
        icon: <NotificationsNoneRoundedIcon />,
        path: "/notificaciones"
    },
    {
        title: "Mensajes",
        icon: <MailOutlineRoundedIcon />,
        path: "/mensajes"
    },
    {
        title: "Grok",
        icon: <DataUsageRoundedIcon />,
        path: "/grok"
    },
    {
        title: "Guardados",
        icon: <BookmarkBorderRoundedIcon />,
        path: "/guardados"
    },
    {
        title: "Trabajos",
        icon: <WorkOutlineRoundedIcon/>,
        path: "/trabajos"
    },
    {
        title: "Comunidades",
        icon: <PeopleOutlineRoundedIcon />,
        path: "/comunidades"
    },
    {
        title: "Premium",
        icon: <VerifiedRoundedIcon />,
        path: "/premium"
    },
    {
        title: "Organizaciones Verificadas",
        icon: <FlashOnRoundedIcon />,
        path: "/orgs"
    },
    {
        title: "Perfil",
        icon: <PermIdentityRoundedIcon />,
        path: "/home"
    },
    {
        title: "Mas opciones",
        icon: <PendingRoundedIcon/>,
        path: "/mas"
    }
];

const MenuTwitter = () => {
    const navigate = useNavigate();

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
    };

    return (
        <div className='h-screen sticky top-0'>
            <div>
                <div className='py-5'>
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-yc9v9c r-18jsvk2 r-16y2uox r-8kz0gk">
                        <g>
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                        </g>
                    </svg>

                    <div className='space-y-6'>
                        {menuNav.map((item) => (
                            <div
                                key={item.path}
                                className='cursor-pointer flex space-x-3 items-center'
                                onClick={() => item.title === "Perfil" ? navigate(`/perfil/${5}`) : navigate(item.path)}
                            >
                                {item.icon}
                                <p className='text-x1'>{item.title}</p>
                            </div>
                        ))}

                    </div>

                    <div className='py-10'>
                        <Button sx={{ width: "100%", borderRadius: "29px", py: "15px", bgcolor: "#000000" }} variant='contained'>
                            Postear
                        </Button>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-3'>
                    <Avatar alt="username" src='https://i.pinimg.com/736x/95/78/83/9578835cc8ee0e2dc3e7a7cc265ea994.jpg' />
                </div>

                <div>
                    <span>Ronny, José Daniel y Aída</span>
                    <span className='opacity-70'>@proyectoBD1</span>
                </div>
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
                    <MenuItem onClick={handleLogout}>Cerrar Sesion</MenuItem>
                </Menu>
            </div>
        </div>
    );
};

export default MenuTwitter;