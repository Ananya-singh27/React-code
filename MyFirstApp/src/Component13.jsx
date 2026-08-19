import { useState } from "react";


function Comp13 (){

   let[count,setCount]=useState(0);
   console.log(count);


   function btnClick(){
      setCount(count+ 1);
   }




  

    return (
        <>
         <h1 align='center'>Component13 </h1>
         count:{count}<br />
         <button onClick={btnClick}>Button</button>

         

            
         </>
        
    );
}
export default Comp13;