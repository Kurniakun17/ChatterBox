import React, { useEffect } from 'react';
import { LatestThread } from '../components/LatestThread';
import { Header } from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { asyncPopulateThreadAndUsers } from '../states/shared/action';

export const Home = ({ authUser }) => {
  const users = useSelector((state) => state.users);
  const threads = useSelector((state) => state.threads);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncPopulateThreadAndUsers());
  }, []);

  return (
    <>
      <div className="flex flex-col gap-4 ">
        <Header name={authUser.name} />
        <div className="border-t-2 border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)] rounded-t-3xl py-4">
          <LatestThread users={users} authUser={authUser} threads={threads} />
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
};
