import useToggleForm from '../../../hooks/useToggleForm';

import { CURRENCIES, LANGUAGES } from '../../../constants/constants';

import DashboardItem from './DashboardItem';
import CardElement from './CardElement';
import SelectForm from '../../forms/dashboard/SelectForm';
import UserData from '../data/UserData';

const AccountSettings = ({ buttonClass, data }) => {
  const { accountStatus, currency, language } = data;

  const {
    isShowForm: isShowCurrencyForm,
    handleToggleForm: handleToggleCurrencyForm,
  } = useToggleForm();

  const {
    isShowForm: isShowLanguageForm,
    handleToggleForm: handleToggleLanguageForm,
  } = useToggleForm();

  return (
    <DashboardItem id="settings" header="Account settings">
      <CardElement
        buttonText="Edit"
        isShowForm={isShowCurrencyForm}
        onToggleForm={handleToggleCurrencyForm}>
        {isShowCurrencyForm ? (
          <SelectForm
            buttonName="setCurrency"
            className={buttonClass}
            defaultVal={currency}
            id="selectCurrency"
            label="Currency"
            name="currency"
            options={CURRENCIES}
            onToggleForm={handleToggleCurrencyForm}
          />
        ) : (
          <UserData mainData={currency} title="Currency" />
        )}
      </CardElement>

      <CardElement
        buttonText="Edit"
        isShowForm={isShowLanguageForm}
        onToggleForm={handleToggleLanguageForm}>
        {isShowLanguageForm ? (
          <SelectForm
            buttonName="setLanguage"
            className={buttonClass}
            defaultVal={language}
            id="selectLanguage"
            label="Language"
            name="language"
            options={LANGUAGES}
            onToggleForm={handleToggleLanguageForm}
          />
        ) : (
          <UserData mainData={language} title="Language" />
        )}
      </CardElement>

      <CardElement>
        <UserData mainData={accountStatus} title="Account status" />
      </CardElement>
    </DashboardItem>
  );
};

export default AccountSettings;
