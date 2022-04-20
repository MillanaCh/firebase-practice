import React from "react";
import Footer from "../components/commons/Footer";
import Header from "../components/commons/Header";
import AllProducts from "../components/Products/AllProducts";
import {Grid} from "@mui/material"

export default function Home() {
  return (
    <>
      <Header />
      <div className='heroBackground'></div>
      <Grid item xs={12}><AllProducts/></Grid>
      <Footer/>
    </>
  );
}
