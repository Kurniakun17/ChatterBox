import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { API } from '../../utils/api';

export const ActionType = {
  RECEIVED_THREADS: 'RECEIVED_THREADS',
  UPVOTE_THREAD: 'UPVOTE_THREAD',
  DOWNVOTE_THREAD: 'DOWNVOTE_THREAD',
  ADD_THREAD: 'ADD_THREAD',
};

export const receiveThreadsActionCreator = ({ threads }) => ({
  type: ActionType.RECEIVED_THREADS,
  payload: {
    threads,
  },
});

const upVoteThreadActionCreator = ({ threadId, userId }) => ({
  type: ActionType.UPVOTE_THREAD,
  payload: {
    threadId,
    userId,
  },
});

const downVoteThreadActionCreator = ({ threadId, userId }) => ({
  type: ActionType.DOWNVOTE_THREAD,
  payload: {
    threadId,
    userId,
  },
});

const addThreadActionCreator = ({ threads }) => ({
  type: ActionType.ADD_THREAD,
  payload: {
    threads,
  },
});

export const asyncUpVoteThread = ({ threadId }) => async (dispatch, getState) => {
  try {
    const { authUser, threads } = getState();
    const thread = threads.filter(
      (threadItem) => threadItem.id === threadId
    )[0];
    dispatch(upVoteThreadActionCreator({ threadId, userId: authUser.id }));

    if (thread.upVotesBy.includes(authUser.id)) {
      return await API.neutralizeVoteThread({ threadId });
    }
    await API.upVoteThread({ threadId });
  } catch (error) {
    return { ...error.respond };
  }
};

export const asyncDownVoteThread = ({ threadId }) => async (dispatch, getState) => {
  try {
    dispatch(showLoading());
    const { authUser, threads } = getState();
    const thread = threads.filter(
      (threadItem) => threadItem.id === threadId
    )[0];
    dispatch(downVoteThreadActionCreator({ threadId, userId: authUser.id }));

    if (thread.downVotesBy.includes(authUser.id)) {
      await API.neutralizeVoteThread({ threadId });
    } else {
      await API.downVoteThread({ threadId });
    }
  } catch (error) {
    dispatch(hideLoading());
    return { ...error.respond };
  }
  dispatch(hideLoading());
};

export const asyncAddThread = ({ title, body, category }) => async (dispatch) => {
  dispatch(showLoading());
  const threads = await API.addThread({ title, body, category });

  dispatch(addThreadActionCreator({ threads }));
  dispatch(hideLoading());
};
