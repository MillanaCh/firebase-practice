import Reac, { useContext, useState } from "react";
import { CardContext } from "../context/GeneralCard";
import Header from "../components/commons/Header";
import {FirestoreContext} from "../context/GeneralFirestore"
import {
  Grid,
  List,
  ListItem,
  Typography,
  FormControl,
  Input,
  Button,
} from "@mui/material";

export default function MakeAnOrder() {
  const { allProductsInCard } = useContext(CardContext);
  const {saveOrder} = useContext(FirestoreContext)
  const [customerData, setCustomerData] = useState({})

  const handlerMakeAnOrder = () => {
    saveOrder(allProductsInCard, customerData)
  }
  return (
    <>
      <Header />
      <Grid container spacing={2} sx={{margin:"10px"}}>
        <Grid item xs={12} md={6}>
          <h1>List of items </h1>
            {allProductsInCard.map((el) => (
              <ListItem key={el.id}>
                {el.name}
                {el.qty}
              </ListItem>
            ))}
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <FormControl fullWidth>
              <Input placeholder="write your name" onChange={(e) => setCustomerData({...customerData, name:e.target.value})}/>
            </FormControl>
            <FormControl fullWidth>
              <Input placeholder="write your phone number" onChange={(e) => setCustomerData({...customerData, number:e.target.value})}/>
            </FormControl>
            <FormControl fullWidth>
              <Input placeholder="write your address" onChange={(e) => setCustomerData({...customerData, address:e.target.value})}/>
            </FormControl>
            <FormControl fullWidth>
              <Input placeholder="write your email" onChange={(e) => setCustomerData({...customerData, email:e.target.value})}/>
            </FormControl>
            <FormControl fullWidth>
              <Input placeholder="Credit Card" type="number" onChange={(e) => setCustomerData({...customerData, creditCard: e.target.value})}/>
            </FormControl>
            <Button variant="contained" onClick={() => handlerMakeAnOrder()}>Make an order</Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
