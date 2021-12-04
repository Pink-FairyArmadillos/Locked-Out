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