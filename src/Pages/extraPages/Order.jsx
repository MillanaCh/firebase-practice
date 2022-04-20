import { Grid } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { FirestoreContext } from "../../context/GeneralFirestore";
function Order() {
  const { getAllOrders, allOrders } = useContext(FirestoreContext);
  useEffect(() => {
    getAllOrders();
  }, []);
  //need to extract information here inside docs
  return (
    <>
      <div>Order</div>
      <Grid container spacing={2}>
        <Grid item xs={3}>Order Id</Grid>
        <Grid item xs={3}>Name</Grid>
        <Grid item xs={3}>Address</Grid>
        <Grid item xs={3}>Number</Grid>
        <Grid item xs={3}>Status</Grid>
        <Grid item xs={3}>Delete</Grid>
     </Grid>
        {
          allOrders.map(({data, id}) => (
          <Grid container spacing={2}>
            <Grid item xs={3}>{id}</Grid>
            <Grid item xs={3}>{data.name}</Grid>
            <Grid item xs={3}>{data.address}</Grid>
            <Grid item xs={3}>Number</Grid>
            <Grid item xs={3}>Status</Grid>
            <Grid item xs={3}>Delete</Grid>
          </Grid>
          ))
        }
    </>
  );
}
export default Order;
