import classes from './CalculatorButton.module.css';

const CalculatorButton = ({ isActiveModal, onModalToggle }) => {
  return (
    <button
      className={classes.button}
      onClick={onModalToggle}
      disabled={isActiveModal ? 'disabled' : ''}
      aria-label="Try the calculator">
      Send money
    </button>
  );
};

export default CalculatorButton;
