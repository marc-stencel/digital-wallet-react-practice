import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Burger from '../buttons/Burger';

import classes from './MobileNavigation.module.css';

const MobileNavigation = () => {
  const [isMobileNavOpen, setisMobileNavOpen] = useState(false);

  const handleBurgerToggle = () => {
    setisMobileNavOpen(!isMobileNavOpen);
  };

  const handleBurgerCollapse = () => {
    setisMobileNavOpen(false);
  };

  return (
    <nav className={classes['mobile-nav']} aria-label="Main">
      <div className={classes.wrapper}>
        <Burger navState={isMobileNavOpen} onBurgerClick={handleBurgerToggle} />
        <NavLink
          to={'/'}
          className={classes.navBrand}
          onClick={handleBurgerCollapse}>
          Skrill
        </NavLink>
        <NavLink
          to={'/login'}
          className={classes.login}
          onClick={handleBurgerCollapse}>
          Log In
        </NavLink>
        <NavLink
          to={'/register'}
          className={classes.register}
          onClick={handleBurgerCollapse}>
          Register
        </NavLink>
      </div>
      <div className={classes.dropdown} aria-expanded={isMobileNavOpen}>
        <NavLink
          to={'/business'}
          className={classes.business}
          onClick={handleBurgerCollapse}>
          Business
        </NavLink>
        <NavLink
          to={'/help'}
          className={classes.help}
          onClick={handleBurgerCollapse}>
          Help
        </NavLink>
      </div>
    </nav>
  );
};

export default MobileNavigation;
