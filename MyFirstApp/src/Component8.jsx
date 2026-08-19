function Comp8(){
    const productDetails=[
        {proID:1002,proName:"iMac", proPrice:899,proQty:5},
        {proID:1003,proName:"Macbook", proPrice:1199,proQty:2},
        {proID:1004,proName:"iMac", proPrice:699,proQty:10},
        {proID:1005,proName:"earPods", proPrice:599,proQty:25},
        {proID:1006,proName:"charger", proPrice:199,proQty:50}
    ]

    return(
        <>

        <h1 align="Center">Component8</h1>

        <div className="container">
            {productDetails.length >0 &&(
            <table className="table table-bordered">
                <thead className="table-alert">
                    <tr>
                        <td>Product id</td>
                        <td>Product Name </td>
                        <td>Product Price</td>
                        <td>Product Quantity</td>
                    </tr>
                </thead>
                <tbody>
                    {productDetails.map((product)=>(
                        <tr>
                            <td>{product.proID}</td>
                            <td>{product.proName}</td>
                            <td>{product.proPrice}</td>
                            <td>{product.proQty}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
)}

        </div>
        
        </>
    )
}
export default Comp8;