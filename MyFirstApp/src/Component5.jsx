

function Comp5(){


    function myfun(){
        alert("hlooo......");
    }

    
    function myfun2(name){
        alert("welcome "+name);
    }

    

    return(

        <>

        <h1 align="center">Component5</h1>


        <button  onClick={myfun}>button1</button>

        <button  onClick={ ()=> {
            myfun2("virat");
        }
        }>button2</button>
        

        </>

    );



            
            

}
export default Comp5;