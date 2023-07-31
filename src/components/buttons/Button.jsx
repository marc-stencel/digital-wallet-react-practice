import classes from './Button.module.css';

const Button = ({
  children,
  className,
  disable,
  onButtonClick,
  type,
  name,
}) => {
  return (
    <button
      type={type}
      onClick={onButtonClick}
      className={`${classes.button} ${className}`}
      disabled={disable || ''}
      name={name}>
      {children}
    </button>
  );
};

export default Button;
