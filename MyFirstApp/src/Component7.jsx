

function Comp7(){


      let isLoggedIn = true;

      let arr=["Sachin","virat","rahul"]
      function myfun(){
        alert("pls logout")
      }

      function myfun2(name){
        alert("successfuly login"+name)
      }



    return (
        <>

        <h1 align="center">Component7</h1>
        {arr.length >0 && arr.map((ele)=><p>{ele}</p>)}

        {isLoggedIn ? <button onClick={()=>{myfun2("Sachin")}} >logout</button>:<button onClick={myfun}>login</button>}

        
        </>
        

    );



            
            

}
export default Comp7;