import React, { useContext } from 'react'
import Header from '../components/commons/Header'
import {Grid, List, ListItemButton, Divider} from "@mui/material"
import { GeneralAuthContext } from '../context/GeneralAuthContext'
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
                <Grid item xs={4} md={3}>
                    <List>
                        <ListItemButton>
                            <Link to="see-product" className='link-dashboard'>All Products</Link>
                            <Divider/>
                        </ListItemButton>
                        <ListItemButton>
                            <Link to="add-product" className='link-dashboard'>Add Product</Link>
                            <Divider/>
                        </ListItemButton>
                        <ListItemButton>
                            <Link to="orders" className='link-dashboard'>Orders</Link>
                            <Divider/>
                        </ListItemButton>
                    </List>
                </Grid>
                <Grid item xs={2} md={6}><Outlet/></Grid>
            </Grid>
            </>
          ) : <Navigate to="/login"/>
      }
      </>
  )
}
