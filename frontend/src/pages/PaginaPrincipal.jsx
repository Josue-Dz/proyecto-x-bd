import { Grid } from "@mui/material";
import React from "react";
import { Routes, Route } from "react-router-dom";

import MenuTwitter from "./MenuTwitter";
import Feed from "./Feed";
import Tendencias from "./Tendencias";
import Perfil from "../components/perfil/Perfil";
import DetallesPost from "../components/detallespost/DetallesPost";
import Explorar from "../components/explorar/explorar";
import Notificaciones from "../components/notificaciones/Notificaciones";
import Mensajes from "../components/mensajes/Mensajes";

const PaginaPrincipal = () => {
  return (
    <Grid container className="justify-between w-full">
      <Grid item xs={2} md={2} className="hidden md:block w-full relative">
        <MenuTwitter />
      </Grid>
      <Grid item xs={10} md={6.5} className="px-4 w-full relative">
      <Routes>
          <Route path="/" element={<Feed />}></Route>
          <Route path="/inicio" element={<Feed />}></Route>
          <Route path="/perfil/:id" element={<Perfil />}></Route>
          <Route path="/post/:id" element={<DetallesPost/>}></Route>
          <Route path="/post/:id" element={<DetallesPost />}></Route>
          <Route path="/explorar" element={<Explorar />}></Route>
          <Route path="/notificaciones" element={<Notificaciones />}></Route>
          <Route path="/mensajes" element={<Mensajes />}></Route>
        </Routes>
      </Grid>
      <Grid item xs={2} md={3} className="hidden md:block w-full relative">
        <Tendencias />
      </Grid>
    </Grid>
  );
};

export default PaginaPrincipal;
