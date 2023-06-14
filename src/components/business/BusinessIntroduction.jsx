import BusinessLinks from './BusinessLinks';

import classes from './BusinessIntroduction.module.css';

const BusinessIntroduction = () => {
  return (
    <section className={classes.background}>
      <div className={classes.content}>
        <h1 className={classes.h1}>Secure online payments for your business</h1>
        <p className={classes.description}>
          We build our solutions around you. Being at the forefront of digital
          payments for years and trusted by millions globally, Skrill offers
          advanced payment solutions to suit all your business needs and
          requirements.
        </p>
        <BusinessLinks />
      </div>
    </section>
  );
};

export default BusinessIntroduction;
