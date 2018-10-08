export const dropUser = user => dispatch => {
  dispatch({
    type: 'DROP_USER',
    payload: user
  });
};
