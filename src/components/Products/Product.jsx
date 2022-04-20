import { useState, useContext } from "react";
import { CardContext } from "../../context/GeneralCard";
import * as actions from "../../context/actions";
import { Card, CardContent, CardMedia } from "@mui/material";
import styled, { ThemeProvider } from 'styled-components';
import {createTheme, ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#ffff",
    },
  },
});

const StyledCard = styled(Card)`
  ${({ theme }) => `
  cursor: pointer;
  background-color: ${theme.palette.primary.main};
  transition: ${theme.transitions.create('transform', {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    background-color: ${theme.palette.primary.main};
    transform: scale(1.1);
  }
  `}
`;
function Product({ id, data }) {
  const [qty, setQty] = useState(0);
  const { dispacher } = useContext(CardContext);
  const handlerAddToCard = () => {
    dispacher({
      type: actions.ADDTOCARD,
      payload: { ...data, id: id, qty: qty },
    });
    setQty(0);
  };
  return (
    <>
    <MuiThemeProvider theme={customTheme}>
        <ThemeProvider theme={customTheme}>
      <StyledCard> 
      <CardContent>
      <CardMedia
        component="img"
        height="140"
        image={data.img}
        alt="apple products"
      />
      <h3>{data.name}</h3>
      <p>{data.price}</p>
      <button className="btn-eachProduct" onClick={() => setQty((prev) => prev + 1)}>+</button>
      <span>{qty}</span>
      <button className="btn-eachProduct" onClick={() => setQty((prev) => prev - 1)}>-</button>
      <button  className="btn-addToCard" onClick={() => handlerAddToCard()}>Add to Card</button>
      </CardContent>
      </StyledCard>
       </ThemeProvider>
    </MuiThemeProvider>
    </>
  );
}
export default Product;

