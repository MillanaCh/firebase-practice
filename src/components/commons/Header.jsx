import { Grid, Button, Box, Typography, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import {useContext} from "react"
import {CardContext} from "../../context/GeneralCard"
import {GeneralAuthContext} from "../../context/GeneralAuthContext"
import { BsBag } from 'react-icons/bs';
import { VscAccount } from 'react-icons/vsc';
import { CgLogOut } from 'react-icons/cg';

function Header() {
    const {allProductsInCard}  = useContext(CardContext)
    const {user, logOut}  = useContext(GeneralAuthContext)
    const sumOfAllProducts = allProductsInCard.reduce((accum, product) => accum + product.qty, 0)
  return (
    <>
    <div style={{backgroundColor:"#424245", height:"60px"}}></div>
    <Grid container spacing={2} style={{justifyContent: "space-around", backgroundColor:"#313132"}}>
      <Grid item xs={12} md={2}>
        <Link to="/">
          <img src="https://financialit.net/sites/default/files/apple-logo-grey-880x625_0.png" width="50px"/>
        </Link>
      </Grid>
      <Grid item xs={12} md={10} style={{display:"flex", alignItems:"center", textAlign:"center", justifyContent: "space-between"}}>
        <Box sx={{display:"flex", alignItems:"center", textAlign:"center"}}>
            <Link to="/" className="link-part">Store</Link>
            <Link to="/dashboard" className="link-part">Dashboard</Link>
            <Link to="/support"  className="link-part">Support</Link>
            <Link to="/cart-description" className="link-part"><button className="btn-header"><BsBag/></button></Link>
            {!user ? (<Link to="/login"className="link-part"><button className="btn-header"><VscAccount/></button></Link>) : (<button className="btn-header" onClick={() => logOut() }><CgLogOut/></button>)}
        </Box>
      </Grid>
    </Grid>
    </>
  );
}
export default Header;
