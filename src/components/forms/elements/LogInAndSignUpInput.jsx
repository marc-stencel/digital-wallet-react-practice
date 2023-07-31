import classes from './LogInAndSignUpInput.module.css';

const EditInputLogInAndSignUpInput = ({
  autoComplete,
  hasError,
  id,
  label,
  message,
  name,
  onBlurHandle,
  onChangeHandle,
  type,
}) => {
  const inputClasses = hasError
    ? `${classes.input} ${classes.error}`
    : classes.input;

  return (
    <>
      <input
        autoComplete={autoComplete}
        className={inputClasses}
        id={id}
        name={name}
        onBlur={onBlurHandle}
        onChange={onChangeHandle}
        placeholder=" "
        type={type}
      />
      <label htmlFor={id}>{label}</label>
      {hasError ? <p className={classes.error}>{message}</p> : null}
    </>
  );
};

export default EditInputLogInAndSignUpInput;
