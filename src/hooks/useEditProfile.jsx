import { useState } from 'react';

const useEditInputChange = (initialState, validatedValue) => {
  const [editInputValue, setEditInputValue] = useState(initialState);

  const isValidValue = validatedValue(editInputValue);
  const hasError = !isValidValue;

  const handleEditInputChange = (event) => {
    setEditInputValue(event.target.value);
  };

  return {
    editInputValue,
    handleEditInputChange,
    hasError,
  };
};

export default useEditInputChange;
