import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';

import classes from './ErrorElement.module.css';
import ErrorLinks from './ErrorLinks';

const ErrorElement = () => {
  return (
    <>
      <Navigation />
      <main>
        <section className={classes['error-section']}>
          <h1 className={classes.h1}>
            Page not found. This could be the result of page being removed, the
            name being changed or the page being temporarily unavailable.
          </h1>
          <ErrorLinks />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ErrorElement;
