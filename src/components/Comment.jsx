import React from 'react';
import { Vote } from './Vote';

export const Comment = ({ author, createdAt, body, vote }) => {
  return (
    <div className="flex flex-col gap-2 p-4 bg-secondElevationLight dark:bg-secondElevationDark rounded-xl">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <img src="/pfp.webp" alt="" className="w-6 h-6 rounded-full" />
          <h4 className="font-bold text-bodyTextLight dark:text-bodyTextDark">
            {author}
          </h4>
        </div>
        <h4 className="block ml-3 box-content text-bodyTextLight dark:text-bodyTextDark">
          {createdAt}
        </h4>
      </div>
      <p className={`text-bodyTextLight dark:text-bodyTextDark`}>{body}</p>
      <div className="flex items-center justify-between">
        <Vote vote={vote} />
        <button className="text-bodyTextLight dark:text-bodyTextDark font-bold">
          Reply
        </button>
      </div>
    </div>
  );
};
