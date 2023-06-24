import React from 'react';
import { useInput } from '../hooks/useInput';

export function LoginInput({ onLoginHandler }) {
  const [email, setEmail] = useInput();
  const [password, setPassword] = useInput();

  return (
    <>
      <div className="flex flex-col gap-3">
        <input
          className="bg-thirdElevationLight placeholder:font-bold font-bold  dark:bg-thirdElevationDark w-full rounded-xl p-3 text-sm md:text-base dark:text-primaryLight"
          value={email}
          onChange={(e) => {
            setEmail(e);
          }}
          type="text"
          placeholder="EMAIL"
        />
        <input
          className="bg-thirdElevationLight placeholder:font-bold font-bold  dark:bg-thirdElevationDark w-full rounded-xl p-3 text-sm md:text-base dark:text-primaryLight"
          value={password}
          onChange={(e) => {
            setPassword(e);
          }}
          type="password"
          placeholder="PASSWORD"
        />
      </div>
      <button
        onClick={() => {
          onLoginHandler(email, password);
        }}
        className="bg-accentLight dark:bg-accentLight text-white w-full rounded-3xl p-2 font-bold"
      >
        LOG IN
      </button>
    </>
  );
}
