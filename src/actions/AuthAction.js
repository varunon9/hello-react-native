export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

/**
 * This Action Creator can be used without `redux-thunk` middleware
 * Note that it accepts `dispatch` arguments and returns an object
 * 
 * Here we need to provide a wrapper function inside `mapDispatchToProps` function 
 */
export const login = (dispatch, loginDetails) => {
  
}

export const logout = () => {
  
}