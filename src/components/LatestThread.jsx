import React from 'react';
import { Thread } from './Thread';

export function LatestThread({ authUser, users, threads }) {
  return (
    <div className="flex flex-col gap-3 w-[90%] max-w-[500px] xl:max-w-[800px] m-auto  ">
      <h2 className="font-bold dark:text-white text-2xl">Latest Thread</h2>
      <div className="flex flex-col gap-3">
        {threads.length === 0 ? (
          <div className="flex gap-2 justify-center md:gap-4 bg-secondElevationDark p-3 rounded-xl">
            <h3 className="dark:text-primaryLight font-bold">
              Thread is Empty :)
            </h3>
          </div>
        ) : (
          threads.map((thread) => (
            <Thread
              key={`thread-${thread.id}`}
              id={thread.id}
              title={thread.title}
              createdAt={thread.createdAt}
              body={thread.body}
              score={thread.upVotesBy.length - thread.downVotesBy.length}
              author={users.filter((user) => user.id === thread.ownerId)[0]}
              totalComments={thread.totalComments}
              clamp
              isUpVote={thread.upVotesBy.includes(authUser.id)}
              isDownVote={thread.downVotesBy.includes(authUser.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}
