import React from 'react';
import { Thread } from './Thread';

export const LatestThread = ({ users, thread }) => {
  return (
    <div className="flex flex-col gap-3 w-[90%] max-w-[500px] xl:max-w-[800px] m-auto  ">
      <h2 className="font-bold dark:text-white text-2xl">Latest Thread</h2>
      <div className="flex flex-col gap-3">
        {thread.map((thread, index) => {
          return (
            <Thread
              key={`thread-${index}`}
              id={thread.id}
              title={thread.title}
              createdAt={thread.createdAt}
              body={thread.body}
              vote={thread.vote}
              score={thread.upVotesBy.length}
              author={thread.author}
              totalComments={thread.totalComments}
              clamp={true}
              isUpVote={thread.upVotesBy.includes(users.id)}
              isDownVote={thread.downVotesBy.includes(users.id)}
            />
          );
        })}
      </div>
    </div>
  );
};
