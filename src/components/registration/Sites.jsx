import milan from '../../assets/images/sites/milan.svg';
import steam from '../../assets/images/sites/steam.svg';
import fxpro from '../../assets/images/sites/fxpro.svg';
import skype from '../../assets/images/sites/skype.svg';
import ethiopian from '../../assets/images/sites/ethiopian.svg';
import poker888 from '../../assets/images/sites/888.svg';
import pokerstars from '../../assets/images/sites/pokerstars.svg';

import classes from './Sites.module.css';

const Sites = () => {
  return (
    <>
      <p className={classes.text}>Pay seamlessly on 15,000 sites</p>
      <div className={classes.sites}>
        <img src={milan} alt="Milan logo" />
        <img src={steam} alt="Steam logo" />
        <img src={fxpro} alt="Fxpro logo" />
        <img src={skype} alt="Skype logo" />
        <img src={ethiopian} alt="Ethiopian logo" />
        <img src={poker888} alt="Poker888 logo" />
        <img src={pokerstars} alt="Pokerstars logo" />
      </div>
    </>
  );
};

export default Sites;
