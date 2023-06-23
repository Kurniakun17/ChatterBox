import { APIgetDetailThread } from '../../utils/api';

const ActionType = {
  RECEIVE_DETAIL_THREAD: 'RECEIVE_DETAIL_THREAD',
};

const receiveDetailThreadActionCreator = (detailThread) => {
  return {
    type: ActionType.RECEIVE_DETAIL_THREAD,
    payload: {
      detailThread,
    },
  };
};

const asyncReceiveDetailThread = ({ id }) => {
  return async (dispatch) => {
    try {
      const detailThread = await APIgetDetailThread({ id });
      dispatch(receiveDetailThreadActionCreator(detailThread));
    } catch (error) {
      return {};
    }
  };
};

export { ActionType, asyncReceiveDetailThread };
