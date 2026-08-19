import { useState } from "react";

function Comp14(){


const[productsData ,setproductsData]=useState([])

const [isLoading ,setIsloading]=useState(false);

 function loadproducts(){
    setIsloading(true);
        setTimeout(()=>{
            setproductsData([
    {proId:1012, proName:"iMac",proprice:899,proQty:5},
    {proId:1122, proName:"Macbook",proprice:1199,proQty:2},
    {proId:3012, proName:"ipad",proprice:699,proQty:10},
    {proId:2012, proName:"EarPods",proprice:599,proQty:25},
    {proId:1412, proName:"charger",proprice:199,proQty:50},
]);
setIsloading(false);


        },3000)
    }
    
   return(
    <>
    <h1 align='center'>Component5</h1>
   
   {isLoading ? <button>loading</button>:<button onClick={loadproducts} disabled={isLoading}>loadproducts</button>}
   {isLoading && <span className="spinner-border"></span>}

    <div className="container">
            {productsData.length>0 &&(
          <table className="table table-bordred">
            <thead className="table-dark">
                <tr>
                    <th>Product Id</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>Product Quantity</th>
                </tr>
                
            </thead>
            <tbody>
            {productsData.map((product)=>(
                <tr>
                    <td>{product.proId}</td>
                    <td>{product.proName}</td>
                    <td>{product.proprice}</td>
                    <td>{product.proQty}</td>
                </tr>

            ))}
            </tbody>
          </table>
)}


         </div>
    
    </>
    );
}

export default Comp14;