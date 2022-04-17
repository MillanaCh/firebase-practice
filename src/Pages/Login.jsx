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
      </>) : (<Navigate to="/dashboard"/>)
    }
    </>
  )
}
export default Login
