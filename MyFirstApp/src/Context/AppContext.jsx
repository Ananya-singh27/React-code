import { createContext ,useState } from "react"


export const GlobalContext = createContext()

 export function ApplicationContext({children}){
  const [userName,setUserName]= useState("Ananya");
    // const userName="Ananya";
    const age =  60;
    return(
        <>
          <GlobalContext.Provider value={{userName,age,setUserName}}>
            {children}


         </GlobalContext.Provider>

        </>
    )
}