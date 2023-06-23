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
      const res = await APIRegister({name, email, password});
      console.log(res);
    } catch (error) {
      return error;
    }
  };
}

export { ActionType, receiveUsersActionCreator, asyncRegisterUser };
