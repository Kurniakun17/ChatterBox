import React from 'react';
import { Vote } from './Vote';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

export const Thread = ({
  id,
  title,
  createdAt,
  body,
  vote,
  author,
  totalComments,
  clamp,
}) => {
  return (
    <div className="flex flex-col gap-2 p-4 bg-secondElevationLight dark:bg-secondElevationDark rounded-xl">
      <Link to={`/thread/${id}`}>
        <div className="flex justify-between">
          <h3 className="text-lg font-bold text-primaryDark dark:text-white">
            {title}
          </h3>
          <h4 className="block ml-3 box-content text-bodyTextLight dark:text-bodyTextDark">
            {createdAt}
          </h4>
        </div>
        <p
          className={`${
            clamp && 'line-clamp-3'
          } text-bodyTextLight dark:text-bodyTextDark`}
        >
          {body}
        </p>
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
          <Vote vote={vote} />
        </div>
        <div className="flex gap-2">
          <img src="/pfp.webp" alt="" className="w-6 h-6 rounded-full" />
          <h4 className="font-bold text-bodyTextLight dark:text-bodyTextDark">
            {author}
          </h4>
        </div>
      </div>
    </div>
  );
};
