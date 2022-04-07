import "./App.css";
import { useState, useContext } from "react";
import { GeneralAuthContext } from "./context/GeneralAuthContext";
import FormProducts from "./components/FormProducts";
import AllProducts from "./components/Products/AllProducts";
function App() {
  //3 main part log In logOut and register a user
  const [newUser, setNewUser] = useState({ email: "", password: "" });
  const [loginUser, setLoginUser] = useState({ email: "", password: "" });
  const { sighUpWithEmailAndPassword, user, logOut, logInWithEmail } =
    useContext(GeneralAuthContext);
  //first make copy and then modify what we want
  return (
    <div className="App">
      <header className="app-header">
        {/* <div>
         <h1>Register</h1>
         <input className="input" onChange={(e) => setNewUser({...newUser,email:e.target.value})} placeholder="type your email"/>
         <input className="input" onChange={(e) => setNewUser({...newUser,password:e.target.value})} placeholder="type your password"/>
         <button  className="btn-log" onClick={() => sighUpWithEmailAndPassword(newUser.email, newUser.password)}>Register</button>
       </div>
       <div>
         <button className="btn" onClick={() => logOut()}>Log Out {user?.email}</button>
       </div>
       <div>
         <h1>Log in</h1>
        <input className="input" onChange={(e) => setLoginUser({...loginUser,email:e.target.value})} placeholder="type your email"/>
        <input className="input" onChange={(e) => setLoginUser({...loginUser,password:e.target.value})} placeholder="type your password"/>
        <button  className="btn-log" onClick={() => logInWithEmail(loginUser.email, loginUser.password)}>Log In</button>
       </div> */}
        <AllProducts />
        <FormProducts />
      </header>
    </div>
  );
}

export default App;
