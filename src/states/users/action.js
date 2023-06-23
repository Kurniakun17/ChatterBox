import { APIRegister } from '../../utils/api';

const ActionType = {
  RECIEVE_USERS: 'RECIEVE_USERS',
};

const receiveUsersActionCreator = (users) => {
  return {
    type: ActionType.RECIEVE_USERS,
    payload: {
      users,
    },
  };
};

const asyncRegisterUser = ({ name, email, password }) => {
  return async () => {
    try {
      await APIRegister({ name, email, password });
    } catch (error) {
      return error;
    }
  };
};

export { ActionType, receiveUsersActionCreator, asyncRegisterUser };
