import { Link } from 'react-router-dom';

import { CONSUMER_PRODUCTS } from '../../constants/constants';

import shoppingImg from '../../assets/images/brand-identity/shopping.svg';
import earthImg from '../../assets/images/brand-identity/send-receive-reuse.svg';
import cryptoEarthImg from '../../assets/images/brand-identity/light-dashboard.svg';
import prepaidCardImg from '../../assets/images/brand-identity/prepaid-card.svg';

import classes from './ConsumerProducts.module.css';

const ConsumerProducts = () => {
  const images = [shoppingImg, earthImg, cryptoEarthImg, prepaidCardImg];

  return (
    <>
      <section>
        <ul className={classes.products}>
          {CONSUMER_PRODUCTS.map(({ description, id, title }, index) => {
            return (
              <li key={id} className={classes.product}>
                <div>
                  <img src={images[index]} alt="" loading="lazy" />
                </div>
                <h2 className={classes.title}>{title}</h2>
                <p className={classes.description}>{description}</p>
                <Link to="#" className={classes.link}>
                  Learn more
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default ConsumerProducts;
