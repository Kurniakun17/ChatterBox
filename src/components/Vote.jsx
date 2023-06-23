import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  asyncDownVoteDetailThread,
  asyncUpVoteDetailThread,
} from '../states/detailThread/action';

export const Vote = ({ isUpVote, isDownVote, score, threadId, type }) => {
  const dispatch = useDispatch();

  const toggleVote = (type) => {
    if (type === 'UPVOTE_CLICK') {
      return dispatch(asyncUpVoteDetailThread({ threadId }));
    }
    dispatch(asyncDownVoteDetailThread({ threadId }));
  };

  return (
    <div className="flex items-center justify-center gap-2 ">
      <button
        aria-label="up vote"
        onClick={() => {
          toggleVote('UPVOTE_CLICK');
        }}
      >
        <FontAwesomeIcon
          className={`text-bodyTextLight dark:text-bodyTextDark ${
            isUpVote && '!text-accentDark'
          }`}
          icon={faChevronUp}
        />
      </button>
      <h4 className="text-bodyTextLight dark:text-bodyTextDark">{score}</h4>
      <button
        aria-label="down vote"
        onClick={() => {
          toggleVote('DOWNVOTE_CLICK');
        }}
      >
        <FontAwesomeIcon
          className={`text-bodyTextLight dark:text-bodyTextDark ${
            isDownVote && '!text-accentDark'
          }`}
          icon={faChevronDown}
        />
      </button>
    </div>
  );
};