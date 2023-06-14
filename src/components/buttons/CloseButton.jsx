import classes from './CloseButton.module.css';

const CloseButton = ({ children, onCloseClick }) => {
  return (
    <button
      autoFocus={true}
      className={classes.button}
      onClick={onCloseClick}
      aria-label="Close">
      {children}
    </button>
  );
};

export default CloseButton;
