import React from 'react';
import { Thread } from './Thread';

export const LatestThread = ({ authUser, users, threads }) => {
  return (
    <div className="flex flex-col gap-3 w-[90%] max-w-[500px] xl:max-w-[800px] m-auto  ">
      <h2 className="font-bold dark:text-white text-2xl">Latest Thread</h2>
      <div className="flex flex-col gap-3">
        {threads.map((thread, index) => {
          return (
            <Thread
              key={`thread-${index}`}
              id={thread.id}
              title={thread.title}
              createdAt={thread.createdAt}
              body={thread.body}
              score={thread.upVotesBy.length - thread.downVotesBy.length}
              author={users.filter((user) => user.id === thread.ownerId)[0]}
              totalComments={thread.totalComments}
              clamp={true}
              isUpVote={thread.upVotesBy.includes(authUser.id)}
              isDownVote={thread.downVotesBy.includes(authUser.id)}
            />
          );
        })}
      </div>
    </div>
  );
};
