import { Link } from 'react-router-dom';

import classes from './FooterNavigation.module.css';

const FooterNavigation = () => {
  return (
    <nav aria-label="Footer">
      <ul className={classes.list}>
        <li key="Fees">
          <Link to="fees" className={classes.link}>
            Fees
          </Link>
        </li>
        <li key="Support">
          <Link to="help" className={classes.link}>
            Support
          </Link>
        </li>
        <li key="Terms">
          <Link to="#" className={classes.link}>
            Terms & conditions
          </Link>
        </li>
        <li key="Comprehensive">
          <Link to="#" className={classes.link}>
            Comprehensive Privacy Notice
          </Link>
        </li>
        <li key="PSD2">
          <Link to="#" className={classes.link}>
            PSD2 APIs
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNavigation;
