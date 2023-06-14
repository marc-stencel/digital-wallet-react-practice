import { Form, useNavigation } from 'react-router-dom';

import useInputValidation from '../../hooks/useInputValidation';

import Button from '../buttons/Button';

import { emailValidation } from '../../helpers/inputsValidation';
import { passwordValidation } from '../../helpers/inputsValidation';

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

  if (isValidEmail && isValidPassword) {
    isValidForm = true;
  }

  return (
    <Form method="POST" action="/login" className={classes.form}>
      <div className={classes['form-element']}>
        <input
          className={hasEmailError ? classes.error : ''}
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          id="logInEmail"
          name="email"
          type="email"
          placeholder=" "
        />
        <label htmlFor="logInEmail">Email</label>
        {hasEmailError ? (
          <p className={classes.error}>Valid email is required</p>
        ) : null}
      </div>

      <div className={classes['form-element']}>
        <input
          className={hasPasswordError ? classes.error : ''}
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          id="logInPassword"
          name="password"
          type="password"
          placeholder=" "
        />
        <label htmlFor="logInPassword">Password</label>
        {hasPasswordError ? (
          <p className={classes.error}>
            Field is required (minimum 6 characters without space)
          </p>
        ) : null}
      </div>

      <Button
        type="submit"
        className={classes.submit}
        disable={!isValidForm}>
        {isSubmitting ? 'Submitting' : 'Log in'}
      </Button>
    </Form>
  );
};

export default LogInForm;
