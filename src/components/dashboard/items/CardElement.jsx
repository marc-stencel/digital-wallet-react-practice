import ToggleButton from '../../buttons/ToggleButton';

import classes from './CardElement.module.css';

const CardElement = ({ buttonText, children, isShowForm, onToggleForm }) => {
  return (
    <div className={classes['card-element']}>
      {children}
      {!isShowForm && buttonText ? (
        <ToggleButton onToggleButton={onToggleForm}>{buttonText}</ToggleButton>
      ) : null}
    </div>
  );
};

export default CardElement;
