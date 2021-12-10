import React, { useState, useEffect } from 'react';

const useInput = (init) => {
  const [value, setValue] = useState(init);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  // return the value with the onChange function instead of setValue function
  return [value, onChange];
};

const GeneratePassword = () => {
  const [passwordLength, passwordLengthOnChange] = useInput('');
  // const [generatedPassword, generatedPasswordOnChange] = useInput('');
  // const [upperCase, upperCaseOnChange] = useInput('');
  // const [lowerCase, lowerCaseOnChange] = useInput('');
  // const [number, numberOnChange] = useInput('');
  // const [symbol, symbolOnChange] = useInput('');
  let upperOn = false;
  let lowerOn = false;
  let numberOn = false;
  let symbolOn = false;

  function upperClick() {
    upperOn ? (upperOn = false) : (upperOn = true);
    console.log(upperOn);
  }
  function lowerClick() {
    lowerOn ? (lowerOn = false) : (lowerOn = true);
    console.log(lowerOn);
  }
  function numberClick() {
    numberOn ? (numberOn = false) : (numberOn = true);
    console.log(numberOn);
  }
  function symbolClick() {
    symbolOn ? (symbolOn = false) : (symbolOn = true);
    console.log(symbolOn);
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      document.getElementById('generatedPassword').value
    );
  };

  const upperLetters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  const lowerLetters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const symbols = [
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '<',
    '>',
    '-',
    '=',
    '+',
    '?',
    '\\',
    '/',
    '.',
    ',',
    ';',
  ];

  const generate = () => {
    console.log(passwordLength);
    let stringLength = passwordLength;
    let password = '';
    let charArray = [];
    if (upperOn) {
      console.log(upperOn);
      charArray = charArray.concat(upperLetters);
    }
    if (lowerOn) {
      console.log(lowerOn);
      charArray = charArray.concat(lowerLetters);
    }
    if (numberOn) {
      console.log(numberOn);
      charArray = charArray.concat(numbers);
    }
    if (symbolOn) {
      console.log(symbolOn);
      charArray = charArray.concat(symbols);
    }
    if (!charArray.length) {
      console.log('charArray length ', charArray.length);
      document.getElementById('generatedPassword').value = 'Select Parameters';
      return;
    }
    while (stringLength > 0) {
      const index = Math.floor(Math.random() * charArray.length);
      password += charArray[index];
      stringLength--;
    }
    console.log(charArray.length);
    document.getElementById('generatedPassword').value = password;
  };

  return (
    <div className="generatePassword">
      <div className="dashboard-control-inputs">
        <div>
          <input id="generatedPassword"></input>
          <button onClick={copyToClipboard}>Copy To Clipboard</button>
        </div>
        <div>
          <label htmlFor="passwordLength">Password Length: </label>
          <input
            type="number"
            min="0"
            max="100"
            name="passwordLength"
            id="number"
            placeholder="Number"
            value={passwordLength}
            onChange={passwordLengthOnChange}
          />
        </div>
        <div>
          <input
            type="checkbox"
            id="upperCase"
            name="upperCase"
            value="upperCase"
            onChange={upperClick}
          />
          <label for="upperCase">Upper Case</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="lowerCase"
            name="lowerCase"
            value="lowerCase"
            onChange={lowerClick}
          />
          <label for="lowerCase">Lower Case</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="number"
            name="number"
            value="number"
            onChange={numberClick}
          />
          <label for="number">Number</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="symbol"
            name="symbol"
            value="true"
            onChange={symbolClick}
          />
          <label for="symbol">Symbol</label>
        </div>
      </div>
      <button className="secondary-button" type="submit" onClick={generate}>
        Generate
      </button>
    </div>
  );
};

export default GeneratePassword;
