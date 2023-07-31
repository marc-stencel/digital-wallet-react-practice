import classes from './ButtonsWrapper.module.css';

const ButtonsWrapper = ({ children }) => {
  return <div className={classes.buttons}>{children}</div>;
};

export default ButtonsWrapper;
