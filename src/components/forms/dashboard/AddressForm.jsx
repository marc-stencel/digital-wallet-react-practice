import { Form } from 'react-router-dom';

import useEditInputChange from '../../../hooks/useEditProfile';
import useSuccessMessage from '../../../hooks/useSuccessMessage';

import { basicValidation } from '../../../helpers/inputsValidation';
import { formValidation } from '../../../helpers/formValidation';
import { showMessage } from '../../../helpers/showMessage';

import { COUNTRIES } from '../../../constants/constants';

import EditInput from '../../forms/elements/EditInput';
import Select from '../elements/Select';
import ButtonsWrapper from '../../buttons/ButtonsWrapper';
import Button from '../../buttons/Button';
import ToggleButton from '../../buttons/ToggleButton';
import FormMessage from '../elements/FormMessage';

const AddressForm = ({
  city,
  className,
  country,
  onToggleForm,
  postalCode,
  street,
}) => {
  let isValidForm;

  const {
    handleEditInputChange: handleEditStreet,
    editInputValue: streetValue,
    hasError: hasStreetError,
  } = useEditInputChange(street, basicValidation);

  const {
    handleEditInputChange: handleEditCity,
    editInputValue: cityValue,
    hasError: hasCityError,
  } = useEditInputChange(city, basicValidation);

  const {
    handleEditInputChange: handleEditPostalCode,
    editInputValue: postalCodeValue,
    hasError: hasPostalCodeError,
  } = useEditInputChange(postalCode, basicValidation);

  const isSuccessMessage = useSuccessMessage('address');

  isValidForm = formValidation(
    hasStreetError,
    hasCityError,
    hasPostalCodeError,
  );

  const isShowMessage = showMessage(isSuccessMessage, isValidForm);

  const message = isValidForm ? 'Success!!' : 'Too many characters.';

  return (
    <Form method="patch" action={'/dashboard'}>
      <div>
        <EditInput
          changeHandler={handleEditStreet}
          label="Street"
          hasError={hasStreetError}
          name="street"
          type="text"
          value={streetValue}
        />
        <EditInput
          changeHandler={handleEditCity}
          label="City"
          hasError={hasCityError}
          name="city"
          type="text"
          value={cityValue}
        />
        <EditInput
          autoComplete="postal-code"
          changeHandler={handleEditPostalCode}
          label="PostalCode"
          hasError={hasPostalCodeError}
          name="postalCode"
          type="number"
          value={postalCodeValue}
        />
        <Select
          defaultVal={country}
          id="selectCountry"
          label="Country"
          name="country"
          options={COUNTRIES}
        />
      </div>
      {isShowMessage ? (
        <FormMessage message={message} status={isValidForm} />
      ) : null}
      <ButtonsWrapper>
        <Button
          className={className}
          disable={!isValidForm}
          type="submit"
          name="address">
          Save
        </Button>
        <ToggleButton onToggleButton={onToggleForm}>Cancel</ToggleButton>
      </ButtonsWrapper>
    </Form>
  );
};

export default AddressForm;
