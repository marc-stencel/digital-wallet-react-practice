import classes from './Button.module.css';

const Button = ({ children, className, disable, onButtonClick, type }) => {
  return (
    <button
      type={type}
      onClick={onButtonClick}
      className={`${classes.button} ${className}`}
      disabled={disable || ''}>
      {children}
    </button>
  );
};

export default Button;
