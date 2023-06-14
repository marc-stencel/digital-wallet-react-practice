import { Link } from 'react-router-dom';

import LogInForm from './LogInForm';
import Policy from './Policy';

import classes from './LogInSection.module.css';

const LogInSection = () => {
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
        <LogInForm />
        <Policy />
      </section>
    </div>
  );
};

export default LogInSection;
