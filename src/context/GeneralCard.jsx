import { createContext} from "react";

export const CardContext = createContext([])
const CardProvider = ({children}) => {
    const data = {}
    return(
        <CardContext.Provider value={data}>
            {children}
        </CardContext.Provider>
    )
}
export default CardProvider