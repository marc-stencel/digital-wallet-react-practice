import PromoSection from './PromoSection';
import SignUpSection from './SignUpSection';

import classes from './Registration.module.css';

const Registration = () => {
  return (
    <div className={classes.wrapper}>
      <PromoSection />
      <SignUpSection />
    </div>
  );
};

export default Registration;
