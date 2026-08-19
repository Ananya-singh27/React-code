import {useParams}from 'react-router-dom';

function Showdetails(){

  const{id}= useParams();
  console.log(id);


    return (
        <>
         <h1 align='center'>Component12 </h1>
         <h2>{id}</h2>

            
         </>
        
    );
}
export default Showdetails;