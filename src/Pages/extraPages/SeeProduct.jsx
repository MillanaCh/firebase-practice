import React, {useContext, useState} from 'react'
import { FirestoreContext } from '../../context/GeneralFirestore'
import {Grid, Button, Dialog, DialogContent, DialogTitle, FormControl, Input} from "@mui/material"
function SeeProducts() {
    const {allProducts, deleteProduct} = useContext(FirestoreContext)
    const [dialogOpen, setDialogOpen] = useState(false)
    const handlerDelete = (id, imageToDelete) => {
      //deleteProduct(id)
      imageToDelete = [...imageToDelete]
      const start = imageToDelete.indexOf("%")
      const end = imageToDelete.indexOf("?")
      console.log(imageToDelete.slice(start+3, end).join(""))
    }
    const handlerClose = () => {
      setDialogOpen(!dialogOpen)
    }
  return (
    <>
    <Grid container spacing={2}>
    {
        allProducts.map(({data, id}) => (
            <>
            <Grid item sx={2}>{data.name}</Grid>
            <Grid item sx={2}>{data.proce}</Grid>
            <Grid item sx={2}><img src={data.img} width="100px"/></Grid>
            <Grid item sx={2}><Button onClick={() => setDialogOpen(true)}>Modify</Button></Grid>
            <Grid item sx={2}><Button onClick={() => handlerDelete(id, data.img)}>Delete</Button></Grid>
            </>
        ))
    }
    </Grid>
    <Dialog open={dialogOpen} onClose={handlerClose}>
      <DialogTitle>Edit this product</DialogTitle>
      <DialogContent>
        some content
      </DialogContent>
    </Dialog>
    </>
  )
}
export default SeeProducts