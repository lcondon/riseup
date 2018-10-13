export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return Object.assign({}, state, action.user);
    case 'DROP_USER':
      return Object.assign({}, state, action.user);
    default:
      return state;
  }
};

export const logInReducer = (state = false, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return true;
    case 'LOG_OUT':
      return false;
    default:
      return state;
  }
};
