import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { NewThreadInput } from '../components/NewThreadInput';
import { asyncAddThread } from '../states/threads/action';

export function NewThread() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onPostHandler = ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }));
    navigate('/home');
  };
  return (
    <div className="mt-8 flex flex-col gap-3 w-[90%] bg-secondElevationLight dark:bg-secondElevationDark rounded-xl text-center p-4 py-6 max-w-[500px] m-auto">
      <h2 className="font-bold text-3xl dark:text-white">New Thread</h2>
      <NewThreadInput onPostHandler={onPostHandler} />
    </div>
  );
}
