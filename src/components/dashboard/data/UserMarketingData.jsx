import UserData from './UserData';

import classes from './UserMarketingData.module.css';

const UserMarketingData = ({ emailOffer, smsOffer }) => {
  return (
    <>
      <div className={classes['data-wrapper']}>
        <UserData mainData={emailOffer} title="Email offer" />
        <UserData mainData={smsOffer} title="SMS offer" />
      </div>
    </>
  );
};

export default UserMarketingData;
