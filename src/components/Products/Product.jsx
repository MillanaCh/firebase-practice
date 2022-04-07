import { useState, useContext } from "react";
import {CardContext} from "../../context/GeneralCard"
import * as actions from "../../context/actions"


function Product({ id, data }) {
  const [qty, setQty] = useState(0);
  const {dispacher} = useContext(CardContext)
  const handlerAddToCard = () => {
    setQty(0)
    dispacher({type: actions.ADDTOCARD, payload: {...data,id: id, qty: qty}})
  }
  return (
    <div>
        <h2>{data.name}</h2>
        <img src={data.img} width="250px"/>
        <h3>{data.price}</h3>
        <button onClick={() =>setQty(prev => prev + 1)}>+</button>
        <span>{qty}</span>
        <button onClick={() =>setQty(prev => prev - 1)}>-</button>
        <button onClick={() => handlerAddToCard()}>Add to Card</button>
    </div>
  );
}
export default Product;
