import { Grid } from "@mui/material";
import React from "react";
import MenuTwitter from "./MenuTwitter";
import Feed from "./Feed";
import Tendencias from "./Tendencias";

const PaginaPrincipal = () => {
  return (
    <Grid container className="px-5 justify-between">
      <Grid item xs={0} md={2.5} className="hidden md:block w-full relative">
        <MenuTwitter />
      </Grid>
      <Grid item xs={12} md={7} className=" md:px-9 w-full relative">
        <Feed />
      </Grid>
      <Grid item xs={0} md={2.5} className="hidden md:block w-full relative">
        <Tendencias />
      </Grid>
    </Grid>
  );
};

export default PaginaPrincipal;

