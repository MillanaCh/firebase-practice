import React, { useContext } from "react";
import Header from "../components/commons/Header";
import { CardContext } from "../context/GeneralCard";
import { Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import * as actions from "../context/actions";

export default function CardProductList() {
  const { allProductsInCard , dispacher} = useContext(CardContext);
  return (
    allProductsInCard.length < 1 ? (
      <>
    <Header/>
    <h3>Your bag is empty</h3>
    </>) : 
   (<>
      <Header />
      <h1 style={{textAlign:"center"}}>My Bag</h1>
      <Grid container spacing={2} sx={{margin:"15px"}}>
           <Grid item md={2}><h3>Products Name</h3></Grid>
           <Grid item md={2}><h3>Quantity</h3></Grid>
           <Grid item md={2}><h3>Price</h3></Grid>
           <Grid item md={3}><h3>Image</h3></Grid>
           <Grid item md={3}><h3>Delete</h3></Grid>
      {
      allProductsInCard.map((el) => (
            <>
           <Grid item md={2} sx={{alignSelf:"center"}}>{el.name}</Grid>
           <Grid item md={2} sx={{alignSelf:"center"}}>{el.qty}</Grid>
           <Grid item md={2} sx={{alignSelf:"center"}}>{el.price}</Grid>
           <Grid item md={3} sx={{alignSelf:"center"}}><img src={el.img} width="100px"/></Grid>
           <Grid item md={3} sx={{alignSelf:"center"}}><Button onClick={() => dispacher({type: actions.DELETEFROMCARD, payload: el.id})}>X</Button></Grid>
           </>)
      )}
           <Grid item md={2} sx={{color:"#0171e2"}}><h4>Number of products</h4></Grid>
           <Grid item md={2} sx={{color:"#0171e2"}}><h4>{allProductsInCard.length}</h4></Grid>
           <Grid item md={2} sx={{color:"#0171e2"}}><h4>Total Cost</h4></Grid>
           <Grid item md={3} sx={{color:"#0171e2"}}><h4>---------</h4></Grid>
           <Grid item md={3}><Link to="/make-order"><Button>Make an order</Button></Link></Grid>
      </Grid>
    </>)
  )
}
