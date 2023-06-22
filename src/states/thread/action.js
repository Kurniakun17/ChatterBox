export const ActionType = {
  RECEIVED_THREAD: 'RECEIVED_THREAD',
};

export const receivedThreadActionCreator = (thread) => {
  return {
    type: ActionType.RECEIVED_THREAD,
    payload: {
      thread,
    },
  };
};
