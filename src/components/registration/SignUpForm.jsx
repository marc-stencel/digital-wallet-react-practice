import { Form, useNavigation } from 'react-router-dom';

import useInputValidation from '../../hooks/useInputValidation';

import Terms from './Terms';
import Button from '../buttons/Button';

import { nameValidation } from '../../helpers/inputsValidation';
import { emailValidation } from '../../helpers/inputsValidation';
import { passwordValidation } from '../../helpers/inputsValidation';

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

  if (isValidName && isValidSurname && isValidEmail && isValidPassword) {
    isValidForm = true;
  }

  return (
    <Form method="POST" action="/register" className={classes.form}>
      <div className={classes['form-element']}>
        <input
          className={hasNameError ? classes.error : ''}
          onBlur={handleNameBlur}
          onChange={handleNameChange}
          id="signUpName"
          name="name"
          type="text"
          placeholder=" "
        />
        <label htmlFor="signUpName">First Name</label>
        {hasNameError ? (
          <p className={classes.error}>Field is required</p>
        ) : null}
      </div>

      <div className={classes['form-element']}>
        <input
          className={hasSurnameError ? classes.error : ''}
          onBlur={handleSurnameBlur}
          onChange={handleSurnameChange}
          id="signUpSurname"
          name="surname"
          type="text"
          placeholder=" "
        />
        <label htmlFor="signUpSurname">Last Name</label>
        {hasSurnameError ? (
          <p className={classes.error}>Field is required</p>
        ) : null}
      </div>

      <div className={classes['form-element']}>
        <label htmlFor="signUpCountry">Country</label>
        <select id="signUpCountry" name="country">
          <option className={classes.option} value="Poland">
            Poland
          </option>
          <option className={classes.option} value="USA">
            USA
          </option>
        </select>
      </div>

      <div className={classes['form-element']}>
        <label htmlFor="signUpCurrency">Currency</label>
        <select id="signUpCurrency" name="currency">
          <option value="PLN">PLN</option>
          <option value="USD">USD</option>
        </select>
      </div>

      <div className={classes['form-element']}>
        <input
          className={hasEmailError ? classes.error : ''}
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          id="signUpEmail"
          name="email"
          type="email"
          placeholder=" "
        />
        <label htmlFor="signUpEmail">Email</label>
        {hasEmailError ? (
          <p className={classes.error}>Valid email is required</p>
        ) : null}
      </div>

      <div className={classes['form-element']}>
        <input
          className={hasPasswordError ? classes.error : ''}
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          id="signUpPassword"
          name="password"
          type="password"
          placeholder=" "
        />
        <label htmlFor="signUpPassword">Password</label>
        {hasPasswordError ? (
          <p className={classes.error}>
            Field is required (minimum 6 characters without space)
          </p>
        ) : null}
      </div>

      <div className={classes['form-element']}>
        <input type="checkbox" id="subscribe" name="subscribe" />
        <label htmlFor="subscribe">{`Get offers from carefully selected Skrill partners. We'll not share your personal data, but will send you marketing messages on their behalf.`}</label>
      </div>
      <Terms />
      <Button type="submit" className={classes.submit} disable={!isValidForm}>
        {isSubmitting ? 'Submitting' : 'Register'}
      </Button>
    </Form>
  );
};

export default SignUpForm;
