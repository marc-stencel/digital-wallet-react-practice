import { Form, NavLink } from 'react-router-dom';

import QuestionMarkIcon from '../icons/QuestionMarkIcon';
import PersonIcon from '../icons/PersonIcon';
import Button from '../buttons/Button';

import classes from './FullNavigation.module.css';

const FullNavigation = ({ token, userName }) => {
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

      <NavLink
        to={userName ? '/dashboard' : '/login'}
        className={classes.login}>
        <PersonIcon />
        {userName ? userName : 'Log In'}
      </NavLink>

      {token ? (
        <Form method="POST" action="/logout">
          <Button type="submit" className={classes['sign-out']}>
            Log Out
          </Button>
        </Form>
      ) : (
        <NavLink to={'register'} className={classes.register}>
          Register
        </NavLink>
      )}
    </nav>
  );
};

export default FullNavigation;
