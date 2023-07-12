import { API } from '../../utils/api';
import { setAuthUserActionCreator } from '../authUser/action';

export const ActionType = {
  SET_PRELOAD: 'SET_PRELOAD',
};

export const setPreloadActionCreator = (preload) => ({
  type: ActionType.SET_PRELOAD,
  payload: {
    preload,
  },
});

export const asyncPreloadProcess = () => async (dispatch) => {
  try {
    const authUser = await API.getOwnProfile();
    dispatch(setAuthUserActionCreator(authUser));
  } catch (error) {
    dispatch(setAuthUserActionCreator(null));
  } finally {
    dispatch(setPreloadActionCreator(false));
  }
};
