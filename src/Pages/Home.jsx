import React from "react";
import Footer from "../components/commons/Footer";
import Header from "../components/commons/Header";
import AllProducts from "../components/Products/AllProducts";

export default function Home() {
  return (
    <>
      <Header />
      <div className='heroBackground'></div>
      <AllProducts />
      <Footer/>
    </>
  );
}
