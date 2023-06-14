import { NavLink } from 'react-router-dom';

import QuestionMarkIcon from '../icons/QuestionMarkIcon';
import PersonIcon from '../icons/PersonIcon';

import classes from './FullNavigation.module.css';

const FullNavigation = () => {
  return (
    <nav className={classes['full-nav']} aria-label="Main">
      <NavLink to={'/'} className={classes.navBrand}>
        Skrill
      </NavLink>
      <NavLink to={'/business'} className={classes.business}>
        Business
      </NavLink>
      <NavLink to={'/help'} className={classes.help}>
        <QuestionMarkIcon />
        Help
      </NavLink>
      <NavLink to={'/login'} className={classes.login}>
        <PersonIcon />
        Log In
      </NavLink>
      <NavLink to={'register'} className={classes.register}>
        Register
      </NavLink>
    </nav>
  );
};

export default FullNavigation;
