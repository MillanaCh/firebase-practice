import { createContext, useState, useEffect } from "react";
import * as firebaseApp from "../firebase/configFirebase";
import { collection, addDoc, getDocs, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
//need reference
const refCollection = collection(firebaseApp.firestore, "products");
export const FirestoreContext = createContext();
const FirestoreProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  //this function create my product
  const addProduct = async (newProduct, image) => {
    //image is represantion of photo
    const refHosting = ref(firebaseApp.storage, `images/${image.name}`);
    const uploadImage = uploadBytesResumable(refHosting, image);
    uploadImage.on(
      "state_change",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`you have upload ${progress} %`);
      },
      (err) => {
        console.log(err.message);
      },
      () =>
        getDownloadURL(uploadImage.snapshot.ref).then((url) =>
          addDoc(refCollection, { ...newProduct, img: url })
        )
    );
    try {
      await addDoc(refCollection, newProduct);
      //add new Product which saves in firestore
    } catch (err) {
      console.log(err.message);
    }
  };
  // this function get data from firestore and save in my State
  const getAllProducts = async () => {
      //we have object productsFromFirestore which have other files inside
    const productsFromFirestore = await getDocs(refCollection);
    //filter all information inside productsFromFirestore we have docs
    setAllProducts(productsFromFirestore.docs.map((product) => ({
        data: product.data(),
        id: product.id,
      }))
    );
  };
  useEffect(() => {
    getAllProducts()
  }, [])
  //this is observer wchich check if there is new data located in database
  //observer method if smth change in my database, useEffect for firbase
  const referenceToForebase = doc(firebaseApp.firestore, "products", "name")
  onSnapshot(referenceToForebase, (doc) => {
    getAllProducts()
  })
  //TODOS modify products
  //DELETE products
  const deleteProduct = async (id) => {//wait till response is coming
    // console.log(`I will delete the products with ${id}`)
    await deleteDoc(doc(firebaseApp.firestore,"products", id))//with collection product and id

  }
  const data = {
    allProducts: allProducts,
    addProduct: addProduct,
    deleteProduct: deleteProduct
  };
  return (
    <FirestoreContext.Provider value={data}>
      {children}
    </FirestoreContext.Provider>
  );
};
export default FirestoreProvider;
