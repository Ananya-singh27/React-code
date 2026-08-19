
import {Link}from 'react-router-dom';
function MyCard({product})

{
    return(
        <>
        <div className="card">

            <div className="card-header"> {product.proName} </div>
            <div className="card-body"> body</div>
             <p className="alert alert info"> 
                product Id:{product.proID}
                
                product price:{product.proPrice}
                
                product quantity:{product.proQty}
                
             </p>
            <div className="card-footer"> 
                <Link to = {`/details/${product.proID}`}>View all details</Link> 
            </div>
            
        </div>


        </>
    )
}

function Comp10(){
    const productDetails=[
        {proID:1002,proName:"iMac", proPrice:899,proQty:5},
        {proID:1003,proName:"Macbook", proPrice:1199,proQty:2},
        {proID:1004,proName:"iMac", proPrice:699,proQty:10},
        {proID:1005,proName:"earPods", proPrice:599,proQty:25},
        {proID:1006,proName:"charger", proPrice:199,proQty:50}
    ]

    return(
        <>

        <h1 align="Center">Component11</h1>

        <div className="container">
            {  productDetails.length > 0 && (
            <div className="row">
                {productDetails.map((product)=>(
                    <div className="col-lg-3 col-md-4 col-sm-6 ">
                        
                    < MyCard key={product.proID}product={product}/>
                    
                    </div>
                    ))}
                    
                    </div>
           ) }


        </div>

    
        </>
    );
}
export default Comp10;