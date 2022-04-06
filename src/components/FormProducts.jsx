import { useState, useContext } from "react";
import { FirestoreContext } from "../context/GeneralFirestore";
function FormProducts() {
  const { addProduct } = useContext(FirestoreContext);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
  });
  const [newImage, setNewImage] = useState("");
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
        type="file"
        onChange={(e) => setNewImage(e.target.files[0])}
        placeholder="add the img link"
      />
      <button onClick={() => addProduct(newProduct, newImage)}>Add Product</button>
    </>
  );
}
export default FormProducts;
