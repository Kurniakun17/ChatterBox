import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useInput } from '../hooks/useInput';

export function Header({ name, onFilterThread }) {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [search, setSearch] = useInput('');

  const toggleSearch = () => {
    setIsSearchActive((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-3 my-6 w-[90%] max-w-[500px] xl:max-w-[800px] mx-auto">
      <div className="flex justify-between">
        <div>
          {name ? (
            <h2 className="font-bold text-2xl dark:text-white">
              Hi,
              {name}
            </h2>
          ) : (
            <h2 className="font-bold text-2xl dark:text-white">Hi, Guest</h2>
          )}
          <p className="text-bodyTextLight dark:text-bodyTextDark">
            {name
              ? 'Find topics that you want to read'
              : 'Please login if you want to interact with the thread'}
          </p>
        </div>
        <button className="dark:text-white" onClick={toggleSearch}>
          <FontAwesomeIcon size="xl" icon={faSearch} />
        </button>
      </div>
      {isSearchActive && (
        <div className="flex gap-2 md:gap-4 bg-secondElevationDark p-3 rounded-xl">
          <input
            placeholder="Search thread"
            className="bg-thirdElevationLight  dark:text-primaryLight dark:bg-thirdElevationDark w-full rounded-xl p-3 text-sm"
            onChange={(e) => {
              setSearch(e);
              onFilterThread(e.target.value);
            }}
            value={search}
          />
        </div>
      )}
    </div>
  );
}
