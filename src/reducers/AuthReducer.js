const INITIAL_STATE = {
  authToken: '',
  email: '',
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN: 
      return { ...state, ...action.payload };
    case LOGOUT:
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};

export default AuthReducer;