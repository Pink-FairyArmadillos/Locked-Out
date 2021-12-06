const setUserIDAction = (userID) => {
  return {
    type: "ADD_USER_ID",
    payload: userID,
  };
};
export default setUserIDAction;
