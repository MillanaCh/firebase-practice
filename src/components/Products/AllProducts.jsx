import { useContext } from "react";
import { FirestoreContext } from "../../context/GeneralFirestore";
import Product from "./Product";
import {Grid} from "@mui/material"
function AllProducts() {
  const { allProducts } = useContext(FirestoreContext);
  return (
    <>
      <Grid container>
      {allProducts.map((el) => (
        <Grid item xs={3} md={2} key={el.id} sx={{margin:"30px", height:"100vh"}}>
          <Product id={el.id} data={el.data}/>
        </Grid>))}
      </Grid>
    </>
  );
}
export default AllProducts;
