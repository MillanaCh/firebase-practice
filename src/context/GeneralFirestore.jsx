import { createContext } from "react";
import * as firebaseApp from "../firebase/configFirebase"
import {collection, addDoc} from "firebase/firestore"
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage"
//need reference
const refCollection = collection(firebaseApp.firestore, "products")
export const FirestoreContext = createContext()
const FirestoreProvider = ({children}) => {
    const addProduct = async(newProduct, image) => {
        //image is represantion of photo
        const refHosting = ref(firebaseApp.storage,`images/${image.name}`)
        const uploadImage = uploadBytesResumable(refHosting, image)
        uploadImage.on(
            "state_change",(snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes)* 100
                console.log(`you have upload ${progress} %`)
            }, (err) => {console.log(err.message)}, () => getDownloadURL(uploadImage.snapshot.ref).then((url) => addDoc(refCollection, {...newProduct, img: url}))
        )
        try{
            await addDoc(refCollection, newProduct)
            //add new Product which saves in firestore
        } catch(err){
            console.log(err.message)
        }
    }
    const data = {
        addProduct:addProduct
    }
    return(
        <FirestoreContext.Provider value={data}>
            {children}
        </FirestoreContext.Provider>
    )
}
export default FirestoreProvider