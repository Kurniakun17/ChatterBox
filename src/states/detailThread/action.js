import { hideLoading, showLoading } from 'react-redux-loading-bar';
import {
  APIgetDetailThread,
  APIupVoteThread,
  APIdownVoteThread,
  APIneutralizeVoteThread,
  APIneutralizeVoteComment,
  APIdownVoteComment,
  APIupVoteComment,
  APIaddComment,
} from '../../utils/api';

const ActionType = {
  RECEIVE_DETAIL_THREAD: 'RECEIVE_DETAIL_THREAD',
  UPVOTE_DETAIL_THREAD: 'UPVOTE_DETAIL_THREAD',
  DOWNVOTE_DETAIL_THREAD: 'DOWNVOTE_DETAIL_THREAD',
  UPVOTE_COMMENT: 'UPVOTE_COMMENT',
  DOWNVOTE_COMMENT: 'DOWNVOTE_COMMENT',
  ADD_COMMENT: 'ADD_COMMENT',
};

const receiveDetailThreadActionCreator = (detailThread) => ({
  type: ActionType.RECEIVE_DETAIL_THREAD,
  payload: {
    detailThread,
  },
});

const upVoteDetailThreadActionCreator = ({ userId }) => ({
  type: ActionType.UPVOTE_DETAIL_THREAD,
  payload: {
    userId,
  },
});

const downVoteDetailThreadActionCreator = ({ userId }) => ({
  type: ActionType.DOWNVOTE_DETAIL_THREAD,
  payload: {
    userId,
  },
});

const upVoteCommentActionCreator = ({ userId, commentId }) => ({
  type: ActionType.UPVOTE_COMMENT,
  payload: {
    userId,
    commentId,
  },
});

const downVoteCommentActionCreator = ({ userId, commentId }) => ({
  type: ActionType.DOWNVOTE_COMMENT,
  payload: {
    userId,
    commentId,
  },
});

const addCommentActionCreator = ({ comment }) => ({
  type: ActionType.ADD_COMMENT,
  payload: {
    comment,
  },
});

const asyncReceiveDetailThread = ({ id }) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const detailThread = await APIgetDetailThread({ id });
    dispatch(receiveDetailThreadActionCreator(detailThread));
  } catch (error) {
    return {};
  }
  dispatch(hideLoading());
};

const asyncUpVoteDetailThread = ({ threadId }) => async (dispatch, getState) => {
  dispatch(showLoading());
  try {
    const { authUser, detailThread } = getState();
    dispatch(
      upVoteDetailThreadActionCreator({ userId: authUser.id }),
    );

    if (detailThread.upVotesBy.includes(authUser.id)) {
      await APIneutralizeVoteThread({ threadId });
    } else {
      await APIupVoteThread({ threadId });
    }
  } catch (error) {
    dispatch(hideLoading());
    return { ...error.respond };
  }
  dispatch(hideLoading());
};

const asyncDownVoteDetailThread = ({ threadId }) => async (dispatch, getState) => {
  dispatch(showLoading());
  try {
    const { authUser, detailThread } = getState();
    dispatch(
      downVoteDetailThreadActionCreator({ userId: authUser.id }),
    );

    if (detailThread.downVotesBy.includes(authUser.id)) {
      await APIneutralizeVoteThread({ threadId });
    } else {
      await APIdownVoteThread({ threadId });
    }
  } catch (error) {
    dispatch(hideLoading());
    return { ...error.respond };
  }
  dispatch(hideLoading());
};

const asyncUpVoteComment = ({ threadId, commentId }) => async (dispatch, getState) => {
  dispatch(showLoading());
  try {
    const { authUser, detailThread } = getState();
    const comment = detailThread.comments.filter(
      (commentItem) => commentItem.id === commentId,
    )[0];
    dispatch(upVoteCommentActionCreator({ userId: authUser.id, commentId }));

    if (comment.upVotesBy.includes(authUser.id)) {
      await APIneutralizeVoteComment({ threadId, commentId });
    } else {
      await APIupVoteComment({ threadId, commentId });
    }
  } catch (error) {
    dispatch(hideLoading());
    return { ...error.respond };
  }
  dispatch(hideLoading());
};

const asyncDownVoteComment = ({ threadId, commentId }) => async (dispatch, getState) => {
  dispatch(showLoading());
  try {
    const { authUser, detailThread } = getState();
    const comment = detailThread.comments.filter(
      (commentItem) => commentItem.id === commentId
    )[0];
    dispatch(
      downVoteCommentActionCreator({
        userId: authUser.id,
        commentId,
      })
    );

    if (comment.downVotesBy.includes(authUser.id)) {
      await APIneutralizeVoteComment({ threadId, commentId });
    } else {
      await APIdownVoteComment({ threadId, commentId });
    }
  } catch (error) {
    dispatch(hideLoading());
    return { ...error.respond };
  }
  dispatch(hideLoading());
};

const asyncAddComment = ({ threadId, content }) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const { comment } = await APIaddComment({ threadId, content });
    dispatch(addCommentActionCreator({ comment }));
  } catch (error) {
    dispatch(hideLoading());
    return { ...error.respond };
  }
  dispatch(hideLoading());
};

export {
  ActionType,
  asyncReceiveDetailThread,
  asyncUpVoteDetailThread,
  asyncDownVoteDetailThread,
  asyncUpVoteComment,
  asyncDownVoteComment,
  asyncAddComment,
};
