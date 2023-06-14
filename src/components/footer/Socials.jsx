import FacebookIcon from '../icons/FacebookIcon';
import InstagramIcon from '../icons/InstagramIcon';
import TwitterIcon from '../icons/TwitterIcon';

import classes from './Socials.module.css';

const Socials = () => {
  return (
    <div className={classes.socials}>
      <FacebookIcon />
      <InstagramIcon />
      <TwitterIcon />
    </div>
  );
};

export default Socials;
