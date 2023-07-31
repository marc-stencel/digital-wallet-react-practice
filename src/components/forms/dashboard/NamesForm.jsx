import { Form } from 'react-router-dom';

import useEditInputChange from '../../../hooks/useEditProfile';
import useSuccessMessage from '../../../hooks/useSuccessMessage';

import {
  nameValidation,
  surnameValidation,
} from '../../../helpers/inputsValidation';
import { formValidation } from '../../../helpers/formValidation';
import { showMessage } from '../../../helpers/showMessage';

import EditInput from '../../forms/elements/EditInput';
import ButtonsWrapper from '../../buttons/ButtonsWrapper';
import Button from '../../buttons/Button';
import ToggleButton from '../../buttons/ToggleButton';
import FormMessage from '../elements/FormMessage';

const NamesForm = ({ className, name, onToggleForm, surname }) => {
  let isValidForm;

  const {
    handleEditInputChange: handleEditName,
    editInputValue: nameValue,
    hasError: hasNameError,
  } = useEditInputChange(name, nameValidation);

  const {
    handleEditInputChange: handleEditSurname,
    editInputValue: surnameValue,
    hasError: hasSurnameError,
  } = useEditInputChange(surname, surnameValidation);

  const isSuccessMessage = useSuccessMessage('names');

  isValidForm = formValidation(hasNameError, hasSurnameError);

  const isShowMessage = showMessage(isSuccessMessage, isValidForm);

  const message = isValidForm ? 'Success!!' : 'Field has space or bad length.';

  return (
    <Form method="patch" action={'/dashboard'}>
      <div>
        <EditInput
          autoComplete="given-name"
          changeHandler={handleEditName}
          hasError={hasNameError}
          label="Name"
          name="name"
          type="text"
          value={nameValue.toUpperCase()}
        />
        <EditInput
          autoComplete="family-name"
          changeHandler={handleEditSurname}
          hasError={hasSurnameError}
          label="Surname"
          name="surname"
          type="text"
          value={surnameValue.toUpperCase()}
        />
      </div>
      {isShowMessage ? (
        <FormMessage message={message} status={isValidForm} />
      ) : null}
      <ButtonsWrapper>
        <Button
          className={className}
          disable={!isValidForm}
          name="names"
          type="submit">
          Save
        </Button>
        <ToggleButton onToggleButton={onToggleForm}>Cancel</ToggleButton>
      </ButtonsWrapper>
    </Form>
  );
};

export default NamesForm;
