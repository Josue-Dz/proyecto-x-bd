import { Grid } from "@mui/material";
import React from "react";
import MenuTwitter from "./MenuTwitter";
import Feed from "./Feed";
import Tendencias from "./Tendencias";
import { Routes, Route } from "react-router-dom";
import Perfil from "../components/perfil/Perfil";
import DetallesPost from "../components/detallespost/DetallesPost";

const PaginaPrincipal = () => {
  return (
    <Grid container className="px-5 justify-between">
      <Grid item xs={0} md={2.5} className="hidden md:block w-full relative">
        <MenuTwitter />
      </Grid>
      <Grid item xs={12} md={7} className=" md:px-9 w-full relative">
      <Routes>
          <Route path="/" element={<Feed />}></Route>
          <Route path="/inicio" element={<Feed />}></Route>
          <Route path="/perfil/:id" element={<Perfil />}></Route>
          <Route path="/post/:id" element={<DetallesPost/>}></Route>
        </Routes>
      </Grid>
      <Grid item xs={0} md={2.5} className="hidden md:block w-full relative">
        <Tendencias/>
      </Grid>
    </Grid>
  );
};

export default PaginaPrincipal;
