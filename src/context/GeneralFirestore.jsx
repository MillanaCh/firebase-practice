import { createContext, useState, useEffect } from "react";
import * as firebaseApp from "../firebase/configFirebase";
import { collection, addDoc, getDocs, onSnapshot, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
export const FirestoreContext = createContext();

const refCollection = collection(firebaseApp.firestore, "products");
const refCollectionOrders = collection(firebaseApp.firestore, "orders");

const FirestoreProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [allOrders, setAllOrders] = useState([])

  //this function create my product
  const addProduct = async (newProduct, image) => {
    const refHosting = ref(firebaseApp.storage, `images/${image.name}`);
    const uploadImage = uploadBytesResumable(refHosting, image);
    uploadImage.on(
      "state_change",(snapshot) => {
        const progress =(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`you have upload ${progress} %`);
      },(err) => {console.log(err.message)},() => getDownloadURL(uploadImage.snapshot.ref).then((url) => addDoc(refCollection, {...newProduct, img: url }))
    );
  };

  //save or create a new order
  const saveOrder = async(ourCard, userData) => {
    addDoc(refCollectionOrders, {...ourCard, ...userData})
  }


  // this function get data from firestore and save in my State
  const getAllProducts = async () => {
    const productsFromFirestore = await getDocs(refCollection);
    setAllProducts(productsFromFirestore.docs.map((product) => ({
        data: product.data(),
        id: product.id,
      }))
    );
  };

  //this function will get all the orders that i have been created
  const getAllOrders = async() => {
    const ordersFromFirestore = await getDocs(refCollectionOrders)
    setAllOrders(ordersFromFirestore.docs.map(el => ({data:el.data, id:el.id})))
  }//we will call in component because we need only when we open the page

  useEffect(() => {
    getAllProducts()
  }, [])

  
  //this is observer wchich check if there is new data located in database
  //observer method if smth change in my database, useEffect for firbase
  const unsub = onSnapshot(doc(refCollection, "products"), (doc) => {
    getAllProducts()
  });


  //TODOS modify products
  const modifyProduct = async(newData) => {
    if(newData.newImage){
      let imageToDeleteModify = [...newData.img]
      const first = imageToDeleteModify.indexOf("%")
      const last = imageToDeleteModify.indexOf("?")
      imageToDeleteModify = imageToDeleteModify.slice(first+3, last).join("")
      deleteImage(imageToDeleteModify)
      const refToDocument = doc(firebaseApp.firestore, "products",newData.id )

      const refToModifyImage = ref(firebaseApp.storage, `images/${newData.newImage.name}`);
      const uploadModifyImage = uploadBytesResumable(refToModifyImage, newData.newImage);
      uploadModifyImage.on(
        "state_change",(snapshot) => {
          const progressModify =(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`you have upload ${progressModify} %`);
        },(err) => {console.log(err.message)},() => getDownloadURL(uploadModifyImage.snapshot.ref).then((url) => {
          delete newData.newImage
          updateDoc(refToDocument ,{...newData, img: url })}))
    } else {
       const dataClean = {...newData}
       delete dataClean.id
       updateDoc(doc(firebaseApp.firestore, "products",newData.id ),{...dataClean})
    }
  }

  //DELETE products will check what product we want to delete
  const deleteProduct = async (id, imageToDelete) => {
    //delete from firestore
    await deleteDoc(doc(firebaseApp.firestore,"products", id))
    deleteImage(imageToDelete)
  }

  //DELETE image from storage
  const deleteImage = (imageName) => {
    const refToImage = ref(firebaseApp.storage, `images/${imageName}`)
    deleteObject(refToImage).then(() => {console.log("the image was deleted")}).catch((err) => console.log(err.message))
  }
  const data = {
    allProducts: allProducts,
    addProduct: addProduct,
    deleteProduct: deleteProduct,
    modifyProduct: modifyProduct,
    saveOrder:saveOrder,
    getAllOrders:getAllOrders,
    allOrders:allOrders
  };
  return (
    <FirestoreContext.Provider value={data}>
      {children}
    </FirestoreContext.Provider>
  );
};
export default FirestoreProvider;
