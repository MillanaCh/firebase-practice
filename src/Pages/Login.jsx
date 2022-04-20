import React from 'react'
import {useContext, useState} from "react"
import { GeneralAuthContext } from '../context/GeneralAuthContext'
import {Grid, FormControl, Input, Button} from "@mui/material"
import Header from '../components/commons/Header'
import {Navigate} from "react-router-dom"
import { IoEyeSharp } from 'react-icons/io5';

function Login() {
    const [seePassword, setSeePassword] = useState(false)
    const [loginInfo, setLoginInfo] = useState({})
    const {logInWithEmail, user} = useContext(GeneralAuthContext)

    //const [newUser, setNewUser] = useState({ email: "", password: "" });
    const  handlerLogin = () => {
        logInWithEmail(loginInfo.email, loginInfo.password)
    }
   //main part log In logOut and register a user
   //first make copy and then modify what we want
  return (
      <>
      {!user ? (
         <>
      <Header/>
      <h2 style={{textAlign:"center"}}>Login</h2>
      <Grid container spacing={2} sx={{textAlign:"center"}}>
          <Grid item xs={12}>
              <FormControl>
                  <Input sx={{width:"400px"}} placeholder='Write your email' onChange={(e) => setLoginInfo({...loginInfo, email: e.target.value})}></Input>
              </FormControl>
          </Grid>
          <Grid item xs={12}>
              <FormControl sx={{display:"block"}}>
                  <Input sx={{width:"340px"}}  type={seePassword ? "text" : "password"} placeholder='Write your password' onChange={(e) => setLoginInfo({...loginInfo, password: e.target.value})}></Input><Button onClick={() => setSeePassword(!seePassword)}><IoEyeSharp/></Button>
              </FormControl>
          </Grid>
          <Grid item xs={12}>
              <FormControl>
                 <button className="btn-login" onClick={() => handlerLogin()}>Login</button>
              </FormControl>
          </Grid>
      </Grid>
      </>) : (<Navigate to="/dashboard"/>)
    }
    </>
  )
}
export default Login
