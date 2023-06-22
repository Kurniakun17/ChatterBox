import React, { useState } from 'react';

export const useInput = () => {
  const [value, setValue] = useState('');

  const onChangeHandler = ({ target }) => {
    setValue(target.value);
  };

  return [value, onChangeHandler];
};
