import{useContext}from "react";
import{GlobalContext} from "./Context/AppContext.jsx";


function Comp1(){
  const {userName ,age,setUserName} =useContext(GlobalContext);
  return(
    <>
    <h1 align="center">Hello {userName}, your age is {age}</h1>
    <button onClick={()=>setUserName("ruchi")}>Change Name</button>
    </>

  );
}
export default Comp1;