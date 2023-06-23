import { ActionType } from './action';

const detailThreadReducer = (thread = {}, action = {}) => {
  let userId;
  let newThreadObj;

  switch (action.type) {
    case ActionType.RECEIVE_DETAIL_THREAD:
      return action.payload.detailThread;
    case ActionType.UPVOTE_DETAIL_THREAD:
      userId = action.payload.userId;
      newThreadObj = {
        ...thread,
        upVotesBy: thread.upVotesBy.includes(userId)
          ? thread.upVotesBy.filter((id) => id !== userId)
          : thread.upVotesBy.concat([userId]),
      };

      if (newThreadObj.downVotesBy.includes(userId))
        newThreadObj = {
          ...newThreadObj,
          downVotesBy: newThreadObj.downVotesBy.filter((id) => id !== userId),
        };

      return newThreadObj;
    case ActionType.DOWNVOTE_DETAIL_THREAD:
      userId = action.payload.userId;
      newThreadObj = {
        ...thread,
        downVotesBy: thread.downVotesBy.includes(userId)
          ? thread.downVotesBy.filter((id) => id !== userId)
          : thread.downVotesBy.concat([userId]),
      };

      if (newThreadObj.upVotesBy.includes(userId))
        newThreadObj = {
          ...newThreadObj,
          upVotesBy: newThreadObj.upVotesBy.filter((id) => id !== userId),
        };

      return newThreadObj;
    default:
      return thread;
  }
};

export default detailThreadReducer;
