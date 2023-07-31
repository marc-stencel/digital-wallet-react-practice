import MobileNavigation from './MobileNavigation';
import FullNavigation from './FullNavigation';

import classes from './Navigation.module.css';

const Navigation = ({ userName, token }) => {
  return (
    <header className={classes.header}>
      <MobileNavigation userName={userName} token={token} />
      <FullNavigation userName={userName} token={token} />
    </header>
  );
};

export default Navigation;
