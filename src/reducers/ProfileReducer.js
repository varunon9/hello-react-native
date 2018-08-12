import { PROFILE_UPDATED } from '../actions/ProfileAction';

const initialState = {
  profile: {
  	name: '',
  	mobile: '',
  	gender: ''
  }
};

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_UPDATED: 
      return { ...state, profile: action.payload };
    default:
      return state;
  }
};

export default ProfileReducer;