import { useContext , useState} from "react";

export const CardContext = useContext([])
const CardProvider = ({children}) => {
    const data = {}
    return(
        <CardContext.Provider value={data}>
            {children}
        </CardContext.Provider>
    )
}
export default CardProvider