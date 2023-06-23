import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
  const [theme, setTheme, toggleTheme] = useTheme();
  const name = '';

  const onLogoutHandler = () => {};

  const onLoginHandler = () => {};

  return (
    <div className="w-full flex items-center justify-between bg-transparent px-6 py-4 border-b-[1px] border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)]">
      <Link to="/home" className="text-white text-3xl font-bold logo-small">
        ChatterBox
      </Link>
      <div className="flex gap-4">
        <button onClick={toggleTheme}>
          {theme === 'light' ? (
            <FontAwesomeIcon
              className="text-bodyTextLight"
              size="xl"
              icon={faMoon}
            />
          ) : (
            <FontAwesomeIcon
              className="text-bodyTextDark"
              size="xl"
              icon={faSun}
            />
          )}
        </button>
        {name ? (
          <button
            className="dark:text-white underline p-2"
            onClick={onLogoutHandler}
          >
            <Link to={'/login'}>LOGOUT</Link>
          </button>
        ) : (
          <button
            className="dark:text-white underline p-2"
            onClick={onLoginHandler}
          >
            <Link to={'/login'}>LOGIN</Link>
          </button>
        )}
      </div>
    </div>
  );
};
