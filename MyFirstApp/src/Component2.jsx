

function Comp2(){
    let name="Ananya";
    let email="ananya@example.com";
    let arr=["apple","banana","mango"];
    let userData={ unm:'Ram',uid:100}


    let a=[]
    arr.forEach((ele)=>{
        a.push(<li>{ele}</li>)
        


    });

    return (
        <>
            <h1 align='center'>Component2</h1>
            <p>{name}
            {email}
            {arr}
            {userData.unm}
            </p>
           <p> <ul>{a}</ul></p>

            

        </>
    )
}
export default Comp2;