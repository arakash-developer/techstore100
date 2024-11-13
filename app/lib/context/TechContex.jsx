import { createContext,useState } from "react";
export let Contex = createContext();
let TechContex = ({children}) =>{
    let [page,setPage] = useState(1)
    let [limit,setLimit] = useState(6)
    return(
        <Contex.Provider value={{limit,setLimit,page,setPage}}>
            {children}
        </Contex.Provider>       
    );
}
export default TechContex;