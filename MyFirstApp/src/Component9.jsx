function ChildComponent({children ,name ,age}){
    // console.log(props);
    return(
        <>
        <h1 align="center">Child Component</h1>
        {name}
        {children}
        
        </>
    
    )

}

function Comp9(){

 return(
        <>
        <h1 align="center">Component9</h1>
        <ChildComponent age={34} name={"virat"}>
            <p>praraaa</p>
            <button>button</button>
        </ChildComponent>
        </>
    );
    
}
export default Comp9;