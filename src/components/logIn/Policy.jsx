import classes from './Policy.module.css';

const Policy = () => {
  return (
    <p className={classes.policy}>
      {`Copyright © 2020 Paysafe Holdings UK Limited. All rights reserved.
        Skrill® is a registered trademark of Paysafe Holdings UK Limited.
        Paysafe Payment Solutions Limited, trading as Skrill, Skrill Money
        Transfer, Rapid Transfer and Skrill Quick Checkout is regulated by the
        Central Bank of Ireland. The Skrill Prepaid Mastercard is issued by
        Paysafe Payment Solutions Limited as an affiliate member of Paysafe
        Financial Services Limited pursuant to a licence from Mastercard
        International. Mastercard® is a registered trademark of Mastercard
        International.`}
    </p>
  );
};

export default Policy;
