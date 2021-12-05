import React from 'react'

const PasswordStrengthMeter = () => {
  
    const changePasswordColor = () => ({
        width: '70%',
        background: 'red',
        height: '7px'
    })

    return (
        <div>
            <div className = "progress" style = {{background}}>
                <div className = "progress=bar" style = {changePasswordColor()}></div>
            </div>
        </div>

    )
}


// let error = false;
// let message = '';
// if (password.length < 4) {
//   message += "Your password needs a minimum of four characters. ";
//   error = true;
// }
// if (password.contains(/[a-z]/) == -1) {
//   message += "Your password needs at least one lowercase letter. ";
//   error = true;
// }
// if (!password.contains(/[A-Z]/) == -1) {
//   message += "Your password needs at least one uppercase letter. ";
//   error = true;
// }
// if (!password.contains(/[0-9]/) == -1) {
//   message += "Your password needs a number.";
//   error = true;
// }
// if (password.contains(/[0-9]/) == -1) {
//     message += "Your password needs a number.";
//     error = true;
// }

// // TEST
// const password = 'Jay19%&*' 
// // check to see that match method returned array element 0 !== ''
// // const passwordhasSymbols =  password.match(/[^A-Za-z0-9]+/)
// // if(password[0]?.length >0)

//   if (password.match(/[^A-Za-z0-9]+/)) { // check for symbol
//     console.log(password.match(/[^A-Za-z0-9]+/));
//     // message += "Your password needs a symbol.";
//     // error = true;
// }

export default PasswordStrengthMeter