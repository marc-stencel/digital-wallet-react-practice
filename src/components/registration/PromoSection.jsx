import Sites from './Sites';

import promoImg from '../../assets/images/brand-identity/promo-banner-icon.svg';

import classes from './PromoSection.module.css';

const PromoSection = () => {
  return (
    <section className={classes.promo}>
      <h1>Your cash made digital. Pay, send, receive.</h1>
      <div className={classes.info}>
        <img src={promoImg} alt="" />
        <p className={classes.description}>
          Join millions who already use Skrill to safely pay online and send
          money anywhere in the world.
        </p>
      </div>
      <Sites />
    </section>
  );
};

export default PromoSection;
