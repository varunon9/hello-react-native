import { ActionConst } from 'react-native-router-flux';

import { PROFILE_UPDATED } from './ProfileAction';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

/**
 * This Action Creator can be used without `redux-thunk` middleware
 * Note that it accepts `dispatch` arguments
 */
export const login = (dispatch, loginDetails) => {
	const url = 'http://192.168.43.147/login.json';
  fetch(url, {
    method: 'GET'
  }).then((response) => {
    return response.json();
  }).then((response) => {
    const payload = {
      authToken: response.authToken,
      email: loginDetails.email
    };
    let action = {
      type: LOGIN,
      payload
    };
    dispatch(action);

    // change scene
    action = {};
    action.type = ActionConst.FOCUS;
    action.payload = 'drawer';
    dispatch(action);

    // set profile
    action = {};
    action.type = PROFILE_UPDATED;
    action.payload = response.profile;
    dispatch(action);
  }).catch((err) => {
    console.error(err);
  });
}

export const logout = () => {
  return {
    type: LOGOUT
  }
}