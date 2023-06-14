export const emailValidation = (value) => {
  if (
    value.trim().length >= 6 &&
    value.includes('@') &&
    !value.at(-1).includes('@') &&
    !value.includes(' ')
  ) {
    return true;
  }
  return false;
};

export const nameValidation = (value) => {
  if (value.trim().length >= 2) return true;
  return false;
};

export const passwordValidation = (value) => {
  if (value.trim().length >= 6 && !value.includes(' ')) {
    return true;
  }
  return false;
};

