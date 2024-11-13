import { createContext,useState } from "react";
export let Contex = createContext();
let TechContex = ({children}) =>{
    let [quantity,setQuantity] = useState(1);
    let [price,setPrice] = useState(50);
    let [size,setSize] = useState("S");
    let [mytok,setMytok] = useState();
    let [layer1,setLayer1] = useState(false);
    let [page,setPage] = useState(1)
    let [limit,setLimit] = useState(3)
    return(
        <Contex.Provider value={{limit,setLimit,quantity,page,setPage,setQuantity,price,setPrice,size,setSize,mytok,setMytok,layer1,setLayer1}}>
            {children}
        </Contex.Provider>       
    );
}
export default TechContex;