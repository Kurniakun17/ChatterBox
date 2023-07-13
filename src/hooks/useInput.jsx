import { useState } from 'react';

export const useInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);

  const onChangeHandler = ({ target }) => {
    setValue(target.value);
  };

  const onDivChangeHandler = ({ target }) => {
    setValue(target.innerHTML);
  };

  return [value];
};
