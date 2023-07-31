export const formValidation = (...validatedValues) =>
  validatedValues.every((value) => !value);
