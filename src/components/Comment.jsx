import React from 'react';
import { Vote } from './Vote';
import parser from 'html-react-parser';
import TimeAgo from 'timeago-react';

export const Comment = ({ createdAt, content, score, owner }) => {
  return (
    <div className="flex flex-col gap-2 p-4 bg-secondElevationLight dark:bg-secondElevationDark rounded-xl">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <img
            src={`${owner.avatar}`}
            alt=""
            className="w-6 h-6 rounded-full"
          />
          <h4 className="font-bold text-bodyTextLight dark:text-bodyTextDark">
            {owner.name}
          </h4>
        </div>
        <h4 className="block ml-3 box-content text-bodyTextLight dark:text-bodyTextDark">
          <TimeAgo datetime={createdAt} />
        </h4>
      </div>
      <p className={`text-bodyTextLight dark:text-bodyTextDark`}>
        {parser(content)}
      </p>
      <div className="flex items-center justify-between">
        <Vote score={score} />
        <button className="text-bodyTextLight dark:text-bodyTextDark font-bold">
          Reply
        </button>
      </div>
    </div>
  );
};
