import { createContext,useState } from "react";
export let Contex = createContext();
let Quantity = ({children}) =>{
    let [quantity,setQuantity] = useState(1);
    let [price,setPrice] = useState(null);
    let [size,setSize] = useState("S");
    let [mytok,setMytok] = useState();
    let [layer1,setLayer1] = useState(false);
    return(
        <Contex.Provider value={{quantity,setQuantity,price,setPrice,size,setSize,mytok,setMytok,layer1,setLayer1}}>
            {children}
        </Contex.Provider>       
    );
}
export default Quantity;