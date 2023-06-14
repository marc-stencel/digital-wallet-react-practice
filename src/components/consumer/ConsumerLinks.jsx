import { Link } from 'react-router-dom';

import classes from './ConsumerLinks.module.css';

const ConsumerLinks = () => {
  return (
    <div className={classes.links}>
      <Link to="/register" className={classes.register}>
        Sign up now
      </Link>
      <Link to="/help" className={classes.help}>
        Learn more
      </Link>
    </div>
  );
};

export default ConsumerLinks;
