import { APILogin } from '../../utils/api';
const ActionType = {
  SET_AUTH_USER: 'SET_AUTH_USER',
  UNSET_AUTH_USER: 'UNSET_AUTH_USER',
};

const setAuthUserActionCreator = (token) => {
  return {
    type: ActionType.SET_AUTH_USER,
    payload: {
      token,
    },
  };
};

const asyncSetAuthUser = (email, password) => {
  return async (dispatch) => {
    try {
      const token = APILogin(email, password);
      dispatch(setAuthUserActionCreator(token));
    } catch (error) {
      return error;
    }
  };
};

export { ActionType, asyncSetAuthUser };
