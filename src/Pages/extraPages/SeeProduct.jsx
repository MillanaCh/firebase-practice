import React, {useContext} from 'react'
import { FirestoreContext } from '../../context/GeneralFirestore'
import {Grid, Button} from "@mui/material"
function SeeProducts() {
    const {allProducts} = useContext(FirestoreContext)
  return (
    <>
    <Grid container spacing={2}>
    {
        allProducts.map(({data, id}) => (
            <>
            <Grid item sx={2}>{data.name}</Grid>
            <Grid item sx={2}>{data.proce}</Grid>
            <Grid item sx={2}><img src={data.img} width="100px"/></Grid>
            <Grid item sx={2}><Button>Modify</Button></Grid>
            <Grid item sx={2}><Button>Delete</Button></Grid>
            </>
        ))
    }
    </Grid>
    </>
  )
}
export default SeeProducts