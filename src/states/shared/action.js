import { API } from '../../utils/api';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';

const asyncPopulateThreadAndUsers = () => async (dispatch) => {
  try {
    const threads = await API.getThread();
    const users = await API.getUsers();

    dispatch(receiveThreadsActionCreator({ threads }));
    dispatch(receiveUsersActionCreator({ users }));
  } catch (error) {
    alert(error.respond);
    return 'hai';
  }
};

export default asyncPopulateThreadAndUsers;
