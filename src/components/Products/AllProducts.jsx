import { useContext } from "react";
import { FirestoreContext } from "../../context/GeneralFirestore";
import Product from "./Products";
function AllProducts() {
  const { allProducts } = useContext(FirestoreContext);
  return (
    <>
      <h1>All Products</h1>
      {allProducts.map((el) => (
           <Product id={el.id} data={el.data}/>
      ))}
    </>
  );
}
export default AllProducts;
