import MobileNavigation from './MobileNavigation';
import FullNavigation from './FullNavigation';

import classes from './Navigation.module.css';

const Navigation = () => {
  return (
    <header className={classes.header}>
      <MobileNavigation />
      <FullNavigation />
    </header>
  );
};

export default Navigation;
