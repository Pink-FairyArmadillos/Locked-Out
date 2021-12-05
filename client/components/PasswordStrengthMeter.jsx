import React from 'react';
import zxcvbn from "zxcvbn/zxcvbn";

// from this video: https://www.youtube.com/watch?v=tIInwIlf13A -- got to 11:40 mark, not able to npm install bower or zxcvbn packages???!!

const PasswordStrengthMeter = ({ password }) => {
    const testResult = zxcvbn(password);
    const passwordScore = (testResult.score * 100) / 4;
    console.log(passwordScore); // score is 0-4
    
    const progressColor = () => {
        switch(testResult.score){
            case 0: return '828282';
            case 1: return '#EA1111';
            case 2: return '#FFAD00';
            case 3: return '#9bc158';
            case 4: return '#00b500';
            default: return 'none';
        }
    }

    const createPasswordLabel = () => {
        switch(testResult.score){
            case 0: return 'Very weak';
            case 1: return 'Weak';
            case 2: return 'Fair';
            case 3: return 'Good';
            case 4: return 'Strong';
            default: return '';
        }
    }

    const changePasswordColor = () => ({
        width: `${passwordScore}%`,
        background: progressColor(),
        height: '7px'
    })

    return (
        
        <>
            <div className = "progress" style={{height: '7px'}}>
                <div className="progress-bar" style={changePasswordColor()}></div>
            </div>
                <p style={{ color: progressColor()}} >{createPasswordLabel()}</p>
        </>
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