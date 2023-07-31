import { useState } from 'react';

const useToggleSwitch = (initialState) => {
  const actualState = initialState === 'on' ? true : false;

  const [isChecked, setIsChecked] = useState(actualState);

  const handleToggleSwitch = (checkBoxValue) => {
    setIsChecked(checkBoxValue);
  };

  return {
    isChecked,
    handleToggleSwitch,
  };
};

export default useToggleSwitch;
