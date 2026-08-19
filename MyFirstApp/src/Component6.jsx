function AdminDashboard(){
    return(

        <>
        <h1 align="center">Admin Dashboard</h1>
        
        </>
    );
}

function ManagerDashboard(){
    return(

        <>
        <h1 align="center">Manager Dashboard</h1>
        
        </>
    );
}


function UserDashboard(){
    return(

        <>
        <h1 align="center">User Dashboard</h1>
        
        </>
    );
}






function Comp6(){


    let user="Admin"
    let dashboard

    if(user== "Admin")
        dashboard= <AdminDashboard/>;
    else if(user == "Manager")
        dashboard= <ManagerDashboard />;

     else if(user == "User")
        dashboard= <UserDashboard />;




   return (
        <>

        <h1 align="center">Component6</h1>
        {dashboard}
        </>
        

    );



            
            

}
export default Comp6;