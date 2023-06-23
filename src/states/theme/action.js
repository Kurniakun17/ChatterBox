export const ActionType = {
  CHANGE_THEME: 'CHANGE_THEME',
};

export const changeThemeActionCreator = (theme) => {
  return {
    type: ActionType.CHANGE_THEME,
    payload: {
      theme,
    },
  };
};

export const getThemeFromLS = () => {
  return localStorage.getItem('theme') || 'dark';
};
