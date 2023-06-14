import { Link } from 'react-router-dom';

import SignUpForm from './SignUpForm';

import classes from './SignUpSection.module.css';

const SignUpSection = () => {
  return (
    <section className={classes['sign-up']}>
      <h2>Register</h2>
      <div className={classes['question-wrapper']}>
        <p className={classes.question}>Already have an account?</p>
        <Link to="/login" className={classes.link}>
          Log in
        </Link>
      </div>
      <SignUpForm />
    </section>
  );
};

export default SignUpSection;
