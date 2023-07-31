import PromoSection from './PromoSection';
import SignUpSection from './SignUpSection';

import classes from './Registration.module.css';

const Registration = ({ hasError, message }) => {
  return (
    <div className={classes.wrapper}>
      <PromoSection />
      <SignUpSection hasError={hasError} message={message} />
    </div>
  );
};

export default Registration;
