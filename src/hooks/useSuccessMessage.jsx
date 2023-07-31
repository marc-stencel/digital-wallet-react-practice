const useSuccessMessage = (formValue) => {
  let isShowMessage = false;

  if (localStorage.getItem('form') === formValue) {
    isShowMessage = true;
    setTimeout(() => {
      localStorage.removeItem('form');
    }, 100);
  }

  return isShowMessage;
};

export default useSuccessMessage;
