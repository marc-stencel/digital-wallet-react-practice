import CardElement from './CardElement';

import useToggleForm from '../../../hooks/useToggleForm';

import NamesForm from '../../forms/dashboard/NamesForm';
import UserData from '../data/UserData';
import AddressForm from '../../forms/dashboard/AddressForm';
import PhoneForm from '../../forms/dashboard/PhoneForm';
import ItemData from '../data/ItemData';
import DashboardItem from './DashboardItem';

const PersonalDetails = ({ buttonClass, data }) => {
  const { city, country, email, name, phone, postalCode, street, surname } =
    data;

  const {
    isShowForm: isShowNamesForm,
    handleToggleForm: handleToggleNamesForm,
  } = useToggleForm();

  const {
    isShowForm: isShowAddressForm,
    handleToggleForm: handleToggleAddressForm,
  } = useToggleForm();

  const {
    isShowForm: isShowPhoneForm,
    handleToggleForm: handleTogglePhoneForm,
  } = useToggleForm();

  return (
    <DashboardItem id="details" header="Personal details">
      <CardElement
        buttonText="Edit"
        isShowForm={isShowNamesForm}
        onToggleForm={handleToggleNamesForm}>
        {isShowNamesForm ? (
          <NamesForm
            className={buttonClass}
            name={name}
            onToggleForm={handleToggleNamesForm}
            surname={surname}
          />
        ) : (
          <UserData mainData={`${name} ${surname}`} title="Name and surname" />
        )}
      </CardElement>

      <CardElement
        buttonText="Edit"
        isShowForm={isShowAddressForm}
        onToggleForm={handleToggleAddressForm}>
        {isShowAddressForm ? (
          <AddressForm
            city={city}
            className={buttonClass}
            country={country}
            onToggleForm={handleToggleAddressForm}
            postalCode={postalCode}
            street={street}
          />
        ) : (
          <UserData mainData={street} title="Address">
            <ItemData>{city}</ItemData>
            <ItemData>{postalCode}</ItemData>
            <ItemData>{country}</ItemData>
          </UserData>
        )}
      </CardElement>

      <CardElement
        buttonText="Edit"
        isShowForm={isShowPhoneForm}
        onToggleForm={handleTogglePhoneForm}>
        {isShowPhoneForm ? (
          <PhoneForm
            className={buttonClass}
            onToggleForm={handleTogglePhoneForm}
            phone={phone}
          />
        ) : (
          <UserData mainData={phone} title="Phone number" />
        )}
      </CardElement>

      <CardElement>
        <UserData mainData={email} title="E-mail address" />
      </CardElement>
    </DashboardItem>
  );
};

export default PersonalDetails;
