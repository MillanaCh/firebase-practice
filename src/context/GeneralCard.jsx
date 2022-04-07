import { createContext, useReducer } from "react";
import * as actions from "./actions";
export const CardContext = createContext([]);
const initialState = [];
const cardReducer = (state, action) => {
  switch (action.type) {
    case actions.ADDTOCARD:
      return [...state, action.payload];
    default:
      return state;
  }
};
const CardProvider = ({ children }) => {
  const [allProductsInCard, dispacher] = useReducer(cardReducer, initialState);
  const data = {
    dispacher: dispacher,
    allProductsInCard: allProductsInCard,
  };
  return <CardContext.Provider value={data}>{children}</CardContext.Provider>;
};
export default CardProvider;
