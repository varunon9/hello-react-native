const INITIAL_STATE = {
  profile: {
  	name: '',
  	mobile: '',
  	gender: ''
  }
};

const ProfileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PROFILE_UPDATED: 
      return { ...state, profile: action.payload };
    default:
      return state;
  }
};

export default ProfileReducer;