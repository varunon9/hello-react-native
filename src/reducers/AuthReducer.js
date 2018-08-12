import { LOGIN, LOGOUT } from '../actions/AuthAction';

const initialState = {
  authToken: '',
  email: '',
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: 
      return { ...state, ...action.payload };
    case LOGOUT:
      return { ...state, ...initialState };
    default:
      return state;
  }
};

export default AuthReducer;