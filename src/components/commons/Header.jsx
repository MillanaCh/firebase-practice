import { Grid, Button, Box, Typography, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import {useContext} from "react"
import {CardContext} from "../../context/GeneralCard"
function Header() {
    const {allProductsInCard}  = useContext(CardContext)
    const sumOfAllProducts = allProductsInCard.reduce((accum, product) => accum + product.qty, 0)
  return (
    <Grid container spacing={2} style={{ justifyContent: "space-around" }}>
      <Grid item sx={12} md={2}>
        <Link to="/">
          <CardMedia component="img" image="https://i.etsystatic.com/18764817/r/il/35374d/2930089966/il_fullxfull.2930089966_oqvj.jpg" height="120"/>
        </Link>
      </Grid>
      <Grid item sx={12} md={10} style={{display:"flex", alignItems:"center", textAlign:"center", justifyContent: "space-between"}}>
        <Box sx={{display:"flex", alignItems:"center", textAlign:"center"}}>
            <Link to="/" style={{textDecoration:"none", color: "black"}}><Typography sx={{minWidth:150}}>Home</Typography></Link>
            <Link to="/dashboard" style={{textDecoration:"none", color: "black"}}><Typography sx={{minWidth:150}}>Dashboard</Typography></Link>
            <Link to="/about" style={{textDecoration:"none", color: "black"}}><Typography sx={{minWidth:150}}>About Us</Typography></Link>
            <Link to="/cart-description" style={{textDecoration:"none", color: "black"}}><Button color="secondary" variant="contained">CART {sumOfAllProducts} PRODUCTS</Button></Link>
        </Box>
      </Grid>
    </Grid>
  );
}
export default Header;
