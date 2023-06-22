import React, { useState } from 'react';

const getThemeFromLS = () => {
  return localStorage.getItem('theme');
};

export const useTheme = () => {
  const [theme, setTheme] = useState(getThemeFromLS() || 'light');

  const toggleTheme = () => {
    if (theme === 'dark') {
      document.getElementById('root').classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      document.getElementById('root').classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  };

  return [theme, setTheme, toggleTheme];
};
