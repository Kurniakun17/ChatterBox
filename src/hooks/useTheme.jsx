import React, { useEffect, useState } from 'react';

const getThemeFromLS = () => {
  return localStorage.getItem('theme');
};

export const useTheme = () => {
  const [theme, setTheme] = useState(getThemeFromLS() || 'light');

  useEffect(() => {
    if (theme === 'light') {
      document.getElementById('root').classList.remove('dark');
      return localStorage.setItem('theme', 'light');
    }
    document.getElementById('root').classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, [theme]);

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return [theme, setTheme, toggleTheme];
};
