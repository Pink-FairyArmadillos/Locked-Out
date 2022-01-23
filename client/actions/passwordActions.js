export const setUserIDAction = (userID) => {
  return {
    type: "ADD_USER_ID",
    payload: userID,
  };
};

export const setEntryURL = (entryURL) => {
  return {
    type: "SET_ENTRY_URL",
    payload: (entryURL),
  };
};

export const setEntryPassword = (entryPassword) => {
  return {
    type: "SET_ENTRY_PASSWORD",
    payload: entryPassword,
  };
};

export const setEntries = (entries) => {
  return {
    type: "SET_ENTRIES",
    payload: entries,
  };
};

export const setUserLoggedIn = (userLoggedIn) => {
  return {
    type: "SET_USER_LOGGED_IN",
    payload: userLoggedIn,
  };
};

export const setPasswordState = (setPasswordState) => {
  return {
    type: "SET_PASSWORD_STATE",
    payload: setPasswordState,
  };
};

export const setConfirmPasswordState = (setConfirmPasswordState) => {
  return {
    type: "SET_CONFIRM_PASSWORD_STATE",
    payload: setConfirmPasswordState,
  };
};

export const setConfirmPassword = (setConfirmPassword) => {
  return {
    type: "SET_CONFIRM_PASSWORD",
    payload: setConfirmPassword,
  };
};

export const setPassword = (password) => {
  return {
    type: "SET_PASSWORD",
    payload: password,
  };
};

export const setUsername = (username) => {
  return {
    type: "SET_USERNAME",
    payload: username,
  };
};