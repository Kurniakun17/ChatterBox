import { ActionType } from './action';

const detailThreadReducer = (thread = {}, action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_DETAIL_THREAD:
      return action.payload.detailThread;
    default:
      return thread;
  }
};

export default detailThreadReducer;
