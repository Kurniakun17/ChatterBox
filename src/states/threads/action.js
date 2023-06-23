import {
  APIdownVoteThread,
  APIneutralizeVoteThread,
  APIupVoteThread,
} from '../../utils/api';

export const ActionType = {
  RECEIVED_THREADS: 'RECEIVED_THREADS',
  UPVOTE_THREAD: 'UPVOTE_THREAD',
  DOWNVOTE_THREAD: 'DOWNVOTE_THREAD',
};

export const receiveThreadsActionCreator = ({ threads }) => {
  return {
    type: ActionType.RECEIVED_THREADS,
    payload: {
      threads,
    },
  };
};

const upVoteThreadActionCreator = ({ threadId, userId }) => {
  return {
    type: ActionType.UPVOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
};

const downVoteThreadActionCreator = ({ threadId, userId }) => {
  return {
    type: ActionType.DOWNVOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
};

export const asyncUpVoteThread = ({ threadId }) => {
  return async (dispatch, getState) => {
    try {
      const { authUser, threads } = getState();
      const thread = threads.filter((thread) => thread.id === threadId)[0];
      dispatch(upVoteThreadActionCreator({ threadId, userId: authUser.id }));

      if (thread.upVotesBy.includes(authUser.id)) {
        return await APIneutralizeVoteThread({ threadId });
      }
      await APIupVoteThread({ threadId });
    } catch (error) {
      console.log(error.respond);
      return {};
    }
  };
};

export const asyncDownVoteThread = ({ threadId }) => {
  try {
    return async (dispatch, getState) => {
      const { authUser, threads } = getState();
      const thread = threads.filter((thread) => thread.id === threadId)[0];
      dispatch(downVoteThreadActionCreator({ threadId, userId: authUser.id }));

      if (thread.downVotesBy.includes(authUser.id)) {
        return await APIneutralizeVoteThread({ threadId });
      }
      await APIdownVoteThread({ threadId });
    };
  } catch (error) {
    console.log(error.respond);
    return {};
  }
};
