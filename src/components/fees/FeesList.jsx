import classes from './FeesList.module.css';

const FeesList = () => {
  return (
    <>
      <ul className={classes['fees-list']}>
        <li key="paying">Paying a merchant directly from your Skrill wallet</li>
        <li key="receiving">Receiving money to your Skrill account</li>
        <li key="sending">
          Sending money to an international bank account with Skrill Money
          Transfer
        </li>
      </ul>
    </>
  );
};

export default FeesList;
