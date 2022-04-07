import React from "react";
import Header from "../components/commons/Header";
import AllProducts from "../components/Products/AllProducts";
import Hero from "../components/commons/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero/>
      <AllProducts />
    </>
  );
}
