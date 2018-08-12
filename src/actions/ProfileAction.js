export const PROFILE_UPDATED = 'PROFILE_UPDATED';

/**
 * This Action creator relies on `redux-thunk` middleware for dispatching 
 * action object. Notice that it itself returns a function (instead of object)
 * When `redux-thunk` middleware sees that some action creator is returning 
 * function then it automatically wraps the function with two arguments- 
 * dispatch and getState (both are functions)
 *
 * We no longer need to provide wrapper in `mapDispatchToProps` function 
 */
export const updateProfile = (profileDetails) => {
  return (dispatch/*, getState*/) => {

  };
}