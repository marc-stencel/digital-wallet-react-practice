import { Link } from 'react-router-dom';

import banner from '../../assets/images/backgrounds/promo-banner.webp';

import classes from './Banner.module.css';

const Banner = () => {
  return (
    <>
      <section className={classes.background}>
        <div>
          <img src={banner} alt="promo banner" className={classes.banner} />
        </div>
        <div className={classes.content}>
          <p className={classes.date}>UNTIL 30 JUNE 2023</p>
          <p className={classes.description}>
            Free Przelewy24 and blik deposits. Free bank withdrawals.
          </p>
          <Link to="/register" className={classes.link}>
            Sign up now
          </Link>
        </div>
      </section>
    </>
  );
};

export default Banner;
