import useToggleSwitch from '../../../hooks/useToggleSwitch';

import UserData from '../../dashboard/data/UserData';
import ToggleSwitch from './ToggleSwitch';

import classes from './MarketingOptions.module.css';

const MarketingOptions = ({ emailOffer, smsOffer }) => {
  const {
    isChecked: isEmailChecked,
    handleToggleSwitch: handleToggleEmailSwitch,
  } = useToggleSwitch(emailOffer);

  const { isChecked: isSmsChecked, handleToggleSwitch: handleToggleSmsSwitch } =
    useToggleSwitch(smsOffer);

  return (
    <>
      <div className={classes['data-wrapper']}>
        <UserData
          mainData="Receive an email from carefully selected Skrill partners. If you turn it off, you'll still receive email notifications about your account or card balance and other payments."
          title="Email offer"
        />
        <ToggleSwitch
          checked={isEmailChecked}
          name="emailOffer"
          onToggleSwitch={handleToggleEmailSwitch}
        />

        <UserData
          mainData="Receive an SMS from carefully selected Skrill partners. If you turn it off, you'll still receive SMS notifications about your account or card balance and other payments."
          title="SMS offer"
        />
        <ToggleSwitch
          checked={isSmsChecked}
          name="smsOffer"
          onToggleSwitch={handleToggleSmsSwitch}
        />
      </div>
    </>
  );
};

export default MarketingOptions;
