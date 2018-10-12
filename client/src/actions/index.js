export const addUser = user => dispatch => {
  dispatch({
    type: 'ADD_USER',
    payload: user
  });
};

export const dropUser = user => dispatch => {
  dispatch({
    type: 'DROP_USER',
    payload: user
  });
};
