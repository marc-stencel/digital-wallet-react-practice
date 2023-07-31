import { Form, useNavigation } from 'react-router-dom';

import useInputValidation from '../../../hooks/useInputValidation';

import { COUNTRIES, CURRENCIES } from '../../../constants/constants';

import { nameValidation } from '../../../helpers/inputsValidation';
import { emailValidation } from '../../../helpers/inputsValidation';
import { passwordValidation } from '../../../helpers/inputsValidation';
import { formValidation } from '../../../helpers/formValidation';

import FormElement from '../elements/FormElement';
import LogInAndSignUpInput from '../elements/LogInAndSignUpInput';
import Select from '../elements/Select';
import Checkbox from '../elements/Checkbox';
import Terms from '../../registration/Terms';
import Button from '../../buttons/Button';

import classes from './SignUpForm.module.css';

const SignUpForm = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  let isValidForm = false;

  const {
    handleInputBlur: handleNameBlur,
    handleInputChange: handleNameChange,
    hasError: hasNameError,
    isValidValue: isValidName,
  } = useInputValidation(nameValidation);

  const {
    handleInputBlur: handleSurnameBlur,
    handleInputChange: handleSurnameChange,
    hasError: hasSurnameError,
    isValidValue: isValidSurname,
  } = useInputValidation(nameValidation);

  const {
    handleInputBlur: handleEmailBlur,
    handleInputChange: handleEmailChange,
    hasError: hasEmailError,
    isValidValue: isValidEmail,
  } = useInputValidation(emailValidation);

  const {
    handleInputBlur: handlePasswordBlur,
    handleInputChange: handlePasswordChange,
    hasError: hasPasswordError,
    isValidValue: isValidPassword,
  } = useInputValidation(passwordValidation);

  isValidForm = formValidation(
    !isValidName,
    !isValidSurname,
    !isValidEmail,
    !isValidPassword,
  );

  return (
    <Form method="POST" action="/register" className={classes.form}>
      <FormElement resize={true}>
        <LogInAndSignUpInput
          autoComplete="given-name"
          hasError={hasNameError}
          id="signUpName"
          label="First Name"
          message="Field is required"
          name="name"
          onBlurHandle={handleNameBlur}
          onChangeHandle={handleNameChange}
          type="text"
        />
      </FormElement>

      <FormElement resize={true}>
        <LogInAndSignUpInput
          autoComplete="family-name"
          hasError={hasSurnameError}
          id="signUpSurname"
          label="Last Name"
          message="Field is required"
          name="surname"
          onBlurHandle={handleSurnameBlur}
          onChangeHandle={handleSurnameChange}
          type="text"
        />
      </FormElement>

      <FormElement resize={true}>
        <Select
          id="signUpCountry"
          label="Country"
          name="country"
          options={COUNTRIES}
        />
      </FormElement>

      <FormElement resize={true}>
        <Select
          id="signUpCurrency"
          label="Currency"
          name="currency"
          options={CURRENCIES}
        />
      </FormElement>

      <FormElement>
        <LogInAndSignUpInput
          autoComplete="email"
          hasError={hasEmailError}
          id="signUpEmail"
          label="Email"
          message="Valid email is required"
          name="email"
          onBlurHandle={handleEmailBlur}
          onChangeHandle={handleEmailChange}
          type="email"
        />
      </FormElement>

      <FormElement>
        <LogInAndSignUpInput
          autoComplete="new-password"
          hasError={hasPasswordError}
          id="signUpPassword"
          label="Password"
          message="Field is required (minimum 6 characters without space)"
          name="password"
          onBlurHandle={handlePasswordBlur}
          onChangeHandle={handlePasswordChange}
          type="password"
        />
      </FormElement>

      <FormElement>
        <Checkbox
          id="subscribe"
          label={`Get offers from carefully selected Skrill partners. We'll not share your personal data, but will send you marketing messages on their behalf.`}
          name="subscribe"
        />
      </FormElement>
      <Terms />

      <Button
        className={classes.submit}
        disable={!isValidForm || isSubmitting}
        type="submit">
        {isSubmitting ? 'Submitting' : 'Register'}
      </Button>
    </Form>
  );
};

export default SignUpForm;
