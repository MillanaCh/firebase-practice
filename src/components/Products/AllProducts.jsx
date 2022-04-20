import { useContext } from "react";
import { FirestoreContext } from "../../context/GeneralFirestore";
import Product from "./Product";
import {Grid} from "@mui/material"
function AllProducts() {
  const { allProducts } = useContext(FirestoreContext);
  return (
    <>
        <h1>Store. The best way to buy the products you love.</h1>
      <Grid container>
      {allProducts.map((el) => (
        <Grid item xs={4} md={3} key={el.id} sx={{marginLeft:"30px"}}>
          <Product id={el.id} data={el.data}/>
        </Grid>))}
      </Grid>
    </>
  );
}
export default AllProducts;
