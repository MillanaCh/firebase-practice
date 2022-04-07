import { useContext } from "react";
import { FirestoreContext } from "../../context/GeneralFirestore";
import Product from "./Product";
import {Grid} from "@mui/material"
function AllProducts() {
  const { allProducts } = useContext(FirestoreContext);
  return (
    <>
      <h1>All Products</h1>
      {allProducts.map((el) => (
        <Grid item sx={6} md={4} key={el.id}><Product id={el.id} data={el.data}/></Grid>
      ))}
    </>
  );
}
export default AllProducts;
