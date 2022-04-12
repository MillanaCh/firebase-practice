import React, { useContext } from 'react'
import Header from '../components/commons/Header'
import {Grid, List, ListItemButton, Divider} from "@mui/material"
import { GeneralAuthContext } from '../context/GeneralAuthContext'
import FormProducts from '../components/FormProducts'
import { Navigate, Outlet , Link} from 'react-router-dom'
export default function Dashboard() {
    const {user} = useContext(GeneralAuthContext)
  return (
      <>
      {
          user ? (
            <>
            <Header/>
            <Grid container spacing={2}>
                <Grid item sx={2} md={4}>
                    <List>
                        <ListItemButton>
                            <Link to="orders">Orders</Link>
                            <Divider/>
                        </ListItemButton>
                        <ListItemButton>
                            <Link to="add-product">Add Product</Link>
                            <Divider/>
                        </ListItemButton>
                        <ListItemButton>
                            <Link to="see-product">All Product</Link>
                            <Divider/>
                        </ListItemButton>
                    </List>
                </Grid>
                <Grid item sx={2} md={6}><Outlet/></Grid>
            </Grid>
            </>
          ) : <Navigate to="/login"/>
      }
      </>
  )
}
