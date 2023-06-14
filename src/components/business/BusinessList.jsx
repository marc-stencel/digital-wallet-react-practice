import { Link } from 'react-router-dom';

import { BUSINESS_PRODUCTS } from '../../constants/constants';

import checkoutImg from '../../assets/images/brand-identity/quick-checkout.svg';
import walletImg from '../../assets/images/brand-identity/digital-wallet.svg';
import transferImg from '../../assets/images/brand-identity/rapid-transfer.svg';
import shoppingImg from '../../assets/images/brand-identity/shopping.svg';

import classes from './BusinessList.module.css';

const BusinessList = () => {
  const images = [checkoutImg, walletImg, transferImg, shoppingImg];

  return (
    <ul className={classes.products}>
      {BUSINESS_PRODUCTS.map(({ description, id, title }, index) => {
        return (
          <li key={id} className={classes.product}>
            <Link to="#" className={classes.link}>
              <div>
                <img
                  src={images[index]}
                  alt=""
                  loading="lazy"
                  className={classes.img}
                />
              </div>
              <h3 className={classes.h3}>{title}</h3>
              <p>{description}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default BusinessList;
