const initialState = { 
  userID: 0, 
  entryURL: "",
  entryPassword: "",
  entries: [],
  userLoggedIn: false,
  passwordState: 'password',
  confirmPasswordState: 'password',
  confirmPassword: "",
  password: "",
  username: "",
};

const bigReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER_ID": {
      return {
        ...state,
        userID: action.payload,
      };
    }
    case "SET_ENTRY_URL": {
      return  {
        ...state,
        entryURL: action.payload,
      };
    }
    case "SET_ENTRY_PASSWORD": {
      return  {
        ...state,
        entryPassword: action.payload,
      };
    }
    case "SET_ENTRIES": {
      return  {
        ...state,
        entries: action.payload,
      };
    }
    case "SET_USER_LOGGED_IN": {
      return  {
        ...state,
        userLoggedIn: action.payload,
      };
    }
    case "SET_PASSWORD_STATE": {
      return  {
        ...state,
        setPasswordState: action.payload,
      };
    }
    case "SET_CONFIRM_PASSWORD_STATE": {
      return  {
        ...state,
        setConfirmPasswordState: action.payload,
      };
    }
    case "SET_CONFIRM_PASSWORD": {
      return  {
        ...state,
        setConfirmPassword: action.payload,
      };
    }
    case "SET_PASSWORD": {
      return  {
        ...state,
        password: action.payload,
      };
    }
    case "SET_USERNAME": {
      return  {
        ...state,
        username: action.payload,
      };
    }
    default:
      return state;
  }
};
export default bigReducer;
