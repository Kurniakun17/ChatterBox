import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const Header = ({ name }) => {
  name = null;
  return (
    <div className="flex justify-between my-6 w-[90%] max-w-[500px] mx-auto">
      <div>
        {name ? (
          <h2 className="font-bold text-2xl dark:text-white">Hi, {name}</h2>
        ) : (
          <h2 className="font-bold text-2xl dark:text-white">Hi, Guest</h2>
        )}
        <p className="text-bodyTextLight dark:text-bodyTextDark">
          {name ? "Find topics that you want to read" : "Please login if you want to interact with the thread"}
        </p>
      </div>
      <button className="dark:text-white">
        <FontAwesomeIcon size="xl" icon={faSearch} />
      </button>
    </div>
  );
};
