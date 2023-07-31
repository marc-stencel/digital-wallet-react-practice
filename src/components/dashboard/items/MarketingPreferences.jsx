import useToggleForm from '../../../hooks/useToggleForm';

import DashboardItem from './DashboardItem';
import CardElement from './CardElement';
import MarketingForm from '../../forms/dashboard/MarketingForm';
import UserMarketingData from '../data/UserMarketingData';

const MarketingPreferences = ({ buttonClass, data }) => {
  const { emailOffer, smsOffer } = data;

  const {
    isShowForm: isShowMarketingForm,
    handleToggleForm: handleToggleMarketingForm,
  } = useToggleForm();

  return (
    <DashboardItem id="marketing" header="Marketing preferences">
      <CardElement
        buttonText="Edit"
        isShowForm={isShowMarketingForm}
        onToggleForm={handleToggleMarketingForm}>
        {isShowMarketingForm ? (
          <MarketingForm
            className={buttonClass}
            emailOffer={emailOffer}
            onToggleForm={handleToggleMarketingForm}
            smsOffer={smsOffer}
          />
        ) : (
          <UserMarketingData emailOffer={emailOffer} smsOffer={smsOffer} />
        )}
      </CardElement>
    </DashboardItem>
  );
};

export default MarketingPreferences;
