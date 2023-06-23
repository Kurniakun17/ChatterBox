import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  asyncDownVoteComment,
  asyncDownVoteDetailThread,
  asyncUpVoteComment,
  asyncUpVoteDetailThread,
} from '../states/detailThread/action';
import {
  asyncDownVoteThread,
  asyncUpVoteThread,
} from '../states/threads/action';

export const Vote = ({
  isUpVote,
  isDownVote,
  score,
  threadId,
  commentId = null,
  caller,
}) => {
  const dispatch = useDispatch();

  const toggleVote = (type) => {
    if (type === 'UPVOTE_CLICK') {
      caller === 'DETAIL_THREAD' &&
        dispatch(asyncUpVoteDetailThread({ threadId }));
      caller === 'THREAD' && dispatch(asyncUpVoteThread({ threadId }));
      caller === 'COMMENT' &&
        dispatch(asyncUpVoteComment({ threadId, commentId }));
      return;
    }
    caller === 'DETAIL_THREAD' &&
      dispatch(asyncDownVoteDetailThread({ threadId }));
    caller === 'THREAD' && dispatch(asyncDownVoteThread({ threadId }));
    caller === 'COMMENT' &&
      dispatch(asyncDownVoteComment({ threadId, commentId }));
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
