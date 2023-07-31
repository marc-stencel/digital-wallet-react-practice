import classes from './EditInput.module.css';

const EditInput = ({
  autoComplete,
  changeHandler,
  label,
  hasError,
  name,
  type,
  value,
}) => {
  const inputClasses = hasError
    ? `${classes.input} ${classes.error}`
    : classes.input;

  return (
    <div className={classes['input-wrapper']}>
      <input
        autoComplete={autoComplete}
        className={inputClasses}
        id={name}
        name={name}
        onChange={changeHandler}
        placeholder=" "
        type={type}
        value={value}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default EditInput;
