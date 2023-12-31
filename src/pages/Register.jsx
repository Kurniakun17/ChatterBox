import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { RegisterInput } from '../components/RegisterInput';
import { useInput } from '../hooks/useInput';
import { asyncRegisterUser } from '../states/users/action';

export function Register() {
  const [name, setName] = useInput();
  const [email, setEmail] = useInput();
  const [password, setPassword] = useInput();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onRegisterHandler = () => {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-5xl font-bold text-white logo">ChatterBox</h1>
      <div className="w-[90%] max-w-[400px] flex flex-col gap-4 bg-secondElevationLight dark:bg-secondElevationDark p-6 rounded-2xl">
        <RegisterInput
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
        <button
          onClick={onRegisterHandler}
          className="bg-accentLight dark:bg-accentLight text-white w-full rounded-3xl p-2 font-bold"
        >
          REGISTER
        </button>
      </div>
      <p className="mt-4 dark:text-white">
        Didnt have an account yet?
        <Link
          className="text-accentLight font-bold underline decoration-solid"
          to="/login"
        >
          Login
        </Link>
      </p>
    </div>
  );
}
