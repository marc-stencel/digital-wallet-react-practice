export const basicValidation = (value) => {
  if (value.trim().length <= 20) return true;
  return false;
};

export const emailValidation = (value) => {
  if (
    value.trim().length >= 6 &&
    value.trim().length <= 30 &&
    value.includes('@') &&
    !value.at(-1).includes('@') &&
    !value.includes(' ')
  ) {
    return true;
  }
  return false;
};

export const nameValidation = (value) => {
  if (
    value.trim().length >= 2 &&
    value.trim().length <= 12 &&
    !value.includes(' ')
  )
    return true;
  return false;
};

export const surnameValidation = (value) => {
  if (
    value.trim().length >= 2 &&
    value.trim().length <= 20 &&
    !value.includes(' ')
  )
    return true;
  return false;
};

export const passwordValidation = (value) => {
  if (value.trim().length >= 6 && !value.includes(' ')) return true;

  return false;
};
