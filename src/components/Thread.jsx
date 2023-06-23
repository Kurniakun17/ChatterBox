import React from 'react';
import { Vote } from './Vote';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import TimeAgo from 'timeago-react';
import parser from 'html-react-parser';

export const Thread = ({
  id,
  title,
  createdAt,
  body,
  author,
  totalComments,
  clamp,
  score,
  isUpVote,
  isDownVote,
}) => {
  
  return (
    <div className="flex flex-col gap-2 p-4 bg-secondElevationLight dark:bg-secondElevationDark rounded-xl">
      <Link to={`/thread/${id}`}>
        <div className="flex justify-between">
          <h3 className="text-lg font-bold text-primaryDark dark:text-white pr-2">
            {title}
          </h3>
          <h4 className="block ml-3 box-content text-bodyTextLight dark:text-bodyTextDark">
            <TimeAgo datetime={createdAt} />
          </h4>
        </div>
        <span
          className={`${
            clamp && 'line-clamp-3 xl:line-clamp-6'
          } text-bodyTextLight dark:text-bodyTextDark`}
        >
          {parser(body)}
        </span>
      </Link>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              className="text-bodyTextLight dark:text-bodyTextDark"
              icon={faComment}
            />
            <h4 className="text-bodyTextLight dark:text-bodyTextDark">
              {totalComments}
            </h4>
          </div>
          
          <Vote
            threadId={id}
            isUpVote={isUpVote}
            isDownVote={isDownVote}
            score={score}
          />
        </div>
        <div className="flex gap-2">
          <img src={author.avatar} alt="" className="w-6 h-6 rounded-full" />
          <h4 className="font-bold text-bodyTextLight dark:text-bodyTextDark">
            {author.name}
          </h4>
        </div>
      </div>
    </div>
  );
};
