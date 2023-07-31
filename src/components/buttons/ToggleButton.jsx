import classes from './ToggleButton.module.css';

const ToggleButton = ({ children, onToggleButton }) => {
  return (
    <button className={classes.toggle} onClick={onToggleButton}>
      {children}
    </button>
  );
};

export default ToggleButton;
