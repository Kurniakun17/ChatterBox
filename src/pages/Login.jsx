import React from 'react';
import { LoginInput } from '../components/LoginInput';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncSetAuthUser } from '../states/authUser/action';

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLoginHandler = (email, password) => {
    dispatch(asyncSetAuthUser({ email, password }));
    navigate('/home');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-5xl font-bold text-white logo">ChatterBox</h1>
      <div className="w-[90%] max-w-[400px] flex flex-col gap-4 bg-secondElevationLight dark:bg-secondElevationDark p-6 rounded-2xl">
        <LoginInput onLoginHandler={onLoginHandler}></LoginInput>
      </div>
      <p className="mt-4 dark:text-white">
        Didn't have an account yet?{' '}
        <Link
          className="text-accentLight font-bold underline decoration-solid"
          to="/register"
        >
          Register
        </Link>
      </p>
    </div>
  );
};
