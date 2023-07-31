import { useState } from 'react';

const useToggleForm = () => {
  const [isShowForm, setIsShowForm] = useState(false);

  const handleToggleForm = () => {
    setIsShowForm(!isShowForm);
  };

  return {
    isShowForm,
    handleToggleForm,
  };
};

export default useToggleForm;
