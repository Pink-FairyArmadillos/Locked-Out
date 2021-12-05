import React, {useState, useEffect} from 'react';
import PasswordStrengthMeter from './PasswordStrengthMeter.jsx';

const App = () => {
const [state, setState] = useState({
    username: '',
    password: '',
});
const username = state.username;
const password = state.password;
// useEffect(() => {
//     console.log('temp', temp)
//     fetch('/test', {
//         method: 'GET',
//         headers: {'Content-Type':'application/json'}})
//         .then(response => response.json())
//         .then(data => setTemp(data))
// },[temp]);

function onChangeUsername(e) {
    setState(prevState => {
        return {...prevState, username: e.target.value}
    })
};

function onChangePassword(e) {
    setState(prevState => {
        return {...prevState, password: e.target.value}
    })
};

function signUp (username, password) {
    fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: username, password: password}) // 
    })
    .then(response => response.json())
    .then(data => console.log("data: ", data));
};

function submitLogin (username, password) {
    fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: username, password: password}) // 
    })
    .then(response => response.json())
    .then(data => console.log("data: ", data));
}
return (
        <div>
            <h2>Pink Fairy Armidallo Password Manager</h2>
            <hr></hr>
            <div>
               <h2>Please Login</h2> 
            </div>
            <div>
               username:<input id = "username" type = "text" value = {username} onChange = {onChangeUsername}></input> 
               password:<input type = "text" value = {password} onChange = {onChangePassword}></input> 
               <button onClick = {() => {submitLogin()}}>Log in</button>
               <button onClick = {() => {signup()}}>Sign-up</button>
            </div>
            {/* <PasswordStrengthMeter /> */}
        </div>
    );
};





export default App;