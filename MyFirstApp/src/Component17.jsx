import { createContext, useContext, useEffect, useState } from "react";
 const MyContext= createContext()
function Comp17(){
    const userName="rahul";
    const age=45;
    
    return(
    <>
    <h1 align='center'>Component17</h1>
    <MyContext.Provider value={{userName,age}}>
        <CompA />

    </MyContext.Provider>
    
    

   
    </>
    );
}
function CompA(){
   
    return(
    <>
    <h1 align='center'>ComponentA</h1>
    <CompB />
   
   
    </>
    );
}
function CompB(){
   
    return(
    <>
    <h1 align='center'>ComponentB</h1>
    <CompC />
    

    

   
    </>
    );
}
function CompC(){
    const {userName,age}=useContext(MyContext);
   
    return(
    <>
    <h1 align='center'>ComponentC</h1>
    {userName}
    {age}
    
    

   
    </>
    );
}

export default Comp17;