import React from 'react'
import {render, fireEvent, waitFor, screen, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom'


const PasswordEntry = (props) => {

  const [passwordState, setPasswordState] = useState(props.value);
  const [passwordType, setPasswordType] = useState('password');
  
  return (
    <>
      <input
        style={{ marginTop: "3px", marginLeft: "10px" }}
        className="form-group shadow-none"
        readOnly="true"
        type={passwordType}
        value={passwordState}
        onChange={(e) => setPasswordState(e.target.value)}
      ></input>
      <button
        style={{
          borderRadius: "18px",
          height: "20px",
          width: "50px",
          fontSize: "10px",
        }}
        onClick={() =>
          setPasswordType(passwordType === "password" ? "text" : "password")
        }
      >
        Reveal
      </button>
    </>
  );
};

afterEach(cleanup);

const defaultProps = { 
  onClick: jest.fn(),
  text: "Submit" ,
};

test('button renders with correct text', () => {
  const { queryByText, rerender } = render(<PasswordEntry {...defaultProps} />);
  expect(queryByText("Reveal")).toBeTruthy(); 

  // Change props
  rerender(<PasswordEntry {...defaultProps} text="Go" />);
  expect(queryByText("Go")).toBeTruthy(); 
});

test('calls correct function on click', () => {
  const onClick = jest.fn();
  const { getByText } = render(<PasswordEntry {...defaultProps} onClick={onClick} />)
  fireEvent.click(getByText(defaultProps.text));
  expect(onClick).toHaveBeenCalled();
});

// test('renders learn react link', () => {
//   render(<App />);
//   screen.debug();
// });