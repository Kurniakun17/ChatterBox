import {
  faChevronDown,
  faChevronUp,
  faDownLong,
  faUpLong,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const Vote = ({ vote }) => {
  return (
    <div className="flex items-center justify-center gap-2 ">
      <button aria-label="up vote">
        <FontAwesomeIcon
          className="text-bodyTextLight dark:text-bodyTextDark "
          icon={faChevronUp}
        />
      </button>
      <h4 className="text-bodyTextLight dark:text-bodyTextDark">{vote}</h4>
      <button aria-label="down vote">
        <FontAwesomeIcon
          className="text-bodyTextLight dark:text-bodyTextDark"
          icon={faChevronDown}
        />
      </button>
    </div>
  );
};
