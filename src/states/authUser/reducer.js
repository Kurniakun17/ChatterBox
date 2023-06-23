import { ActionType } from './action';

export const authUserReducer = (authUser = null, action = {}) => {
  switch (action.type) {
    case ActionType.SET_AUTH_USER:
      console.log(action.payload);
      return action.payload.authUser;
    case ActionType.UNSET_AUTH_USER:
      return action.payload.authUser;
    default:
      return authUser;
  }
};

export default authUserReducer;