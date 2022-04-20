import React, {useContext, useState} from 'react'
import { FirestoreContext } from '../../context/GeneralFirestore'
import {Grid, Button, Dialog, DialogContent, DialogTitle, FormControl, Input} from "@mui/material"
function SeeProducts() {
    const {allProducts, deleteProduct, modifyProduct} = useContext(FirestoreContext)
    const [dialogOpen, setDialogOpen] = useState(false)
    const [dataToChange, setDataToChange] = useState({})

    const handlerDelete = (id, imageToDelete) => {
      imageToDelete = [...imageToDelete]
      const start = imageToDelete.indexOf("%")
      const end = imageToDelete.indexOf("?")
      imageToDelete = imageToDelete.slice(start+3, end).join("")
      deleteProduct(id, imageToDelete)
    }

    const handlerClose = () => {
      setDialogOpen(!dialogOpen)
    }

    const handlerEdit = (data, id) => {
      setDataToChange(data)
      setDialogOpen(true)
    }

    const updateProduct = () => {
      //i need to send data which i am update to firestore and save it
      modifyProduct(dataToChange)
    }
  return (
    <>
    <Grid container spacing={2}>
    {
        allProducts.map(({data, id}) => (
            <>
            <Grid item xs={2}>{data.name}</Grid>
            <Grid item xs={3}><img src={data.img} width="100px"/></Grid>
            <Grid item xs={2}>{data.price}</Grid>
            <Grid item xs={3}><Button onClick={() => handlerEdit({...data, id:id})}>Modify</Button></Grid>
            <Grid item xs={2}><Button onClick={() => handlerDelete(id, data.img)}>Delete</Button></Grid>
            </>
        ))
    }
    </Grid>
    <Dialog open={dialogOpen} onClose={handlerClose}>
      <DialogTitle>Edit this product</DialogTitle>
      <DialogContent>
        <FormControl fullWidth><Input value={dataToChange.name} onChange={(e) => setDataToChange({...dataToChange, name: e.target.value})}/></FormControl>
        <FormControl fullWidth><Input value={dataToChange.price} onChange={(e) => setDataToChange({...dataToChange, price: e.target.value})}/></FormControl>
        <FormControl fullWidth><Input type='file' onChange={(e) => setDataToChange({...dataToChange,newImage: e.target.files[0]})}/></FormControl>
        <FormControl fullWidth>
          <Button onClick={updateProduct}>Save Changes</Button>
          <Button variant="contained" onClick={handlerClose}>Cancel</Button>
        </FormControl>
      </DialogContent>
    </Dialog>
    </>
  )
}
export default SeeProducts