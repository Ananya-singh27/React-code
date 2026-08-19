import {Routes,Route,Link}from 'react-router-dom';
import Comp1 from './Component1';
import Comp2 from './Component2';
import Showdetails from './Component12';
import Comp10 from './Component10';


function Comp11(){

    return (
        <>
        <h1 align='center'>Component11</h1>

        <Link to="/home"></Link>
        <Link to="/details/1001">product</Link>
        <Link to="/products">View all products</Link>


         <Routes>

            <Route path="/" element={<Comp1 />}/>
            <Route path="/home" element={<Comp2 />}/>
            <Route path="/products" element={<Comp10 />}/>
            <Route path="/details/:id" element={<Showdetails/>}/>
         </Routes>


        
            
      

            
         </>
        
    )
}
export default Comp11;