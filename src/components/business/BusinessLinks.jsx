import { Link } from 'react-router-dom';

import classes from './BusinessLinks.module.css';

const BusinessLinks = () => {
  return (
    <div className={classes.links}>
      <Link to="/register" className={classes.register}>
        Get a business account
      </Link>
    </div>
  );
};

export default BusinessLinks;
