import { Link } from 'react-router-dom';

import FormMessage from '../forms/elements/FormMessage';
import SignUpForm from '../forms/signup/SignUpForm';

import classes from './SignUpSection.module.css';

const SignUpSection = ({ hasError, message }) => {
  const isShowMessage = hasError;

  return (
    <section className={classes['sign-up']}>
      <h2>Register</h2>
      <div className={classes['question-wrapper']}>
        <p className={classes.question}>Already have an account?</p>
        <Link to="/login" className={classes.link}>
          Log in
        </Link>
      </div>
      {isShowMessage ? <FormMessage message={message} status={false} /> : null}
      <SignUpForm />
    </section>
  );
};

export default SignUpSection;
