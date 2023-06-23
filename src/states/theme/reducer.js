import { ActionType, getThemeFromLS } from './action';

export const themeReducer = (theme = getThemeFromLS(), action = {}) => {
  switch (action.type) {
    case ActionType.CHANGE_THEME:
      if (action.payload.theme === 'light') {
        document.getElementById('root').classList.add('dark');
        localStorage.setItem('theme', 'dark');
        return 'dark';
      }
      document.getElementById('root').classList.remove('dark');
      localStorage.setItem('theme', 'light');
      return 'light';
    default:
      if (theme === 'dark') {
        document.getElementById('root').classList.add('dark');
      }
      return theme;
  }
};
