import { ActionConst } from 'react-native-router-flux';

const initialState = {
  scene: 'login'
};

const SceneReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionConst.FOCUS:
      return { ...state, scene: action.payload };
    default:
      return state;
  }
};

export default SceneReducer;
