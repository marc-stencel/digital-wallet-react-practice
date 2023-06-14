import classes from './CalculatorDetails.module.css';

const CalculatorDetails = () => {
  return (
    <>
      <div className={classes.detail}>
        <p className={classes.label}>Deliver to</p>
        <p>Bank account</p>
      </div>
      <div className={classes.detail}>
        <p className={classes.label}>Pay with</p>
        <p>Debit card</p>
      </div>
    </>
  );
};

export default CalculatorDetails;
