import { useState } from "react";

function Comp15(){
    const [formData ,setFormData]=useState({})
    function inputHandler(event){

        setFormData({...formData,[event.target.name]:event.target.value});
        //  console.log(formData);
    }
    function formHandler(event){
        event.preventDefault();
        console.log(formData);
    }

    return(
    <>
    <h1 align='center'>Component15</h1>
    <form onSubmit={ (event)=>formHandler(event)}> 
    <table className="table table-bordered w-50 mx-auto">
        <tbody>
            <tr>
                <td>User Name</td>
                <td>
                    <input type="text" name="unm" 
                    onChange={( event)=>inputHandler(event)} />
                </td>
            </tr>

                <tr>
                <td>Password</td>
                <td>
                    <input type="password" name="pwd" 
                    onChange={( event)=>inputHandler(event)} />
                </td>
            </tr>
            <tr>
                <td>Email id</td>
                <td>
                    <input type="Email" name="email" 
                    onChange={( event)=>inputHandler(event)} />
                </td>
            </tr>
            <tr>
                <td colSpan="2" align="center">
                    <button type="submit">submit</button>
                </td>
            </tr>
        </tbody>
    </table>
    </form>
   
   
    </>
    );
}

export default Comp15;