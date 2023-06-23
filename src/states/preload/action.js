import { APIgetOwnProfile } from '../../utils/api';
import { setAuthUserActionCreator } from '../authUser/action';

export const ActionType = {
  SET_PRELOAD: 'SET_PRELOAD',
};

export const setPreloadActionCreator = (preload) => {
  return {
    type: ActionType.SET_PRELOAD,
    payload: {
      preload,
    },
  };
};

export const asyncPreloadProcess = () => {
  return async (dispatch) => {
    try {
      const authUser = await APIgetOwnProfile();
      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      dispatch(setAuthUserActionCreator(null));
    } finally {
      dispatch(setPreloadActionCreator(false));
    }
  };
};
