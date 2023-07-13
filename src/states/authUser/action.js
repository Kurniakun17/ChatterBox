import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { API, putAccessToken } from '../../utils/api';

const ActionType = {
  SET_AUTH_USER: 'SET_AUTH_USER',
  UNSET_AUTH_USER: 'UNSET_AUTH_USER',
};

const setAuthUserActionCreator = (authUser) => ({
  type: ActionType.SET_AUTH_USER,
  payload: {
    authUser,
  },
});

const unsetAuthUserActionCreator = () => ({
  type: ActionType.SET_AUTH_USER,
  payload: {
    authUser: null,
  },
});

const asyncSetAuthUser = ({ email = '', password = '' }) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const { data, status, message } = await API.Login({ email, password });
    putAccessToken(data.token);

    const authUser = await API.getOwnProfile();
    dispatch(setAuthUserActionCreator(authUser));
    dispatch(hideLoading());
    return { status, message };
  } catch (error) {
    dispatch(hideLoading());
    return error;
  }
};

const asyncUnsetAuthUser = () => (dispatch) => {
  dispatch(showLoading());
  dispatch(unsetAuthUserActionCreator());
  putAccessToken('');
  dispatch(hideLoading());
};

export {
  ActionType,
  asyncSetAuthUser,
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
  asyncUnsetAuthUser,
};
