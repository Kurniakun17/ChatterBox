import { APILogin, APIgetOwnProfile, putToken } from '../../utils/api';

const ActionType = {
  SET_AUTH_USER: 'SET_AUTH_USER',
  UNSET_AUTH_USER: 'UNSET_AUTH_USER',
};

const setAuthUserActionCreator = (authUser) => {
  return {
    type: ActionType.SET_AUTH_USER,
    payload: {
      authUser,
    },
  };
};

const unsetAuthUserActionCreator = () => {
  return {
    type: ActionType.SET_AUTH_USER,
    payload: {
      authUser: null,
    },
  };
};

const asyncSetAuthUser = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const { data, status, message } = await APILogin({ email, password });
      putToken(data.token);

      const authUser = await APIgetOwnProfile();
      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      return error;
    }
  };
};

const asyncUnsetAuthUser = () => {
  return (dispatch) => {
    dispatch(unsetAuthUserActionCreator());
    putToken('');
  };
};

export {
  ActionType,
  asyncSetAuthUser,
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
  asyncUnsetAuthUser,
};
