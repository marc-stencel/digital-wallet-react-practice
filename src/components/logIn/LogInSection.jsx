import { Link } from 'react-router-dom';

import FormMessage from '../forms/elements/FormMessage';
import LogInForm from '../forms/login/LogInForm';
import Policy from './Policy';

import classes from './LogInSection.module.css';

const LogInSection = ({ hasError, errorMessage }) => {
  const isSignedUp = localStorage.getItem('isSignedUp');
  const isLogOut = localStorage.getItem('isLogOut');
  const isShowMessage = hasError || isSignedUp || isLogOut;

  let successMessage;

  if (isSignedUp) {
    successMessage = 'Success!! Now you can Log In.';
    setTimeout(() => localStorage.removeItem('isSignedUp'), 0);
  } else if (isLogOut) {
    successMessage = 'Sign-out successful!!';
    setTimeout(() => localStorage.removeItem('isLogOut'), 0);
  }

  return (
    <div className={classes.wrapper}>
      <section className={classes['log-in']}>
        <h2>Log in to your Skrill account</h2>
        <div className={classes['question-wrapper']}>
          <p className={classes.question}>{`Don't have an account?`}</p>
          <Link to="/register" className={classes.link}>
            Register
          </Link>
        </div>
        {isShowMessage ? (
          <FormMessage
            message={errorMessage ? errorMessage : successMessage}
            status={successMessage}
          />
        ) : null}
        <LogInForm />
        <Policy />
      </section>
    </div>
  );
};

export default LogInSection;
