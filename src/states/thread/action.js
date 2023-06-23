export const ActionType = {
  RECEIVED_THREAD: 'RECEIVED_THREAD',
};

export const receiveThreadActionCreator = (thread) => {
  return {
    type: ActionType.RECEIVED_THREAD,
    payload: {
      thread,
    },
  };
};


