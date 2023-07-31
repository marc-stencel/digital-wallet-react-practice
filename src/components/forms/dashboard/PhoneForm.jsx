import { Form } from 'react-router-dom';

import useEditInputChange from '../../../hooks/useEditProfile';
import useSuccessMessage from '../../../hooks/useSuccessMessage';

import { basicValidation } from '../../../helpers/inputsValidation';
import { formValidation } from '../../../helpers/formValidation';
import { showMessage } from '../../../helpers/showMessage';

import EditInput from '../../forms/elements/EditInput';
import ButtonsWrapper from '../../buttons/ButtonsWrapper';
import Button from '../../buttons/Button';
import ToggleButton from '../../buttons/ToggleButton';
import FormMessage from '../elements/FormMessage';

const PhoneForm = ({ className, onToggleForm, phone }) => {
  let isValidForm;

  const {
    handleEditInputChange: handleEditPhone,
    editInputValue: phoneValue,
    hasError: hasPhoneError,
  } = useEditInputChange(phone, basicValidation);

  const isSuccessMessage = useSuccessMessage('telephone');

  isValidForm = formValidation(hasPhoneError);

  const isShowMessage = showMessage(isSuccessMessage, isValidForm);

  const message = isValidForm ? 'Success!!' : 'Too many characters.';

  return (
    <Form method="patch" action={'/dashboard'}>
      <div>
        <EditInput
          autoComplete="tel"
          changeHandler={handleEditPhone}
          hasError={hasPhoneError}
          label="Phone number"
          name="phone"
          type="number"
          value={phoneValue}
        />
      </div>
      {isShowMessage ? (
        <FormMessage message={message} status={isValidForm} />
      ) : null}
      <ButtonsWrapper>
        <Button
          className={className}
          disable={!isValidForm}
          name="telephone"
          type="submit">
          Save
        </Button>
        <ToggleButton onToggleButton={onToggleForm}>Cancel</ToggleButton>
      </ButtonsWrapper>
    </Form>
  );
};

export default PhoneForm;
