import { Form, useNavigation } from 'react-router-dom';

import useInputValidation from '../../../hooks/useInputValidation';

import { emailValidation } from '../../../helpers/inputsValidation';
import { passwordValidation } from '../../../helpers/inputsValidation';
import { formValidation } from '../../../helpers/formValidation';

import FormElement from '../elements/FormElement';
import LogInAndSignUpInput from '../elements/LogInAndSignUpInput';
import Button from '../../buttons/Button';

import classes from './LogInForm.module.css';

const LogInForm = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  let isValidForm = false;

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

  isValidForm = formValidation(!isValidEmail, !isValidPassword);

  return (
    <Form method="POST" action="/login" className={classes.form}>
      <FormElement>
        <LogInAndSignUpInput
          autoComplete="email"
          hasError={hasEmailError}
          id="logInEmail"
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
          autoComplete="current-password"
          hasError={hasPasswordError}
          id="logInPassword"
          label="Password"
          message="Valid password is required"
          name="password"
          onBlurHandle={handlePasswordBlur}
          onChangeHandle={handlePasswordChange}
          type="password"
        />
      </FormElement>

      <Button
        className={classes.submit}
        disable={!isValidForm || isSubmitting}
        type="submit">
        {isSubmitting ? 'Submitting' : 'Log in'}
      </Button>
    </Form>
  );
};

export default LogInForm;
