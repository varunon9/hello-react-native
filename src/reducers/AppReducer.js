import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import ProfileReducer from './ProfileReducer';

const AppReducer = combineReducers({
  auth: AuthReducer,
  profile: ProfileReducer
});

export default AppReducer;