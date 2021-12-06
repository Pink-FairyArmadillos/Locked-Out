<<<<<<< HEAD
import React, {useState, useEffect} from 'react';

const App = () => {
const [temp, setTemp] = useState('');
useEffect(() => {
    console.log('temp', temp)
fetch('/test', {
    method: 'GET',
    headers: {'Content-Type':'application/json'}}).then(response => response.json()).then(data => setTemp(data))
},[temp]);
    return (
        <div>Hello World (React)
            <div>
                <input type= "text" value ={temp}/>
               <button onClick = {() => setTemp("")}>Submit</button>
               </div>
         
        </div>
    );
}
export default App;
=======
import React from "react";
import MainContainer from "../components/MainContainer.jsx";

const App = () => {
  return (
    <>
      <MainContainer />
    </>
  );
};
export default App;
>>>>>>> e4fed64bb818c5d050ae11f481d718ebd39140c7
