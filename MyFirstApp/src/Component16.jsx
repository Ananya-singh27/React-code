    import { useEffect, useState } from "react";

function Comp16(){
    const[count1,setCount1]=useState(0);
    const[count2,setCount2]=useState(100);

    useEffect(()=>{
        console.log("use effect..");
    },[count2]);
    

    return(
    <>
    <h1 align='center'>Component16</h1>
    <div style={ {border:'2px solid blue',
        padding:'20px',
        marginBottom:'30px'} }>
            <h3>count1:{count1}</h3>
            <button onClick={()=>setCount1(count1+1)}>button</button>

    </div>
    <div style={ {border:'2px solid green',
        padding:'20px',
        marginBottom:'30px'} }>
            <h3>count2:{count2}</h3>
            <button onClick={()=>setCount2(count2+50)}>button</button>

    </div>


   
    </>
    );
}

export default Comp16;