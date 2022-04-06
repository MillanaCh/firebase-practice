import { createContext } from "react";
import * as firebaseApp from "../firebase/configFirebase"
import {collection, addDoc} from "firebase/firestore"
//need reference
const refCollection = collection(firebaseApp.firestore, "products")
export const FirestoreContext = createContext()
const FirestoreProvider = ({children}) => {
    const addProducts = async(newProduct) => {
        try{
            await addDoc(refCollection, newProduct)
        } catch(err){
            console.log(err.message)
        }
    }
    const data = {
        addProducts:addProducts
    }
    return(
        <FirestoreContext.Provider value={data}>
            {children}
        </FirestoreContext.Provider>
    )
}
export default FirestoreProvider