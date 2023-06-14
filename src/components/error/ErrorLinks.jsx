import { Link } from 'react-router-dom';

import classes from './ErrorLinks.module.css';

const ErrorLinks = () => {
  return (
    <div className={classes.links}>
      <Link to="/" className={classes.consumer}>
        Consumer Homepage
      </Link>
      <Link to="/business" className={classes.business}>
        Business Homepage
      </Link>
    </div>
  );
};

export default ErrorLinks;
