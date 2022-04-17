import { createContext , useState} from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth"
import * as firebaseApp from "../firebase/configFirebase"

export const GeneralAuthContext = createContext()

const GeneralAuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    onAuthStateChanged(firebaseApp.auth,(createdUser) => {
        setUser(createdUser)
    })
    const sighUpWithEmailAndPassword = async(email,password) => {
        try{
            const newUser = await createUserWithEmailAndPassword(firebaseApp.auth, email, password)
        } catch(err){
            console.log(err.message)
        }
    }

    const logOut = async() => {
        try {
            await signOut(firebaseApp.auth)
        } catch(err){
            console.log(err.message)
        }
    }
    const logInWithEmail = async(email, password) => {
        try{
            const newLogIn = await signInWithEmailAndPassword(firebaseApp.auth, email, password)
        }catch(err){
            console.log(err.message)
        }
    }
    const data={
        sighUpWithEmailAndPassword: sighUpWithEmailAndPassword,
        user:user,
        logOut:logOut, 
        logInWithEmail:logInWithEmail
    }
    return (
        <GeneralAuthContext.Provider value={data}>
            {children}
        </GeneralAuthContext.Provider>
    )
}
export default GeneralAuthProvider