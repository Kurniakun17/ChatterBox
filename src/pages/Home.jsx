import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../components/Header';
import { LatestThread } from '../components/LatestThread';
import asyncPopulateThreadAndUsers from '../states/shared/action';

export function Home({ authUser }) {
  const users = useSelector((state) => state.users);
  const threads = useSelector((state) => state.threads);
  const navigate = useNavigate();
  const [filteredThread, setFilteredThread] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateThreadAndUsers());
  }, []);

  useEffect(() => {
    setFilteredThread(threads);
  }, [threads]);

  const onFilterThread = (keyword) => {
    // eslint-disable-next-line max-len
    setFilteredThread(threads.filter((thread) => thread.title.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())));
  };

  return (
    <>
      <div className="flex flex-col gap-4 ">
        <Header name={authUser.name} onFilterThread={onFilterThread} />
        <div className="border-t-2 border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)] rounded-t-3xl py-4">
          <LatestThread users={users} authUser={authUser} threads={filteredThread} />
        </div>
      </div>
      <button
        className="fixed bottom-6 right-6 pt-4 pb-3 px-[18px] shadow rounded-full bg-accentDark w-fit"
        aria-label="create thread"
        onClick={() => {
          navigate('/addThread');
        }}
      >
        <FontAwesomeIcon icon={faPlus} size="2x" className="text-white" />
      </button>
    </>
  );
}
