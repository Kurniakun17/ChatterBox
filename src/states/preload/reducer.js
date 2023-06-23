import { ActionType } from './action';

export const preloadReducer = (preload = true, action = {}) => {
  switch (action.type) {
    case ActionType.SET_PRELOAD:
      return action.payload.preload;
    default:
      return preload;
  }
};
