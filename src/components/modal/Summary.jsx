import { useEffect, useState } from 'react';

import classes from './Summary.module.css';

const Summary = ({ amount, discountAmount }) => {
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const result = (amount - discountAmount).toFixed(2);
    setTotalAmount(result > 0 ? result : 0);
  }, [amount, discountAmount]);

  return (
    <div className={classes.summary}>
      <div className={classes['summary-detail']}>
        <p>Should arrive</p>
        <span>up to 2 days</span>
      </div>
      <div className={classes['summary-detail']}>
        <p>Fee</p>
        <span>PLN 0.00</span>
      </div>
      <div className={`${classes.trial} ${classes['summary-detail']}`}>
        <p>Trial offer</p>
        <span>- PLN {discountAmount.toFixed(2)}</span>
      </div>
      <div className={classes['summary-detail']}>
        <p>Total to Pay</p>
        <span>PLN {totalAmount}</span>
      </div>
    </div>
  );
};

export default Summary;
