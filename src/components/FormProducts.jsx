import { useState, useContext } from "react";
import {FirestoreContext} from "../context/GeneralFirestore"
function FormProducts() {
    const {addProducts} = useContext(FirestoreContext)
  const [newProduct, setNewProduct] = useState({
    image: "",
    name: "",
    price: "",
  });
  return (
    <>
      <input
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        placeholder="product name"
      />
      <input
        onChange={(e) =>
          setNewProduct({ ...newProduct, price: e.target.value })
        }
        placeholder="price"
      />
      <input
        onChange={(e) => setNewProduct({ ...newProduct, img: e.target.value })}
        placeholder="add the img link"
      />
      <button onClick={() => addProducts(newProduct)}>
        Add Product
      </button>
    </>
  );
}
export default FormProducts;
