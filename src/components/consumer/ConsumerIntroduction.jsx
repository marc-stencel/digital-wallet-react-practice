import ConsumerLinks from './ConsumerLinks';

import classes from './ConsumerIntroduction.module.css';

const ConsumerIntroduction = () => {
  return (
    <section className={classes.background}>
      <div className={classes.content}>
        <h1 className={classes.h1}>Make your money move</h1>
        <p className={classes.description}>
          Pay online, send money and buy crypto with a digital wallet used by
          millions.
        </p>
        <p className={classes.description}>
          Now with free Przelewy24, Blik deposits and bank withdrawals until 30
          June 2023.
        </p>
        <ConsumerLinks />
      </div>
    </section>
  );
};

export default ConsumerIntroduction;
