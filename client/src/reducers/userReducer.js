let initial = {
  loggedIn: false,
  info: {}
};

export default (state = initial, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        loggedIn: true,
        info: action.payload
      };
    case 'DROP_USER':
      return {
        ...state,
        loggedIn: false,
        info: {}
      };
    default:
      return state;
  }
};
