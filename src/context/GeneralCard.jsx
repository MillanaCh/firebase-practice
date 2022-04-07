import { createContext, useReducer } from "react";
import * as actions from "./actions";
export const CardContext = createContext([]);
const initialState = [];
const cardReducer = (state, action) => {
  switch (action.type) {
      //check if product id is exist alreasy if exist just modify anf return the state
      //if does not exist do this
    case actions.ADDTOCARD:
        const matching = state.find(el => el.id === action.payload.id)
        if(matching){
            const newState = state.map(el => {
                if(el.id === action.payload.id){
                    el.qty++
                }
                return el
            })
            return newState
        }else {
            return [...state, action.payload];
        }
    case actions.DELETEFROMCARD:
      return state.filter(product => product.id !== action.payload)
    default:
        return state
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
