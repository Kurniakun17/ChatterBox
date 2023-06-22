import { ActionType } from './action';

export default function threadReducer(thread = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVED_THREAD:
      return action.payload.thread;
    default:
      return thread;
  }
}
