import {
  APIgetDetailThread,
  APIupVoteThread,
  APIdownVoteThread,
  APIneutralizeVoteThread,
  APIneutralizeVoteComment,
  APIdownVoteComment,
  APIupVoteComment,
} from '../../utils/api';

const ActionType = {
  RECEIVE_DETAIL_THREAD: 'RECEIVE_DETAIL_THREAD',
  UPVOTE_DETAIL_THREAD: 'UPVOTE_DETAIL_THREAD',
  DOWNVOTE_DETAIL_THREAD: 'DOWNVOTE_DETAIL_THREAD',
  UPVOTE_COMMENT: 'UPVOTE_COMMENT',
  DOWNVOTE_COMMENT: 'DOWNVOTE_COMMENT',
};

const receiveDetailThreadActionCreator = (detailThread) => {
  return {
    type: ActionType.RECEIVE_DETAIL_THREAD,
    payload: {
      detailThread,
    },
  };
};

const upVoteDetailThreadActionCreator = ({ detailThread, userId }) => {
  return {
    type: ActionType.UPVOTE_DETAIL_THREAD,
    payload: {
      detailThread,
      userId,
    },
  };
};

const downVoteDetailThreadActionCreator = ({ detailThread, userId }) => {
  return {
    type: ActionType.DOWNVOTE_DETAIL_THREAD,
    payload: {
      detailThread,
      userId,
    },
  };
};

const upVoteCommentActionCreator = ({ userId, commentId }) => {
  return {
    type: ActionType.UPVOTE_COMMENT,
    payload: {
      userId,
      commentId,
    },
  };
};

const downVoteCommentActionCreator = ({ userId, commentId }) => {
  return {
    type: ActionType.DOWNVOTE_COMMENT,
    payload: {
      userId,
      commentId,
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

const asyncUpVoteDetailThread = ({ threadId }) => {
  return async (dispatch, getState) => {
    try {
      const { authUser, detailThread } = getState();
      dispatch(
        upVoteDetailThreadActionCreator({ threadId, userId: authUser.id })
      );

      if (detailThread.upVotesBy.includes(authUser.id))
        return APIneutralizeVoteThread({ threadId });
      APIupVoteThread({ threadId });
    } catch (error) {
      console.log(error.respond);
      return {};
    }
  };
};

const asyncDownVoteDetailThread = ({ threadId }) => {
  return async (dispatch, getState) => {
    try {
      const { authUser, detailThread } = getState();
      dispatch(
        downVoteDetailThreadActionCreator({ threadId, userId: authUser.id })
      );

      if (detailThread.downVotesBy.includes(authUser.id)) {
        return APIneutralizeVoteThread({ threadId });
      }
      APIdownVoteThread({ threadId });
    } catch (error) {
      console.log(error.respond);
      return {};
    }
  };
};

const asyncUpVoteComment = ({ threadId, commentId }) => {
  return async (dispatch, getState) => {
    try {
      const { authUser, detailThread } = getState();
      const comment = detailThread.comments.filter(
        (comment) => comment.id === commentId
      )[0];
      dispatch(upVoteCommentActionCreator({ userId: authUser.id, commentId }));

      if (comment.upVotesBy.includes(authUser.id))
        return APIneutralizeVoteComment({ threadId, commentId });
      APIupVoteComment({ threadId, commentId });
    } catch (error) {
      console.log(error);
      return {};
    }
  };
};

const asyncDownVoteComment = ({ threadId, commentId }) => {
  return async (dispatch, getState) => {
    try {
      const { authUser, detailThread } = getState();
      const comment = detailThread.comments.filter(
        (comment) => comment.id === commentId
      )[0];
      dispatch(
        downVoteCommentActionCreator({
          userId: authUser.id,
          commentId,
        })
      );

      if (comment.downVotesBy.includes(authUser.id)) {
        return APIneutralizeVoteComment({ threadId, commentId });
      }
      APIdownVoteComment({ threadId, commentId });
    } catch (error) {
      console.log(error.respond);
      return {};
    }
  };
};

export {
  ActionType,
  asyncReceiveDetailThread,
  asyncUpVoteDetailThread,
  asyncDownVoteDetailThread,
  asyncUpVoteComment,
  asyncDownVoteComment,
};
