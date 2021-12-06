const initialState = { userID: 0 };
const passwordReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER_ID": {
      return {
        ...state,
        userID: action.payload,
      };
    }
    default:
      return state;
  }
};
export default passwordReducer;
