import BusinessList from './BusinessList';

import classes from './BusinessProducts.module.css';

const BusinessProducts = () => {
  return (
    <section>
      <h2 className={classes.h2}>Our products</h2>
      <p className={classes['title-description']}>
        We offer fast, instant and secure optimised payment solutions, suitable
        for all businesses. With a simple, single integration, you can enable
        100+ local payment methods including cards, digital wallets, instant
        bank transfers and other alternative payment methods. You can also
        manage over 40 currencies from just one account, to handle easier cross
        border payments.
      </p>
      <BusinessList />
    </section>
  );
};

export default BusinessProducts;
