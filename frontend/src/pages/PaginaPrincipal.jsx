import { Grid } from "@mui/material";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';

import MenuX from "./MenuX";
import Feed from "./Feed";
import Tendencias from "./Tendencias";
import Perfil from "../components/perfil/Perfil";
import DetallesPost from "../components/detallespost/DetallesPost";
import Explorar from "../components/explorar/explorar";
import Notificaciones from "../components/notificaciones/Notificaciones";
import Mensajes from "../components/mensajes/Mensajes";
import { TarjetaSeguimientoX } from "../components/seguimiento/TarjetaSeguimientoX";
import VerChat from "../components/mensajes/VerChat";
import ModalSuscripcion from "../components/modalsuscripcion/ModalSuscripcion";
import Comunidades from "../components/comunidades/Comunidades";

const users = [
  {
      name: 'Miguel Ángel Durán',
      userName: 'midudev',
      isFollowing: true
  },
  {
      name: 'Starlink',
      userName: 'Starlink',
      isFollowing: false
  },
  {
      name: 'Tesla AI',
      userName: 'Tesla_AI',
      isFollowing: true
  }
]



const PaginaPrincipal = () => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <Grid container className="justify-between w-full">
      <Grid item xs={2} md={2} className="hidden md:block w-full relative">
        <MenuX setOpenModal={setOpenModal} />
      </Grid>
      <Grid item xs={10} md={6.5} className="px-4 w-full relative">

      <ModalSuscripcion open={openModal} handleClose={() => setOpenModal(false)} />

      <Routes>
          <Route path="/" element={<Feed />}></Route>
          <Route path="/inicio" element={<Feed />}></Route>
          <Route path="/perfil/:id" element={<Perfil />}></Route>
          <Route path="/post/:id" element={<DetallesPost/>}></Route>
          <Route path="/post/:id" element={<DetallesPost />}></Route>
          <Route path="/explorar" element={<Explorar />}></Route>
          <Route path="/notificaciones" element={<Notificaciones />}></Route>
          <Route path="/mensajes" element={<Mensajes />}></Route>
          <Route path="/comunidades" element={<Comunidades />}></Route>
          <Route path="/premium" element={<Feed />}></Route>
          <Route path="/mas" element={<Feed />}></Route>
        </Routes>
      </Grid>
      <Grid item xs={2} md={3} className="hidden md:block w-full relative">
      <Routes>
        <Route path="/" element={<Tendencias />}></Route>
        <Route path="/inicio" element={<Tendencias />}></Route>
        <Route path="/explorar" element={<Tendencias />}></Route>
        <Route path="/notificaciones" element={<Tendencias />}></Route>
        <Route path="/mensajes" element={<VerChat />}></Route>
        <Route path="/comunidades" element={<Tendencias />}></Route>
        <Route path="/premium" element={<Tendencias />}></Route>
        <Route path="/perfil/:id" element={<Tendencias />}></Route>
        <Route path="/mas" element={<Tendencias />}></Route>
      </Routes> 

      </Grid>
    </Grid>
  );
};

export default PaginaPrincipal;
