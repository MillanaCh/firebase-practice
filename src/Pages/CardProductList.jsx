import React, { useContext } from "react";
import Header from "../components/commons/Header";
import { CardContext } from "../context/GeneralCard";
import { Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import * as actions from "../context/actions";

export default function CardProductList() {
  const { allProductsInCard , dispacher} = useContext(CardContext);
  return (
    <>
      <Header />
      <h1>Card Basket</h1>
      <Grid container spacing={2}>
           <Grid item md={2}><h3>Products Name</h3></Grid>
           <Grid item md={2}><h3>Quantity</h3></Grid>
           <Grid item md={2}><h3>Price</h3></Grid>
           <Grid item md={3}><h3>Image</h3></Grid>
           <Grid item md={3}><h3>Delete</h3></Grid>
      {
      allProductsInCard.map((el) => (
            <>
           <Grid item md={2}>{el.name}</Grid>
           <Grid item md={2}>{el.qty}</Grid>
           <Grid item md={2}>{el.price}</Grid>
           <Grid item md={3}><img src={el.img} width="100px"/></Grid>
           <Grid item md={3}><Button onClick={() => dispacher({type: actions.DELETEFROMCARD, payload: el.id})}>X</Button></Grid>
           </>)
      )}
           <Grid item md={2}><h3>Number of products</h3></Grid>
           <Grid item md={2}><h3>--------</h3></Grid>
           <Grid item md={2}><h3>Total Cost</h3></Grid>
           <Grid item md={3}><h3>---------</h3></Grid>
           <Grid item md={3}><Link to="/make-order"><Button>Make an order</Button></Link></Grid>
      </Grid>
    </>
  );
}
