import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import {
  asyncUnsetAuthUser,
  unsetAuthUserActionCreator,
} from '../states/authUser/action';
import { changeThemeActionCreator } from '../states/theme/action';

export function Navbar({ name, theme }) {
  const dispatch = useDispatch();

  const onLogoutHandler = () => {
    dispatch(asyncUnsetAuthUser(unsetAuthUserActionCreator()));
  };

  const toggleTheme = () => {
    dispatch(changeThemeActionCreator(theme));
  };

  return (
    <div className="w-full flex items-center justify-between bg-transparent px-6 py-4 lg:px-12 border-b-[1px] border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)]">
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
            LOGOUT
          </button>
        ) : (
          <button className="dark:text-white underline p-2">
            <Link to="/login">LOGIN</Link>
          </button>
        )}
      </div>
    </div>
  );
}
