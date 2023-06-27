import { ActionType } from './action';

const detailThreadReducer = (thread = {}, action = {}) => {
  let userId;
  let commentId;
  switch (action.type) {
    case ActionType.RECEIVE_DETAIL_THREAD:
      return action.payload.detailThread;
    case ActionType.UPVOTE_DETAIL_THREAD:
      userId = action.payload.userId;
      return {
        ...thread,
        upVotesBy: thread.upVotesBy.includes(userId)
          ? thread.upVotesBy.filter((id) => id !== userId)
          : thread.upVotesBy.concat([userId]),
        downVotesBy: thread.downVotesBy.includes(userId)
          ? thread.downVotesBy.filter((id) => id !== userId)
          : thread.downVotesBy,
      };
    case ActionType.DOWNVOTE_DETAIL_THREAD:
      userId = action.payload.userId;
      return {
        ...thread,
        downVotesBy: thread.downVotesBy.includes(userId)
          ? thread.downVotesBy.filter((id) => id !== userId)
          : thread.downVotesBy.concat([userId]),
        upVotesBy: thread.upVotesBy.includes(userId)
          ? thread.upVotesBy.filter((id) => id !== userId)
          : thread.upVotesBy,
      };
    case ActionType.UPVOTE_COMMENT:
      userId = action.payload.userId;
      commentId = action.payload.commentId;

      return {
        ...thread,
        comments: thread.comments.map((comment) => {
          if (comment.id === commentId) {
            return {
              ...comment,
              upVotesBy: comment.upVotesBy.includes(userId)
                ? comment.upVotesBy.filter((id) => id !== userId)
                : comment.upVotesBy.concat([userId]),
              downVotesBy: comment.downVotesBy.includes(userId)
                ? comment.downVotesBy.filter((id) => id !== userId)
                : comment.downVotesBy,
            };
          }
          return comment;
        }),
      };
    case ActionType.DOWNVOTE_COMMENT:
      userId = action.payload.userId;
      commentId = action.payload.commentId;
      return {
        ...thread,
        comments: thread.comments.map((comment) => {
          if (comment.id === commentId) {
            return {
              ...comment,
              downVotesBy: comment.downVotesBy.includes(userId)
                ? comment.downVotesBy.filter((id) => id !== userId)
                : comment.downVotesBy.concat([userId]),
              upVotesBy: comment.upVotesBy.includes(userId)
                ? comment.upVotesBy.filter((id) => id !== userId)
                : comment.upVotesBy,
            };
          }
          return comment;
        }),
      };
    case ActionType.ADD_COMMENT:
      return {
        ...thread,
        comments: [...thread.comments, action.payload.comment],
      };
    default:
      return thread;
  }
};

export default detailThreadReducer;
