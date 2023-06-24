import { APIgetThread, APIgetUsers } from '../../utils/api';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';

const asyncPopulateThreadAndUsers = () => async (dispatch) => {
  try {
    const threads = await APIgetThread();
    const users = await APIgetUsers();

    dispatch(receiveThreadsActionCreator({ threads }));
    dispatch(receiveUsersActionCreator({ users }));
  } catch (error) {
    return error.respond;
  }
};

export default asyncPopulateThreadAndUsers;
