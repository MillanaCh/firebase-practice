import { useState } from "react"

function Product({id, data}) {
    const [qty, setQty] = useState(0)
    return(
        <div>
            <h2>{data.name}</h2>
            <img src={data.img} width="250px"/>
            <h3>{data.price}</h3>
            <button onClick={() =>setQty(prev => prev + 1)}>+</button>
            <span>{qty}</span>
            <button onClick={() =>setQty(prev => prev + 1)}>-</button>
            <button>Add to Card</button>
        </div>
    )
}
export default Product