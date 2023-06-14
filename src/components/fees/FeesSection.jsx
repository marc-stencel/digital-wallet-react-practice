import { Link } from 'react-router-dom';

import FeesList from './FeesList';

import classes from './FeesSection.module.css';

const FeesSection = () => {
  return (
    <>
      <section className={classes.background}>
        <h1 className={classes.h1}>Do more. Pay less.</h1>
        <h2 className={classes.h2}>
          These transactions have no transaction fee:
        </h2>
        <FeesList />
        <Link to="/register" className={classes.register}>
          Open a free account
        </Link>
      </section>
    </>
  );
};

export default FeesSection;
