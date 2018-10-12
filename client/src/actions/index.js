export const addUser = user => dispatch => {
  dispatch({
    type: 'ADD_USER',
    user
  });
};

export const dropUser = user => dispatch => {
  dispatch({
    type: 'DROP_USER',
    user
  });
};

export const logIn = status => dispatch => {
  dispatch({
    type: 'LOG_IN',
    status
  });
};

export const logOut = status => dispatch => {
  dispatch({
    type: 'LOG_OUT',
    status
  });
};
