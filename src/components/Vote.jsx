import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

export const Vote = ({ vote }) => {
  const [voteState, toggleVote] = useVote();

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
            voteState === 'upvote' && '!text-accentDark'
          }`}
          icon={faChevronUp}
        />
      </button>
      <h4 className="text-bodyTextLight dark:text-bodyTextDark">{vote}</h4>
      <button
        aria-label="down vote"
        onClick={() => {
          toggleVote('DOWNVOTE_CLICK');
        }}
      >
        <FontAwesomeIcon
          className={`text-bodyTextLight dark:text-bodyTextDark ${
            voteState === 'downvote' && '!text-accentDark'
          }`}
          icon={faChevronDown}
        />
      </button>
    </div>
  );
};

const useVote = () => {
  const [voteState, setVoteState] = useState(null);

  const toggleVote = (action) => {
    if (action === 'UPVOTE_CLICK') {
      (voteState === 'downvote' || voteState === null) &&
        setVoteState('upvote');
      voteState === 'upvote' && setVoteState(null);
      return;
    }
    (voteState === 'upvote' || voteState === null) && setVoteState('downvote');
    voteState === 'downvote' && setVoteState(null);
  };

  return [voteState, toggleVote, setVoteState];
};
