import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const Header = ({ name }) => {
  return (
    <div className="flex justify-between my-6 w-[90%] max-w-[500px] mx-auto">
      <div>
        <h2 className="font-bold text-2xl dark:text-white">Hi, {name}</h2>
        <p className="text-bodyTextLight dark:text-bodyTextDark">
          Find topics that you want to read
        </p>
      </div>
      <button className="dark:text-white">
        <FontAwesomeIcon size="xl" icon={faSearch} />
      </button>
    </div>
  );
};
