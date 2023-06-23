import { APIgetThread, APIgetUsers } from '../../utils/api';
import { receiveThreadActionCreator } from '../thread/action';
import { receiveUsersActionCreator } from '../users/action';

const asyncPopulateThreadAndUsers = () => {
  return async (dispatch) => {
    try {
      const thread = await APIgetThread();
      const users = await APIgetUsers();

      dispatch(receiveThreadActionCreator(thread));
      dispatch(receiveUsersActionCreator(users));
    } catch (error) {
      return error.respond;
    }
  };
};

export { asyncPopulateThreadAndUsers };
