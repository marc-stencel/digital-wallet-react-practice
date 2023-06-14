import FooterNavigation from './FooterNavigation';
import Socials from './Socials';
import Apps from './Apps';

import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <h2 className={classes.h2}>For money movers and makers</h2>
      <div className={classes.links}>
        <FooterNavigation />
        <Socials />
      </div>
      <Apps />
      <p className={classes.description}>
        This app was created only for hands-on learning with React
        library. All information and assets are taken from the official Skrill
        website.
      </p>
    </footer>
  );
};

export default Footer;
