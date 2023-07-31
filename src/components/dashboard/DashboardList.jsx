import { useLoaderData } from 'react-router-dom';

import PersonalDetails from './items/PersonalDetails';
import AccountSettings from './items/AccountSettings';
import MarketingPreferences from './items/MarketingPreferences';

import classes from './DashboardList.module.css';

const DashboardList = () => {
  const data = useLoaderData();

  const {
    address: { city, country, postalCode, street },
    contact: { email, phone },
    marketing: { emailOffer, smsOffer },
    personalData: { name, surname },
    settings: { currency, language, status },
  } = data;

  const personalData = {
    city,
    country,
    email,
    name,
    phone,
    postalCode,
    street,
    surname,
  };

  const accountData = {
    currency,
    language,
    accountStatus: status,
  };

  const marketingData = {
    emailOffer,
    smsOffer,
  };

  return (
    <ul className={classes['dashboard-list']}>
      <PersonalDetails buttonClass={classes.save} data={personalData} />
      <AccountSettings buttonClass={classes.save} data={accountData} />
      <MarketingPreferences buttonClass={classes.save} data={marketingData} />
    </ul>
  );
};

export default DashboardList;
