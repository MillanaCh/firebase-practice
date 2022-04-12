import React from 'react'
import {useContext, useState} from "react"
import { GeneralAuthContext } from '../context/GeneralAuthContext'
import {Grid, FormControl, Input, Button} from "@mui/material"
import Header from '../components/commons/Header'
import {Navigate} from "react-router-dom"

function Login() {
    const [seePassword, setSeePassword] = useState(false)
    const {logInWithEmail, user} = useContext(GeneralAuthContext)
    // console.log(user)
    const [loginInfo, setLoginInfo] = useState([])
    //const [newUser, setNewUser] = useState({ email: "", password: "" });
    const  handlerLogin = () => {
        logInWithEmail(loginInfo.email, loginInfo.password)
    }
      //main part log In logOut and register a user
  // const [newUser, setNewUser] = useState({ email: "", password: "" });
  // const [loginUser, setLoginUser] = useState({ email: "", password: "" });
  // const { sighUpWithEmailAndPassword, user, logOut, logInWithEmail } = useContext(GeneralAuthContext);
  //first make copy and then modify what we want
  return (
      <>
      {!user ? (
         <>
      <Header/>
      <Grid container spacing={2}>
          <Grid item sx={12}>
              <FormControl>
                  <Input placeholder='Write your email' onChange={(e) => setLoginInfo({...loginInfo, email: e.target.value})}></Input>
              </FormControl>
          </Grid>
          <Grid item sx={12}>
              <FormControl>
                  <Input type={seePassword ? "text" : "password"} placeholder='Write your password' onChange={(e) => setLoginInfo({...loginInfo, password: e.target.value})}></Input><Button onClick={() => setSeePassword(!seePassword)}>See</Button>
              </FormControl>
          </Grid>
          <Grid item sx={12}>
              <FormControl>
                 <Button onClick={() => handlerLogin()}>LogIn</Button>
              </FormControl>
          </Grid>
      </Grid>
      {/* Register */}
      {/* <Grid container spacing={2}>
          <Grid item sx={12}>
              <FormControl>
                  <Input placeholder='Write your email' onChange={(e) => setNewUser({...newUser, email: e.target.value})}></Input>
              </FormControl>
              <FormControl>
                  <Input placeholder='Write your email' onChange={(e) => setNewUser({...newUser, email: e.target.value})}></Input>
              </FormControl>
              <FormControl>
                  <Button  className="btn-log" onClick={() => sighUpWithEmailAndPassword(newUser.email, newUser.password)}>Register</Button>
              </FormControl>
          </Grid>
      </Grid> */}


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
      {/* <FormProducts /> */}
      </>) : (<Navigate to="/dashboard"/>)
    }
    </>
  )
}
export default Login
