import ErrorLinks from './ErrorLinks';

import classes from './ErrorElement.module.css';

const ErrorElement = () => {
  return (
    <>
      <section className={classes['error-section']}>
        <h1 className={classes.h1}>
          Page not found. This could be the result of page being removed, the
          name being changed or the page being temporarily unavailable.
        </h1>
        <ErrorLinks />
      </section>
    </>
  );
};

export default ErrorElement;
