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
  const [generatedPassword, generatedPasswordOnChange] = useInput('');
  const [passwordLength, passwordLengthOnChange] = useInput('');
  const [upperCase, upperCaseOnChange] = useInput('');
  const [lowerCase, lowerCaseOnChange] = useInput('');
  const [number, numberOnChange] = useInput('');
  const [symbol, symbolOnChange] = useInput('');

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
    if (upperCase) {
      charArray = charArray.concat(upperLetters);
    }
    if (lowerCase) {
      console.log(lowerCase);
      charArray = charArray.concat(lowerLetters);
    }
    if (number) {
      charArray = charArray.concat(numbers);
    }
    if (symbol) {
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
      <input
        id="generatedPassword"
        //onChange={generatedPasswordOnChange}
      ></input>
      <button onClick={copyToClipboard}>Copy To Clipboard</button>
      <br />
      <label htmlFor="passwordLength">Password Length: </label>
      <input
        type="number"
        min="0"
        max="100"
        name="passwordLength"
        placeholder="Number"
        value={passwordLength}
        onChange={passwordLengthOnChange}
      />
      <br />
      <input
        type="checkbox"
        id="upperCase"
        name="upperCase"
        value="upperCase"
        onChange={upperCaseOnChange}
      />
      <label for="upperCase">Upper Case</label>
      <br />
      <input
        type="checkbox"
        id="lowerCase"
        name="lowerCase"
        value="lowerCase"
        onChange={lowerCaseOnChange}
      />
      <label for="lowerCase">Lower Case</label>
      <br />
      <input
        type="checkbox"
        id="number"
        name="number"
        value="number"
        onChange={numberOnChange}
      />
      <label for="number">Number</label>
      <br />
      <input
        type="checkbox"
        id="symbol"
        name="symbol"
        value="symbol"
        onChange={symbolOnChange}
      />
      <label for="symbol">Symbol</label>
      <br />
      <button type="submit" onClick={generate}>
        Generate
      </button>
    </div>
  );
};

export default GeneratePassword;
