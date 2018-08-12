import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import ProfileReducer from './ProfileReducer';
import SceneReducer from './SceneReducer';

const AppReducer = combineReducers({
  auth: AuthReducer,
  profile: ProfileReducer,
  scene: SceneReducer
});

export default AppReducer;