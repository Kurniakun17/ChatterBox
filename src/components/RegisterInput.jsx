import React from 'react';
import { useInput } from '../hooks/useInput';

export const RegisterInput = () => {
  const [name, setName] = useInput();
  const [email, setEmail] = useInput();
  const [password, setPassword] = useInput();

  return (
    <div className="flex flex-col gap-3">
      <input
        value={name}
        onChange={(e) => {
          setName(e);
        }}
        type="text"
        placeholder="NAME"
        className="bg-thirdElevationLight font-bold placeholder:font-bold dark:bg-thirdElevationDark w-full rounded-xl p-3 text-sm"
      />
      <input
        value={email}
        onChange={(e) => {
          setEmail(e);
        }}
        type="text"
        placeholder="EMAIL"
        className="bg-thirdElevationLight font-bold placeholder:font-bold dark:bg-thirdElevationDark w-full rounded-xl p-3 text-sm"
      />
      <input
        value={password}
        onChange={(e) => {
          setPassword(e);
        }}
        type="password"
        placeholder="PASSWORD"
        className="bg-thirdElevationLight font-bold placeholder:font-bold dark:bg-thirdElevationDark w-full rounded-xl p-3 text-sm"
      />
    </div>
  );
};
