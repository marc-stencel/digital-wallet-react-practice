import GooglePlayIcon from '../../assets/images/apps/google-play.svg';
import AppstoreIcon from '../../assets/images/apps/app-store.svg';

import classes from './Apps.module.css';

const Apps = () => {
  return (
    <div className={classes.apps}>
      <a
        href="https://play.google.com/store/apps/details?id=com.moneybookers.skrillpayments"
        className={classes.app}>
        <img
          src={GooglePlayIcon}
          alt="Get it on Google Play"
          className={classes.img}
        />
      </a>
      <a
        href="https://apps.apple.com/gb/app/skrill/id718248239"
        className={classes.app}>
        <img
          src={AppstoreIcon}
          alt="Get it on App Store"
          className={classes.img}
        />
      </a>
    </div>
  );
};

export default Apps;
