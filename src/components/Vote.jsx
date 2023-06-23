import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { APIdownVoteThread } from '../utils/api';

export const Vote = ({ isUpVote, isDownVote, score, threadId, type }) => {
  const [voteState, toggleVote] = useVote({
    isUpVote,
    isDownVote,
    threadId,
    type,
  });

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
      <h4 className="text-bodyTextLight dark:text-bodyTextDark">{score}</h4>
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

const useVote = ({ isUpVote, isDownVote, threadId, type }) => {
  const [voteState, setVoteState] = useState(null);

  useEffect(() => {
    if (isUpVote) setVoteState('upvote');
    if (isDownVote) setVoteState('downvote');
  }, []);

  const toggleVote = (action) => {
    if (action === 'UPVOTE_CLICK') {
      if (voteState === 'downvote' || voteState === null) {
        setVoteState('upvote');
      }
      APIdownVoteThread({ threadId });
      voteState === 'upvote' && setVoteState(null);
      return;
    }
    (voteState === 'upvote' || voteState === null) && setVoteState('downvote');
    voteState === 'downvote' && setVoteState(null);
    apiDown;
  };

  return [voteState, toggleVote, setVoteState];
};
